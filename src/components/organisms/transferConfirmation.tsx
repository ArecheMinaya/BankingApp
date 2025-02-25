/* eslint-disable import/no-unresolved */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SecondaryButton from "../atoms/secondaryButton";
import AccountConfirmationInfo from "../molecules/accountConfirmationInfo";
import { Account } from "@/src/types/account";
import { colors } from "@/src/styles";

const TransferConfirmation = ({
  accountSelected,
  beneficiarySelected,
  amount,
  handleConformationPress,
}: {
  accountSelected: Account;
  beneficiarySelected: Account;
  amount: string;
  handleConformationPress: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmas la transferencia</Text>

      <Text style={styles.amount}>
        {accountSelected?.accountCurrency?.currencyLabel}
        {amount}
      </Text>

      <Text style={styles.subtitle}>Monto a transferir</Text>

      <Text style={styles.sectionTitle}>Origen</Text>
      <AccountConfirmationInfo {...accountSelected} />
      <Text style={styles.sectionTitle}>Destino</Text>
      <AccountConfirmationInfo {...beneficiarySelected} />

      <View style={styles.buttonContainer}>
        <SecondaryButton
          title="Transferir"
          onPress={() => handleConformationPress()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 14,
    color: colors.primary,
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "600",
  },
  amount: {
    fontWeight: "600",
    fontSize: 30,
    color: colors.secondary,
    alignSelf: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 12,
    color: colors.grayDark,
    alignSelf: "center",
    marginTop: 6,
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 18,
    color: colors.primaryDark,
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default TransferConfirmation;
