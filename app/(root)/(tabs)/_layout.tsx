import React from "react";
import { Tabs } from "expo-router";
import CustomTabBar from "@/src/components/organisms/customTabBar";

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen
        name="products"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
