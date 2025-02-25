import { Movement } from "@/src/types/movement";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "../atoms/icon";

const TransactionItem = ({ item }: { item: Movement }) => {
  return (
    <View style={styles.container}>
      {item.type === "debit" ? (
        <Icon name="ArrowUp" color="red" size={18} />
      ) : (
        <Icon name="ArrowDown" color="green" size={18} />
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.customerName}>{item.customerName}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View>
        <Text
          style={[
            styles.amount,
            { color: item.type === "debit" ? "red" : "green" },
          ]}
        >
          {item.type === "debit" ? "-" : "+"}
          {item.currency.currencyLabel}
          {item.amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 16,
    paddingVertical: 14,
    marginTop: 14,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.5,
    elevation: 2,
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#10375C",
  },
  date: {
    fontSize: 12,
    color: "#939596",
    marginTop: 4,
  },
  amount: {
    fontSize: 14,
    textAlign: "right",
    fontWeight: "500",
  },
});

export default TransactionItem;
