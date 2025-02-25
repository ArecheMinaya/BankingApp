import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";
import { getAccountDetail } from "@/src/redux/slices/accountDetailSlice";
import BottomSheetDetail from "@/src/components/organisms/bottomSheetDetail";
import ProductDetailTemplate from "@/src/components/template/productDetailTemplate";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  // Puntos de anclaje para el Bottom Sheet
  const snapPoints = useMemo(() => [550], []);

  // Función para manejar la apertura del Bottom Sheet
  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  // Función para manejar la cierre del Bottom Sheet
  const handleDismissPress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const accountDetail = useSelector((state: RootState) => state.accountDetail);

  useEffect(() => {
    dispatch(getAccountDetail({ id: Number(id) }));
  }, [dispatch, id]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {accountDetail.status === "succeeded" ? (
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
          <ProductDetailTemplate
            handlePressMoreInfo={handlePresentPress}
            recentMovements={accountDetail.accountDetail?.recentMovements || []}
            accountInformation={accountDetail.accountDetail?.account!}
          />
          {accountDetail.accountDetail?.account && (
            <BottomSheet
              ref={bottomSheetRef}
              snapPoints={snapPoints}
              index={-1}
              enablePanDownToClose={true}
              enableDynamicSizing={false}
            >
              <BottomSheetDetail
                account={accountDetail.accountDetail.account}
                handleDismissPress={handleDismissPress}
              />
            </BottomSheet>
          )}
        </SafeAreaView>
      ) : (
        <Text>Loading...</Text>
      )}
    </GestureHandlerRootView>
  );
}
