import { signInUser } from "@/src/redux/slices/authSlice";
import { AppDispatch } from "@/src/redux/store";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const resultAction = await dispatch(signInUser({ email, password }));
      if (signInUser.fulfilled.match(resultAction)) {
      } else {
        console.error("Error en el inicio de sesión:", resultAction.payload);
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {};

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Correo Electronico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSignIn} disabled={loading}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp} disabled={loading}>
        <Text>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  button: {
    marginTop: 10,
  },
});

export default LoginForm;
