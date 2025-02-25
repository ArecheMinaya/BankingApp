import { View, Text } from "react-native";
import React, { useState } from "react";
import { colors, typography } from "@/src/styles";
import Icon from "./icon";
import * as Clipboard from "expo-clipboard";
import { Pressable } from "react-native-gesture-handler";

const ListItem = ({
  label,
  value,
  enableCopy,
}: {
  label: string;
  value: string;
  enableCopy?: boolean;
}) => {
  const [copiedText, setCopiedText] = useState("");
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(copiedText);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        width: "100%",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            color: colors.secondary,
            fontSize: typography.fontSize.small,
            fontWeight: "semibold",
            marginBottom: 4,
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: colors.grayDark,
            fontSize: typography.fontSize.small,
            fontWeight: "normal",
          }}
        >
          {value}
        </Text>
      </View>
      {enableCopy && (
        <Pressable
          onPress={async () => {
            setCopiedText(value);
            await copyToClipboard();
          }}
        >
          <Icon name="Copy" color={colors.accent} size={18} />
        </Pressable>
      )}
    </View>
  );
};

export default ListItem;
