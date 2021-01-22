import { useNetInfo } from "@react-native-community/netinfo";
import React, { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import NumberInput from "../components/NumberInput";

const listSizes = [30, 50, 100];

export default function KittenListScreen({ navigation }) {
  const [kittenCount, setKittenCount] = useState(listSizes[0]);
  const [customCount, setCustomCount] = useState(0);
  const [selectedButton, setSelectedButton] = useState(0);
  const kittenArray = useSelector((state) => state.kittens.kittens);

  const netInfo = useNetInfo();

  return (
    <View>
      <View style={styles.buttonContainer}>
        {listSizes.map((size, index) => (
          <View key={`button${index}`} style={styles.buttonView}>
            <Button
              onPress={() => {
                setKittenCount(size);
                setSelectedButton(index);
              }}
              title={size.toString()}
              disabled={selectedButton === index}
            />
          </View>
        ))}
      </View>
      <View style={styles.customContainer}>
        <NumberInput
          maxLength={3}
          onChange={(value) => {
            if (selectedButton === -1) {
              setKittenCount(value);
            }
            setCustomCount(value);
          }}
          style={{ marginRight: 10 }}
        />
        <Button
          onPress={() => {
            setKittenCount(customCount);
            setSelectedButton(-1);
          }}
          title="custom"
          disabled={selectedButton === -1}
        />
      </View>
      {netInfo.isInternetReachable === false && (
        <Text>Could not connect to internet</Text>
      )}
      <FlatList
        data={kittenArray.slice(0, kittenCount)}
        keyExtractor={(item, index) => `kittenId${index}`}
        renderItem={(item, index) => {
          const kitten = item.item;
          return (
            <ListItem
              key={index}
              style={styles.kittenItem}
              onPress={() => navigation.navigate("Kitten Card", kitten)}
            >
              <ListItem.Content style={styles.kittenContent}>
                <Image
                  source={{ uri: kitten.url }}
                  style={styles.kittenImage}
                />
                <ListItem.Title>{kitten.name}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  customContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 10,
  },
  buttonView: {
    width: "25%",
  },
  kittenImage: {
    width: "90%",
    height: 180,
    marginBottom: 12,
    borderRadius: 20,
  },
  kittenContent: {
    alignItems: "center",
  },
  kittenItem: {
    margin: 20,
  },
});
