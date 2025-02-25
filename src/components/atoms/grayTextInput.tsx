import { colors } from "@/src/styles";
import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

type InputProps = TextInputProps & {
  placeholder: string;
};

const GrayTextInput: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#888"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    backgroundColor: colors.backgroundLightGray,
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
});

export default GrayTextInput;
