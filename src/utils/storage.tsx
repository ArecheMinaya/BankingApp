import * as SecureStore from "expo-secure-store";

export const storeCredentials = async (
  username: string,
  password: string,
  enabledBiometricLogin: boolean,
) => {
  await SecureStore.setItemAsync("username", username);
  await SecureStore.setItemAsync("password", password);
  await SecureStore.setItemAsync(
    "enabledBiometricLogin",
    enabledBiometricLogin.toString(),
  );
};

export const getCredentials = async () => {
  const username = await SecureStore.getItemAsync("username");
  const password = await SecureStore.getItemAsync("password");
  const enabledBiometricLogin = await SecureStore.getItemAsync(
    "enabledBiometricLogin",
  );
  return { username, password, enabledBiometricLogin };
};

export const getEnabledBiometricLogin = async () => {
  const enabledBiometricLogin = await SecureStore.getItemAsync(
    "enabledBiometricLogin",
  );
  return enabledBiometricLogin === "true";
};

export const enambelBiometricLogin = async () => {
  console.log("Enabling biometric login...");
  await SecureStore.setItemAsync("enabledBiometricLogin", "true");
};

export const removeCredentials = async () => {
  await SecureStore.deleteItemAsync("username");
  await SecureStore.deleteItemAsync("password");
  await SecureStore.deleteItemAsync("enabledBiometricLogin");
};
