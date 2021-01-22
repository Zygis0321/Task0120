import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import KittensLoader from "./components/KittensLoader";
import KittenCardScreen from "./screens/KittenCardScreen";
import KittenListScreen from "./screens/KittenListScreen";
import store from "./store/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <KittensLoader>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Kitten List" component={KittenListScreen} />
            <Stack.Screen name="Kitten Card" component={KittenCardScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </KittensLoader>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
