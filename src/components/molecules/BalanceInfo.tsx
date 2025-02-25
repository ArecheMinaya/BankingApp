import { colors } from "@/src/styles";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface BalanceInfoProps {
  balance: number;
  currency: string;
}

const BalanceInfo: React.FC<BalanceInfoProps> = ({ balance, currency }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Balance disponible</Text>
      <Text style={styles.balance}>
        {currency}
        {balance.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", marginTop: 10 },
  label: { fontSize: 12, color: colors.accent },
  balance: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 5,
  },
});

export default BalanceInfo;
