import { colors } from "@/src/styles";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface SecondaryButtonProps {
  title: string;
  onPress: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  title,
  onPress,
}) => {
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
    backgroundColor: colors.secondary,
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

export default SecondaryButton;
