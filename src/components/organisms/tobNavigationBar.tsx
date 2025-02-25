import { View, Pressable, Text, FlatList, Image } from "react-native";
import TopTabBarItem, { TabItem } from "../molecules/topTabBarItem";
import React, { useEffect } from "react";
import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import AccountCard from "./accountCard";
import { colors } from "@/src/styles";
import { Account } from "@/src/types/account";
import { router } from "expo-router";

interface TopCustomTabsProps {
  items: TabItem[];
  accounts: Account[];
}

export default function TopCustomTabs({ items, accounts }: TopCustomTabsProps) {
  const [selectedItem, setSelectedItem] = React.useState(items[0].shortName);

  let filteredAccounts = accounts.filter((account) => {
    return account.accountType.accountTypeShortName === selectedItem;
  });

  return (
    <View style={{ width: "100%", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignContent: "center",
          alignItems: "center",
          gap: 14,
        }}
      >
        {items.map((item, index) => (
          <Animated.View
            key={index}
            layout={LinearTransition.springify().damping(80).stiffness(200)}
          >
            <Pressable onPress={() => setSelectedItem(item.shortName)}>
              <TopTabBarItem
                isSelected={item.shortName === selectedItem}
                tabItem={item}
              />
            </Pressable>
          </Animated.View>
        ))}
      </View>
      {filteredAccounts.length === 0 && <AnimatedNotFound />}
      <FlatList
        data={filteredAccounts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 4 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <AnimatedAccountCard account={item} index={index} />
        )}
      />
    </View>
  );
}
const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedAccountCard = ({
  account,
  index,
}: {
  account: Account;
  index: number;
}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withDelay(index * 150, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(index * 150, withTiming(0, { duration: 500 }));
  }, [index, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const handleTransfer = () =>
    console.log(`Transferir desde la cuenta ${account.id}`);
  const handleViewMovements = () =>
    router.push(`/(root)/movements/${account.id}`);
  return (
    <AnimatedView style={animatedStyle}>
      <AccountCard
        account={account}
        onTransfer={handleTransfer}
        onViewMovements={handleViewMovements}
      />
    </AnimatedView>
  );
};

const AnimatedNotFound = () => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withDelay(1 * 150, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(1 * 150, withTiming(0, { duration: 500 }));
  }, [opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 100,
  }));

  return (
    <AnimatedView style={animatedStyle}>
      <Image
        source={require("../../../assets/images/emptyImg.png")}
        style={{ width: 180, height: 180 }}
      />
      <Text
        style={{ fontSize: 24, color: colors.primary, fontWeight: "semibold" }}
      >
        No se encontraron cuentas
      </Text>
    </AnimatedView>
  );
};
