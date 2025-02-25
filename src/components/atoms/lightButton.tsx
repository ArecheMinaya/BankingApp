import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "./icon";
import { colors } from "@/src/styles";
import { icons } from "lucide-react-native";
type IconNames = keyof typeof icons;

const LightButton = ({
  onViewMovements,
  iconName,
  title,
}: {
  onViewMovements: () => void;
  iconName: IconNames;
  title: string;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onViewMovements}>
      <Icon name={iconName} color={colors.primary} size={18} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    justifyContent: "center",
    backgroundColor: colors.lightBlueBg,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
    color: colors.primaryDark,
  },
});

export default LightButton;
