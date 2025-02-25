import { colors } from "@/src/styles";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export interface AccountInfoProps {
  accountType: string;
  maskedNumber: string;
}

const AccountInfo: React.FC<AccountInfoProps> = ({
  accountType,
  maskedNumber,
}) => {
  return (
    <View>
      <Text style={styles.accountType}>{accountType}</Text>
      <Text style={styles.maskedNumber}>{maskedNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  accountType: { fontSize: 12, color: colors.grayDark },
  maskedNumber: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
    marginTop: 5,
  },
});

export default AccountInfo;
