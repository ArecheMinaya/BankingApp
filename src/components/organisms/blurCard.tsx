import { View, StyleSheet, ViewProps } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

type Props = ViewProps & {
  children: React.ReactNode;
};

const BlurCard = ({ ...props }: React.PropsWithChildren<Props>) => {
  return (
    <View style={[props.style]}>
      <BlurView
        style={StyleSheet.absoluteFillObject}
        intensity={600}
        tint="dark"
      >
        {props.children}
      </BlurView>
    </View>
  );
};

export default BlurCard;
