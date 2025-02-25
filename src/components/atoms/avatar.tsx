// src/components/atoms/Avatar.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export interface AvatarProps {
  uri?: string;
  name: string;
  size?: number;
  rounded?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  uri,
  name,
  size = 60,
  rounded = true,
}) => {
  // Función para obtener las iniciales del nombre
  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase();
    return initials.substring(0, 2);
  };

  // Función para generar un color de fondo basado en el nombre
  const generateBackgroundColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 70%, 70%)`;
    return color;
  };

  // Estilos dinámicos para el contenedor del avatar
  const avatarStyle = {
    backgroundColor: generateBackgroundColor(name),
    width: size,
    height: size,
    borderRadius: rounded ? size / 2 : 0,
  };

  // Estilos dinámicos para el texto de las iniciales
  const textStyle = {
    fontSize: size * 0.4,
  };

  return (
    <View style={[styles.avatar, avatarStyle]}>
      {uri ? (
        <Image
          source={{ uri }}
          style={[styles.image, { borderRadius: rounded ? size / 2 : 0 }]}
        />
      ) : (
        <Text style={[styles.initials, textStyle]}>{getInitials(name)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  initials: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Avatar;
