import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import TransactionList from "../organisms/transactionList";
import { Share } from "lucide-react-native";
import LightButton from "../atoms/lightButton";
import HeaderWhitBackNavigation from "../molecules/headerWhitBackNavigation";
import AnimationBackgrounCard from "../organisms/animationBackgrounCard";
import { Movement } from "@/src/types/movement";
import { AccountInformation } from "@/src/types/accountDetail";
import colors from "@/src/styles/colors";

const ProductDetailTemplate = ({
  handlePressMoreInfo,
  recentMovements,
  accountInformation,
}: {
  handlePressMoreInfo: () => void;
  recentMovements: Movement[];
  accountInformation: AccountInformation;
}) => {
  return (
    <View style={styles.container}>
      <HeaderWhitBackNavigation title={"Detalle de Cuenta"} />
      <View style={styles.cardContainer}>
        <AnimationBackgrounCard account={accountInformation} />
        <TouchableOpacity onPress={handlePressMoreInfo}>
          <Text style={styles.detailText}>Ver Detalle de Cuenta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.actionsContainer}>
          <View style={styles.buttonsContainer}>
            <LightButton
              onViewMovements={() => {}}
              iconName="Send"
              title="Transferir"
            />
            <LightButton
              onViewMovements={() => {}}
              iconName="File"
              title="Estado de cuenta"
            />
          </View>
          <View style={styles.shareIcon}>
            <Share size={18} color={colors.accent} strokeWidth={3} />
          </View>
        </View>
        <TransactionList
          transactions={recentMovements ?? []}
          id={accountInformation.id.toString()}
        />
      </View>
    </View>
  );
};

export default ProductDetailTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: "100%",
    paddingBottom: 30,
    paddingHorizontal: 20,
    paddingTop: 10,
    alignContent: "center",
    alignItems: "center",
  },
  detailText: {
    fontSize: 14,
    color: colors.accent,
    marginTop: 16,
    fontWeight: "600",
  },
  contentContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  buttonsContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 10,
  },
  shareIcon: {
    marginTop: 10,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 16,
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
});
