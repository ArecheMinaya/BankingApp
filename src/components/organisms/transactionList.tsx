import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import TransactionItem from "../molecules/transactionItem";
import { Movement } from "@/src/types/movement";
import { router } from "expo-router";

// Lista principal
const TransactionList = ({
  transactions,
  id,
}: {
  transactions: Movement[];
  id: string;
}) => {
  const navigateToMovements = (id: string) =>
    router.push(`/(root)/movements/${id}`);
  return (
    <View style={styles.container}>
      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsTitle}>Últimas Transacciones</Text>
        <Pressable
          onPress={() => {
            navigateToMovements(id);
          }}
        >
          <Text style={styles.viewAllText}>Ver Todas</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TransactionItem item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignContent: "center",
    alignItems: "center",

    marginTop: 10,
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#10375C",
  },
  viewAllText: {
    fontSize: 14,
    color: "#068FFF",
  },
  container: {
    flex: 1,
    width: "100%",
  },
  separator: {
    height: 10,
  },
});
