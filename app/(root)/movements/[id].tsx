import { View, StyleSheet, FlatList, Text } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderWhitBackNavigation from "@/src/components/molecules/headerWhitBackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";
import { getRecentMovements } from "@/src/redux/slices/movementsSlice";
import { useLocalSearchParams } from "expo-router";
import TransactionItem from "@/src/components/molecules/transactionItem";
import OutLineButton from "@/src/components/atoms/outLineButton";

const Movements = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const dispatch = useDispatch<AppDispatch>();

  const [movementType, setMovementType] = useState<"debit" | "credit" | "all">(
    "all",
  );

  const recentMovements = useSelector(
    (state: RootState) => state.recentMovements,
  );

  let filteredMovements =
    recentMovements.recentMovements?.recentMovements?.filter((item) => {
      if (movementType === "all") {
        return true;
      }
      return item.type === movementType;
    });

  useEffect(() => {
    dispatch(getRecentMovements({ id: Number(id) }));
  }, [dispatch, id]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} edges={["top"]}>
      {recentMovements.status === "succeeded" ? (
        <View style={styles.container}>
          <HeaderWhitBackNavigation title={"Transacciones"} />
          <View
            style={{
              width: "100%",
              paddingHorizontal: 20,
              flexDirection: "row",
              gap: 10,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <OutLineButton
              onViewMovements={() => {
                setMovementType("all");
              }}
              title="Todas"
              isActive={movementType === "all"}
            />
            <OutLineButton
              onViewMovements={() => {
                setMovementType("credit");
              }}
              title="Crédito"
              isActive={movementType === "credit"}
            />
            <OutLineButton
              onViewMovements={() => {
                setMovementType("debit");
              }}
              title="Débito"
              isActive={movementType === "debit"}
            />
          </View>
          <FlatList
            style={{ flex: 1, width: "100%", paddingHorizontal: 20 }}
            data={filteredMovements ?? []}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TransactionItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default Movements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
