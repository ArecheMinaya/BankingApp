import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "@/src/components/atoms/avatar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";
import Copyright from "@/src/components/atoms/copyright";
import Icon from "@/src/components/atoms/icon";
import { signOutUser } from "@/src/redux/slices/authSlice";
import {
  enambelBiometricLogin,
  getEnabledBiometricLogin,
  removeCredentials,
} from "@/src/utils/storage";
import { router } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import UserInfo from "@/src/components/atoms/userInfo";
import SwitchComponent from "@/src/components/atoms/switchComponent";
import { colors } from "@/src/styles";

export default function Profile() {
  const dispatch = useDispatch<AppDispatch>();

  const userData = useSelector((state: RootState) => state.userData);

  const [biometricLogin, setEnabledBiometricLogin] = useState(false);

  const handleToggleBiometricLogin = async () => {
    if (biometricLogin) {
      const response = await showAlert({
        title:
          "¿Estás seguro de que deseas desactivar la autenticación biométrica?",
        message:
          "Esta acción desactivará la autenticación biométrica y te redirigirá a la pantalla de inicio de sesión.",
      });
      if (!response) return;
      setEnabledBiometricLogin(!biometricLogin);
      await removeCredentials();
      router.replace("/");
    } else {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        alert(
          "Este dispositivo no es compatible con la autenticación biométrica.",
        );
        return;
      }
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      if (!enrolled) {
        alert("No se han configurado datos biométricos en este dispositivo.");
        return;
      }
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Autenticación biométrica",
        cancelLabel: "Cancelar",
        disableDeviceFallback: false,
      });
      if (result.success) {
        setEnabledBiometricLogin(!biometricLogin);
        await enambelBiometricLogin();
      } else {
        return;
      }
    }
  };

  const handleToggleNotification = () => {
    alert("Esta funcionalidad aún no está disponible.");
  };

  const handleLogout = async () => {
    const response = await showAlert({
      title: "¿Estás seguro de que deseas cerrar sesión?",
      message:
        "Esta acción cerrará la sesión actual y te redirigirá a la pantalla de inicio de sesión.",
    });
    if (!response) return;
    await dispatch(signOutUser());
  };

  const showAlert = ({
    title,
    message,
  }: {
    title: string;
    message: string;
  }): Promise<boolean> => {
    return new Promise((resolve) => {
      Alert.alert(title, message, [
        {
          text: "Cancelar",
          onPress: () => resolve(false), // Si se cancela, devuelve false
          style: "cancel",
        },
        {
          text: "Aceptar",
          onPress: () => resolve(true), // Si se acepta, devuelve true
        },
      ]);
    });
  };

  const checkBiometricLogin = async () => {
    const enabledBiometricLogin = await getEnabledBiometricLogin();
    setEnabledBiometricLogin(enabledBiometricLogin);
  };

  useEffect(() => {
    checkBiometricLogin();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} edges={["top"]}>
      <Text
        style={{
          marginTop: 10,
          fontSize: 20,
          fontWeight: "bold",
          color: colors.primary,
          textAlign: "center",
        }}
      >
        Mi Perfil
      </Text>
      <View style={styles.userInfoSection}>
        <Avatar name={userData.userInformation?.userInfo.name ?? ""} />
        <UserInfo name={userData.userInformation?.userInfo.name ?? ""} />
      </View>
      <SwitchComponent
        label="Notificaciones"
        value={false}
        onValueChange={handleToggleNotification}
      />
      <SwitchComponent
        label="Biometria"
        value={biometricLogin}
        onValueChange={handleToggleBiometricLogin}
      />
      <View style={{ flex: 1 }} />
      <Pressable onPress={handleLogout} style={styles.closeSession}>
        <Text style={styles.closeSessionText}>Cerrar Sesion</Text>
        <Icon name="LogOut" size={24} color="red" />
      </Pressable>
      <View style={{ marginTop: 20, paddingHorizontal: 20, marginBottom: 110 }}>
        <Copyright />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  userInfoSection: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  closeSession: {
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
  },
  closeSessionText: {
    alignSelf: "center",
    color: "red",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 10,
  },
});
