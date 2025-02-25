/* eslint-disable import/no-unresolved */
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/src/components/atoms/icon";
import colors from "@/src/styles/colors";
import HeaderWhitBackNavigation from "@/src/components/molecules/headerWhitBackNavigation";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import AccountConfirmationInfo from "@/src/components/molecules/accountConfirmationInfo";

const CompletedTransaction = () => {
  const transactionInformation = useSelector(
    (state: RootState) => state.accountsForTransfer.trasfer,
  );
  return (
    <SafeAreaView style={styles.container}>
      <HeaderWhitBackNavigation title="Transferencia completada" />
      <View style={{ marginTop: 10 }}>
        <Icon name="CircleCheckBig" color="green" size={60} />
      </View>
      <Text style={styles.amount}>
        {transactionInformation?.account.accountCurrency.currencyLabel}
        {transactionInformation!.amount}
      </Text>
      <Text style={styles.subtitle}>Monto transferido</Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingEnd: 20,
          alignItems: "center",
        }}
      >
        <Text style={styles.sectionTitle}>Origen</Text>
        <Icon name="Share" color={colors.accent} size={24} strokeWidth={3} />
      </View>
      <View style={{ width: "100%" }}>
        <AccountConfirmationInfo {...transactionInformation!.account} />
      </View>
      <Text style={styles.sectionTitle}>Destino</Text>
      <View style={{ width: "100%" }}>
        <AccountConfirmationInfo
          {...transactionInformation!.beneficiaryAccount}
        />
      </View>
      <View style={styles.dateContainer}>
        <Icon name="Calendar" color={colors.primary} size={26} />
        <View>
          <Text style={styles.dateTitle}>Ejecucion</Text>
          <Text style={styles.date}>{transactionInformation!.date}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 14,
    color: colors.primary,
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "600",
    marginBottom: 20,
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
    alignSelf: "flex-start",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  accountContainer: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    padding: 14,
    borderRadius: 14,
    marginTop: 8,
    width: "100%",
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
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  dateTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: colors.primaryDark,
    marginTop: 20,
    alignSelf: "flex-start",
    marginBottom: 4,
    marginHorizontal: 10,
  },
  date: {
    fontWeight: "600",
    fontSize: 12,
    color: colors.grayDark,
    alignSelf: "flex-start",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    paddingHorizontal: 20,
    alignContent: "center",
    justifyContent: "flex-start",
  },
});

export default CompletedTransaction;
