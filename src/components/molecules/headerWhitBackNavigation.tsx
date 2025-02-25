import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/src/styles";
import Icon from "../atoms/icon";
import { router } from "expo-router";

const HeaderWhitBackNavigation = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginHorizontal: 10,
      }}
    >
      <Pressable
        onPress={() => {
          router.dismissTo(`/(root)/(tabs)/products`);
        }}
      >
        <Icon name="ChevronLeft" color={colors.secondary} size={40} />
      </Pressable>
      <Text style={styles.titleText}>{title}</Text>
      <Icon name="ChevronLeft" color={"transparent"} size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
});

export default HeaderWhitBackNavigation;
