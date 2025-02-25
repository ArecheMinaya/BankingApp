import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { colors } from "@/src/styles";
import Icon from "../atoms/icon";
import { icons } from "lucide-react-native";

type IconNames = keyof typeof icons;

type TabItem = {
  label: string;
  icon: IconNames;
};

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const icons = new Map<string, TabItem>([
    ["transactions", { label: "Transacciones", icon: "Send" }],
    ["products", { label: "Productos", icon: "StretchHorizontal" }],
    ["profile", { label: "Perfil", icon: "User" }],
  ]);

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            <Icon
              name={icons.get(route.name)?.icon ?? "PiggyBank"}
              color={isFocused ? colors.secondary : colors.grayDark}
              size={24}
            />
            <Text
              style={{
                color: isFocused ? colors.secondary : colors.grayDark,
                fontSize: 12,
                marginTop: 2,
              }}
            >
              {icons.get(route.name)?.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 24,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginHorizontal: 20,
    elevation: 2,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomTabBar;
