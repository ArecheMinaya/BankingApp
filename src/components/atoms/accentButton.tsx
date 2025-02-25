import { colors } from "@/src/styles";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface AccentButtonProps {
  title: string;
  onPress: () => void;
}

const AccentButton: React.FC<AccentButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default AccentButton;
