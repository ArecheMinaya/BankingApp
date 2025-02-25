// src/components/organisms/AccountCard.tsx
import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import BalanceInfo from "../molecules/BalanceInfo";

import AccountInfo from "../molecules/accountInfo";
import Icon from "../atoms/icon";
import { colors } from "@/src/styles";
import { router } from "expo-router";
import LightButton from "../atoms/lightButton";
import { Account } from "@/src/types/account";

interface AccountCardProps {
  account: Account;
  onTransfer: () => void;
  onViewMovements: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({
  account,
  onViewMovements,
}) => {
  const handleCardPress = (id: string) =>
    router.push(`/(root)/productdetail/${id}`);
  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        handleCardPress(account.id.toString());
      }}
    >
      <View style={styles.header}>
        <AccountInfo
          accountType={account?.accountType?.accountTypeName ?? ""}
          maskedNumber={account?.maskedNumber ?? ""}
        />
        <Icon name="Share" color={colors.accent} size={18} strokeWidth={3} />
      </View>
      <BalanceInfo
        balance={account?.accountBalance ?? 0}
        currency={account?.accountCurrency?.currencyLabel ?? ""}
      />
      <View style={styles.actions}>
        <LightButton
          onViewMovements={() => {
            router.push({
              pathname: "/(root)/(tabs)/transactions",
              params: {
                id: account.id,
              },
            });
          }}
          iconName="Send"
          title="Transferir"
        />
        <LightButton
          onViewMovements={onViewMovements}
          iconName="ArrowLeftRight"
          title="Movimientos"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    shadowColor: "#000",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    justifyContent: "center",
    backgroundColor: colors.lightBlueBg,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
    color: colors.primaryDark,
  },
});

export default AccountCard;
