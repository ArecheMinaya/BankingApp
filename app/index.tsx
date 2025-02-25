import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Easing,
} from "react-native";
import { useDispatch } from "react-redux";
import AccentButton from "@/src/components/atoms/accentButton";
import GrayTextInput from "@/src/components/atoms/grayTextInput";
import { signInUser } from "@/src/redux/slices/authSlice";
import { AppDispatch } from "@/src/redux/store";
import * as LocalAuthentication from "expo-local-authentication";
import { getCredentials, getEnabledBiometricLogin } from "@/src/utils/storage";
import Icon from "@/src/components/atoms/icon";
import { colors } from "@/src/styles";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [enabledBiometricLogin, setEnabledBiometricLogin] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const animatedHeight = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    checkBiometricLogin();

    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isKeyboardVisible ? 300 : 400,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [animatedHeight, isKeyboardVisible]);

  const checkBiometricLogin = async () => {
    const enabledBiometricLogin = await getEnabledBiometricLogin();
    setEnabledBiometricLogin(enabledBiometricLogin);
  };

  const handleAuthentication = async () => {
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
    });
    if (result.success) {
      alert("Autenticación exitosa");
      const { username, password } = await getCredentials();
      if (username && password) {
        setEmail(username);
        setPassword(password);
        handleSignIn();
      }
    } else {
      alert("Autenticación fallida");
    }
  };

  const handleSignIn = async () => {
    await dispatch(signInUser({ email, password }));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image
            source={require("../assets/images/login-bg.png")}
            style={styles.backgroundImage}
          />
          <View style={styles.header}>
            <Text style={styles.headerText}>Iniciar Sesión</Text>
          </View>

          <Animated.View
            style={[styles.formContainer, { height: animatedHeight }]}
          >
            <GrayTextInput
              placeholder="Correo Electrónico"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <GrayTextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {enabledBiometricLogin && (
              <Pressable
                onPress={handleAuthentication}
                style={styles.biometricButton}
              >
                <Text style={styles.biometricButtonText}>
                  Ingresar con Biometría
                </Text>
                <Icon name="Fingerprint" size={24} color={colors.secondary} />
              </Pressable>
            )}
            <AccentButton title="Entrar" onPress={handleSignIn} />
            <Text
              style={{
                textAlign: "center",
                marginVertical: 20,
                fontSize: 18,
                color: colors.secondaryDark,
              }}
            >
              Registrar
            </Text>
          </Animated.View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  formContainer: {
    width: "100%",
    padding: 20,
  },
  biometricButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    gap: 10,
  },
  biometricButtonText: {
    color: colors.secondary,
  },
});

export default Auth;
