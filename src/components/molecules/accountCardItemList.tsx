import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Account } from "@/src/types/account";
import Icon from "../atoms/icon";
import { colors } from "@/src/styles";

const AccountCardItemList = ({ account }: { account: Account }) => {
  return (
    <View style={styles.cardContainer}>
      <Icon name="PiggyBank" size={30} color={colors.secondary} />
      <View style={styles.accountInfo}>
        <Text style={styles.aliasText}>{account.alias}</Text>
        <Text style={styles.accountTypeText}>
          {account.accountType.accountTypeName}
        </Text>
        <Text style={styles.maskedNumberText}>{account.maskedNumber}</Text>
      </View>
      <Text style={styles.amount}>
        {account.accountCurrency.currencyLabel}
        {account.accountBalance}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.5,
    elevation: 2,
    paddingVertical: 16,
    paddingHorizontal: 14,
    width: "100%",
  },
  accountInfo: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 16,
  },
  aliasText: {
    fontWeight: "600",
    color: colors.primary,
    fontSize: 16,
  },
  accountTypeText: {
    color: colors.grayDark,
    marginTop: 5,
    fontSize: 12,
  },
  maskedNumberText: {
    marginTop: 5,
    fontSize: 12,
  },
  currencyLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.primary,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.accent,
  },
});

export default AccountCardItemList;
