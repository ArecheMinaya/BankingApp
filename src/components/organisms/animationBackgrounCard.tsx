import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "../atoms/icon";
import BlurCard from "./blurCard";
import { LinearGradient } from "expo-linear-gradient";
import { AccountInformation } from "@/src/types/accountDetail";
import { colors } from "@/src/styles";

const AnimationBackgrounCard = ({
  account,
}: {
  account: AccountInformation;
}) => {
  return (
    <BlurCard style={styles.boxStyle}>
      <LinearGradient
        // Background Linear Gradient
        colors={[colors.primaryLight, colors.primary, colors.primaryDark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.cardStyle}>
          <View style={styles.cardViewStyle}>
            <Text style={styles.bankTextStyle}>{"Mi Banca Digital"}</Text>
            {/* colocar style de image */}
            <Icon name="Nfc" color={"white"} size={32} />
          </View>
          <View>
            {/* colocar style de clip */}
            <Image
              source={require("../../../assets/images/chip.png")}
              style={styles.clipImage}
            />
          </View>
          <View style={styles.cardHolderContainer}>
            <Text style={styles.cardNumberStyle}>{account.cardNumber}</Text>
            <Text style={styles.cardName}>{account.cardHolder}</Text>
          </View>
        </View>
      </LinearGradient>
    </BlurCard>
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    height: 210,
    width: 330,
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "hidden",
  },
  cardStyle: {
    padding: 15,
    flex: 1,
    justifyContent: "space-between",
  },

  clipImage: {
    height: 48,
    width: 48,
    resizeMode: "contain",
  },
  cardViewStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  bankTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  cardHolderContainer: {
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 4,
    paddingBottom: 4,
  },
  cardNumberStyle: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
    marginBottom: 8,
  },
  cardName: {
    fontSize: 16,
    color: "white",
  },
});

export default AnimationBackgrounCard;
