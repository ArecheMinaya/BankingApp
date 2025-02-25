import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Header from "@/src/components/molecules/header";
import { SafeAreaView } from "react-native-safe-area-context";
import TopCustomTabs from "@/src/components/organisms/tobNavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";
import { getUserInformation } from "@/src/redux/slices/userInformationSlice";
import { UserModel } from "@/src/types/userInformation";
import ToastManager from "toastify-react-native/components/ToastManager";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const userData = useSelector((state: RootState) => state.userData);

  useEffect(() => {
    dispatch(getUserInformation());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      {userData.status === "loading" ? (
        <Text>Loading...</Text>
      ) : (
        <ProductsList userInformation={userData.userInformation} />
      )}
    </SafeAreaView>
  );
};

export default Products;

interface ProductsListProps {
  userInformation: UserModel | null;
}

const ProductsList = (userInformation: ProductsListProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        name={userInformation.userInformation?.userInfo.name ?? ""}
        size={46}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: 30,
          padding: 20,
        }}
      >
        <TopCustomTabs
          items={[
            {
              label: "Cuentas de ahorro",
              icon: "PiggyBank",
              shortName: "SAV",
            },
            {
              label: "Tarjetas de credito",
              icon: "CreditCard",
              shortName: "CC",
            },
            {
              label: "Prestamos",
              icon: "HandCoins",
              shortName: "PL",
            },
          ]}
          accounts={userInformation.userInformation?.accounts ?? []}
        />
      </View>
      <ToastManager showProgressBar={false} showCloseIcon={false} />
    </View>
  );
};
