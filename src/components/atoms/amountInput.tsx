import { View, Text, TextInput } from "react-native";
import React from "react";
import colors from "@/src/styles/colors";

const AmountInput = ({
  amount,
  handleAmountChange,
}: {
  amount: string;
  handleAmountChange: (text: string) => void;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontWeight: "semibold",
          color: colors.primary,
          fontSize: 30,
          marginRight: 10,
        }}
      >
        RD$
      </Text>
      <TextInput
        placeholder="0.00"
        onChange={(e) => {
          handleAmountChange(e.nativeEvent.text);
        }}
        value={amount}
        keyboardType="decimal-pad"
        style={{
          height: 50,
          flex: 1,
          fontSize: 30,
          borderBottomWidth: 1,
          borderBottomColor: colors.primary,
        }}
      />
    </View>
  );
};

export default AmountInput;
