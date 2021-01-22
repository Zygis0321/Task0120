import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function NumberInput({ maxLength, onChange, style }) {
  const [value, setValue] = useState("0");

  const textChange = () => {
    let val = parseInt(value);
    if (!val) val = 0;
    setValue(val.toString());
    onChange(val);
  };

  return (
    <TextInput
      keyboardType="numeric"
      onEndEditing={textChange}
      onChangeText={(text) => setValue(text)}
      value={value}
      maxLength={maxLength}
      style={[styles.textInput, style]}
    />
  );
}
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 50,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },
});
