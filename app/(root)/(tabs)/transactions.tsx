import AccentButton from "@/src/components/atoms/accentButton";
import AmountInput from "@/src/components/atoms/amountInput";
import AccountCardItemList from "@/src/components/molecules/accountCardItemList";
import SelectAccount from "@/src/components/molecules/selectAccount";
import SelectAccountBottomSheet from "@/src/components/organisms/selectAccountBottomSheet";
import TransferConfirmation from "@/src/components/organisms/transferConfirmation";
import {
  getAccountsForTransfer,
  setTransfer,
} from "@/src/redux/slices/accounstForTransferSlice";
import { AppDispatch, RootState } from "@/src/redux/store";
import { colors } from "@/src/styles";
import { Account } from "@/src/types/account";
import BottomSheet from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDispatch, useSelector } from "react-redux";

const Transactions = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [accountToTransfer, setAccountToTransfer] = useState<Account | null>(
    null,
  );
  const dispatch = useDispatch<AppDispatch>();

  const accountsForTransfer = useSelector(
    (state: RootState) => state.accountsForTransfer,
  );

  useEffect(() => {
    dispatch(getAccountsForTransfer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAccountToTransfer = useCallback((account: Account) => {
    setAccountToTransfer(account);
  }, []);

  const handleSelectAccount = useCallback((account: Account) => {
    setSelectedAccount(account);
  }, []);

  const handleTransfer = ({
    amount,
    account,
    beneficiaryAccount,
  }: {
    amount: number;
    account: Account;
    beneficiaryAccount: Account;
  }) => {
    dispatch(
      setTransfer({
        account: account,
        beneficiaryAccount: beneficiaryAccount,
        amount: amount,
        date: new Date().toISOString(),
      }),
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {accountsForTransfer.status === "succeeded" ? (
        <SelectAccountCard
          accounts={accountsForTransfer.accounts?.accounts ?? []}
          handleSelectAccount={handleSelectAccount}
          accountSelected={selectedAccount}
          beneficiaryAccounts={
            accountsForTransfer.accounts?.beneficiaryAccounts ?? []
          }
          handleSelectBeneficiary={handleSelectAccountToTransfer}
          beneficiarySelected={accountToTransfer}
          handleTransfer={handleTransfer}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default Transactions;

const SelectAccountCard = ({
  accounts,
  handleSelectAccount,
  accountSelected,
  beneficiaryAccounts,
  handleSelectBeneficiary,
  beneficiarySelected,
  handleTransfer,
}: {
  accounts: Account[];
  handleSelectAccount: (account: Account) => void;
  accountSelected: Account | null;
  beneficiaryAccounts: Account[];
  handleSelectBeneficiary: (account: Account) => void;
  beneficiarySelected: Account | null;
  handleTransfer: ({
    amount,
    account,
    beneficiaryAccount,
  }: {
    amount: number;
    account: Account;
    beneficiaryAccount: Account;
  }) => void;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const beneficiarySheetRef = useRef<BottomSheet>(null);
  const confirmationSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["85%", 620], []);

  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const handlePresentConfirmationPress = useCallback(() => {
    confirmationSheetRef.current?.snapToIndex(1);
  }, []);

  const handlePresentBeneficiaryPress = useCallback(() => {
    beneficiarySheetRef.current?.snapToIndex(0);
  }, []);

  const handleDismissPress = useCallback(() => {
    bottomSheetRef.current?.close();
    beneficiarySheetRef.current?.close();
  }, []);

  const [amount, setAmount] = useState("");

  const handleAmountChange = (text: string) => {
    const numericText = text.replace(/[^0-9.]/g, "");
    const formattedText = numericText.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    setAmount(formattedText);
  };

  const handleTransferPress = () => {
    const numericString = amount.replace(/,/g, "");
    if (accountSelected === null) {
      alert("Seleccione una cuenta de origen");
      return;
    }

    if (beneficiarySelected === null) {
      alert("Seleccione una cuenta de destino");
      return;
    }
    if (amount === "" || parseFloat(amount) <= 0) {
      alert("Ingrese una cantidad mayor a 0");
      return;
    }

    if (parseFloat(numericString) > accountSelected!.accountBalance) {
      alert("No tiene saldo suficiente para realizar la transferencia");
      return;
    }
    handlePresentConfirmationPress();
    handleTransfer({
      amount: parseFloat(numericString),
      account: accountSelected,
      beneficiaryAccount: beneficiarySelected,
    });
  };

  const handleConformationPress = () => {
    confirmationSheetRef.current?.close();
    router.replace("/(root)/completed");
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.touchable}
    >
      <GestureHandlerRootView style={styles.gestureHandler}>
        <Text style={styles.title}>Transferencias entre mis cuentas</Text>
        <View style={{ height: 20 }} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuenta de Origen</Text>
        </View>
        <Pressable onPress={handlePresentPress} style={styles.pressable}>
          {accountSelected ? (
            <AccountCardItemList account={accountSelected} />
          ) : (
            <SelectAccount />
          )}
        </Pressable>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuenta de Beneficiario</Text>
        </View>
        <Pressable
          onPress={handlePresentBeneficiaryPress}
          style={styles.pressable}
        >
          {beneficiarySelected ? (
            <AccountCardItemList account={beneficiarySelected} />
          ) : (
            <SelectAccount />
          )}
        </Pressable>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Monto</Text>
        </View>
        <AmountInput amount={amount} handleAmountChange={handleAmountChange} />
        <View style={styles.spacer} />
        <View style={styles.buttonContainer}>
          <AccentButton
            title="Continuar"
            onPress={() => {
              handleTransferPress();
            }}
          />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={-1}
          enablePanDownToClose={true}
          enableDynamicSizing={false}
        >
          <SelectAccountBottomSheet
            handleDismissPress={handleDismissPress}
            handleSelectAccount={handleSelectAccount}
            accounts={accounts.filter(
              (item) =>
                item.accountNumber !== beneficiarySelected?.accountNumber,
            )}
          />
        </BottomSheet>
        <BottomSheet
          ref={beneficiarySheetRef}
          snapPoints={snapPoints}
          index={-1}
          enablePanDownToClose={true}
          enableDynamicSizing={false}
        >
          <SelectAccountBottomSheet
            handleDismissPress={handleDismissPress}
            handleSelectAccount={handleSelectBeneficiary}
            accounts={beneficiaryAccounts.filter(
              (item) => item.accountNumber !== accountSelected?.accountNumber,
            )}
          />
        </BottomSheet>
        <BottomSheet
          ref={confirmationSheetRef}
          snapPoints={snapPoints}
          index={-1}
          enablePanDownToClose={true}
          enableDynamicSizing={false}
        >
          {accountSelected && beneficiarySelected && (
            <TransferConfirmation
              amount={amount}
              accountSelected={accountSelected!}
              beneficiarySelected={beneficiarySelected!}
              handleConformationPress={handleConformationPress}
            />
          )}
        </BottomSheet>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  touchable: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  gestureHandler: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
  spacer: {
    flex: 1,
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    alignContent: "flex-start",
    width: "100%",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "semibold",
    color: colors.primaryDark,
  },
  pressable: {
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 80,
    width: "100%",
  },
});
