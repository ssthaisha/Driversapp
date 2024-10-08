import React from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";

export default function Header(title, type) {
  return (
    <View style={styles.header}>
      <View style={{ marginleft: 20 }}>
        <Icon
          type="material.community"
          name={arrow - left}
          color={colors.headerText}
          size={28}
        />
      </View>

      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },

  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    marginleft: 30,
  },
});
