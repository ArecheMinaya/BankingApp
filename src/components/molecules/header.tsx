import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Avatar, { AvatarProps } from "../atoms/avatar";
import { Bell } from "lucide-react-native";
import { colors, typography } from "@/src/styles";

const Header = (userInfo: AvatarProps) => {
  return (
    <View style={styles.topBar}>
      <Avatar {...userInfo} />
      <View style={styles.userInfoContainer}>
        <Text style={styles.welcomeText}>Bienvenido</Text>
        <Text style={styles.nameText}>{userInfo.name}</Text>
      </View>
      <Pressable onPress={() => {}}>
        <Bell size={30} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 16,
    height: 90,
  },
  userInfoContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  nameText: {
    fontSize: typography.fontSize.medium,
    fontWeight: "bold",
    color: colors.primaryDark,
  },
  welcomeText: {
    fontSize: typography.fontSize.small,
    fontWeight: "semibold",
    color: colors.grayDark,
  },
});

export default Header;
