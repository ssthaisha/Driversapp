import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

import { colors, parameters } from "../../global/styles";

import MainHeader from "../../component/mainheader";

export default function MainScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      <View>
        <MainHeader />
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={styles.activity}>Activity Status</Text>
        <View style={styles.container}>
          <Switch
            trackColor={{ false: "#767577", true: colors.buttons }}
            thumbColor={isEnabled ? "#00FF00" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 80,
  },
  activity: {
    marginLeft: 110,
    fontSize: 25,
    color: "black",
    marginTop: 7,
    marginRight: -30,
  },
});
