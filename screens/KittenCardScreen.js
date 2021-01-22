import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function KittenCardScreen({ navigation, route }) {
  const kitten = route.params;

  return (
    <View>
      <Image source={{ uri: kitten.url }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{kitten.name}</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textContainer: {
    padding: 10,
  },
});
