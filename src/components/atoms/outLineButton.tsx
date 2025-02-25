import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/src/styles/colors";

const OutLineButton = ({
  onViewMovements,
  title,
  isActive,
}: {
  onViewMovements: () => void;
  title: string;
  isActive?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={isActive ? styles.acTiveButton : styles.button}
      onPress={onViewMovements}
    >
      <Text style={{ color: isActive ? colors.white : colors.primary }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OutLineButton;

const styles = StyleSheet.create({
  acTiveButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    justifyContent: "center",
    backgroundColor: colors.primaryDark,
    borderRadius: 10,
    padding: 10,
    borderColor: colors.primaryDark,
    borderWidth: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    justifyContent: "center",
    backgroundColor: "White",
    borderRadius: 10,
    padding: 10,
    borderColor: colors.primaryDark,
    borderWidth: 1,
  },
});
