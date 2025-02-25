import { View, StyleSheet } from "react-native";
import React from "react";
import { icons } from "lucide-react-native";
import Animated, { FadeInRight, FadeOut } from "react-native-reanimated";
import Icon from "../atoms/icon";
import { colors } from "@/src/styles";

type IconNames = keyof typeof icons;
export type TopCustomTabItem = {
  tabItem: TabItem;
  isSelected: boolean;
};

export type TabItem = {
  label: string;
  icon: IconNames;
  shortName: string;
};

const TopTabBarItem = ({ ...topCustomTabItem }: TopCustomTabItem) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: topCustomTabItem.isSelected
            ? colors.accent
            : colors.backgroundLightGray,
        },
      ]}
    >
      <Icon
        name={topCustomTabItem.tabItem.icon}
        color={topCustomTabItem.isSelected ? colors.white : colors.black}
      />
      {topCustomTabItem.isSelected && (
        <Animated.Text
          entering={FadeInRight.springify().damping(80).stiffness(200)}
          exiting={FadeOut.springify().damping(80).stiffness(200)}
          style={[styles.label, { color: colors.white }]}
        >
          {topCustomTabItem.tabItem.label}
        </Animated.Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
});

export default TopTabBarItem;
