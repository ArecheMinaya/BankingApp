import { View, Text, FlatList } from "react-native";
import React, { useMemo, useState } from "react";
import { colors } from "@/src/styles";
import GrayTextInput from "../atoms/grayTextInput";
import Icon from "../atoms/icon";
import { Pressable } from "react-native-gesture-handler";
import { Account } from "@/src/types/account";

const SelectAccountBottomSheet = ({
  accounts,
  handleSelectAccount,
  handleDismissPress,
}: {
  accounts: Account[];
  handleSelectAccount: (account: Account) => void;
  handleDismissPress: () => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");

  const filteredAccounts = useMemo(() => {
    return accounts.filter((account) =>
      account.alias.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [accounts, searchText]);

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "semibold",
          color: colors.primaryDark,
          marginBottom: 16,
        }}
      >
        Seleccione una cuenta
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Icon name="Search" size={20} color={colors.primaryDark} />
        <GrayTextInput
          placeholder="Buscar..."
          style={{
            flex: 1,
            backgroundColor: colors.backgroundLightGray,
            paddingHorizontal: 10,
            borderRadius: 10,
            paddingVertical: 12,
          }}
          onChange={
            (e) => setSearchText(e.nativeEvent.text)
            // setSearchText(e.nativeEvent.text)
          }
        />
      </View>
      <View style={{ flex: 1, marginTop: 20, paddingBottom: 90 }}>
        <FlatList
          data={filteredAccounts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  handleSelectAccount(item);
                  handleDismissPress();
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginHorizontal: 2,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.5,
                    elevation: 2,
                    paddingVertical: 16,
                    paddingHorizontal: 14,
                  }}
                >
                  <Icon name="PiggyBank" size={30} color={colors.secondary} />
                  <View
                    style={{
                      flexDirection: "column",
                      flex: 1,
                      marginLeft: 16,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "semibold",
                        color: colors.primary,
                        fontSize: 14,
                      }}
                    >
                      {item.alias}
                    </Text>
                    <Text
                      style={{
                        color: colors.grayDark,
                        marginTop: 5,
                        fontSize: 12,
                      }}
                    >
                      {item.accountType.accountTypeName}
                    </Text>
                    <Text style={{ marginTop: 5, fontSize: 12 }}>
                      {item.maskedNumber}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: colors.accent,
                      fontSize: 16,
                    }}
                  >
                    {item.accountCurrency.currencyLabel}
                    {item.accountBalance}
                  </Text>
                </View>
              </Pressable>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SelectAccountBottomSheet;
