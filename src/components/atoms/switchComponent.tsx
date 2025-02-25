import { colors } from "@/src/styles";
import React from "react";
import { Switch, View, Text, StyleSheet } from "react-native";

const SwitchComponent = ({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginRight: 30 }}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor sit
          amet consectetur adipisicing elit.
        </Text>
      </View>
      <Switch
        trackColor={{ false: "#ccc", true: "#6C63FF" }}
        thumbColor={"#fff"}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.primaryDark,
  },
  subtitle: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: "normal",
    color: colors.grayDark,
  },
});

export default SwitchComponent;
