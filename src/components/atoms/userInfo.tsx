import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, typography } from "@/src/styles";

const UserInfo = ({ name }: { name: string }) => {
  return (
    <View style={styles.userInfoContainer}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.SubtitleText}>Datos Personales</Text>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  nameText: {
    fontSize: typography.fontSize.medium,
    fontWeight: "bold",
    color: colors.primaryDark,
  },
  SubtitleText: {
    fontSize: typography.fontSize.small,
    fontWeight: "semibold",
    color: colors.grayDark,
  },
});
