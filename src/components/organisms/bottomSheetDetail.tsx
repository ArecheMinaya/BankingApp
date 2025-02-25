import { StyleSheet, Text } from "react-native";
import React from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { colors, typography } from "@/src/styles";
import ListItem from "../atoms/listItem";
import AccentButton from "../atoms/accentButton";
import { AccountInformation } from "@/src/types/accountDetail";

const BottomSheetDetail = ({
  account,
  handleDismissPress,
}: {
  account: AccountInformation;
  handleDismissPress: () => void;
}) => {
  return (
    <BottomSheetView style={styles.bottomSheetContent}>
      <Text
        style={{
          color: colors.primary,
          fontSize: typography.fontSize.medium,
          fontWeight: "bold",
          marginBottom: 16,
          marginTop: 10,
        }}
      >
        Detalles de la Cuenta
      </Text>

      <ListItem
        label="Tipo de Cuenta"
        value={account.accountType.accountTypeName ?? ""}
      />
      <ListItem
        label="Número de Cuenta"
        value={account.accountNumber ?? ""}
        enableCopy={true}
      />
      <ListItem
        label="Balance disponible"
        value={`${account.accountBalance ?? ""}`}
      />
      <ListItem
        label="Moneda"
        value={account.accountCurrency.currencyLabel ?? ""}
      />
      <ListItem
        label="Nombre del Propietario"
        value={account.cardHolder ?? ""}
      />
      <ListItem
        label="Número de Tarjeta"
        value={account.cardNumber ?? ""}
        enableCopy={true}
      />
      <ListItem label="CVV" value={account.cardCVV ?? ""} enableCopy={true} />

      <AccentButton title="Cerrar" onPress={handleDismissPress} />

      {/* Agrega aquí el contenido detallado de la cuenta */}
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  bottomSheetContent: {
    flex: 1,
    width: "100%",
    alignContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
});
export default BottomSheetDetail;
