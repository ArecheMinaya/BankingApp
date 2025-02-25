// src/components/atoms/Copyright.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const currentYear = new Date().getFullYear();

const Copyright = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © {currentYear} Brian Javier Areche Minaya. Todos los derechos
        reservados.
      </Text>
      <Text style={styles.subtext}>
        Esta aplicación y su diseño son propiedad exclusiva de Brian Javier
        Areche Minaya. Queda prohibida la reproducción, distribución o
        modificación total o parcial sin autorización previa y por escrito.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    color: "#284d73",
  },
  subtext: {
    fontSize: 10,
    textAlign: "center",
    color: "#6B7280",
    marginTop: 8,
  },
});

export default Copyright;
