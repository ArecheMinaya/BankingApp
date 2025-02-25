import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/src/styles";
import Icon from "../atoms/icon";
import { Account } from "@/src/types/account";

const AccountConfirmationInfo = (acount: Account) => {
  return (
    <View style={styles.accountContainer}>
      <View style={styles.accountHeader}>
        <Icon name="PiggyBank" size={24} color={colors.primary} />
        <Text style={styles.accountAlias}>{acount?.alias}</Text>
      </View>
      <View style={styles.accountDetailRow}>
        <Text>Tipo de cuenta</Text>
        <Text>{acount?.accountType.accountTypeName}</Text>
      </View>
      <View style={styles.accountDetailRow}>
        <Text>No. de cuenta</Text>
        <Text>{acount?.accountNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountContainer: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    padding: 14,
    marginHorizontal: 20,
    borderRadius: 14,
    marginTop: 8,
  },
  accountHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  accountAlias: {
    fontWeight: "bold",
    color: colors.primary,
  },
  accountDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default AccountConfirmationInfo;
