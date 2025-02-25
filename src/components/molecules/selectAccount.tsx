import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/src/styles";
import Icon from "../atoms/icon";

const SelectAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="Banknote" size={30} color={colors.primaryDark} />
        <Text style={styles.text}>Seleccione una cuenta</Text>
      </View>
      <Icon name="ChevronRight" size={30} color={colors.accent} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderStyle: "dashed",
    borderRadius: 10,
    borderWidth: 1,
    width: "100%",
  },
  content: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontWeight: "500", // 'semibold' no es una opción válida en React Native
    color: colors.grayDark,
    fontSize: 16,
  },
});

export default SelectAccount;
