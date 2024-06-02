import React from "react";
import { Dimensions, TextInput, View } from "react-native";
import QRCode from "./lib";

const { height, width } = Dimensions.get("window");

const Demo = ({ value, setValue }) => {
  return (
    <View>
      <QRCode size={Math.min(height, width)} value={value} />
      <TextInput
        style={{
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          margin: 10,
          padding: 5,
        }}
        onChangeText={(text) => {
          setValue(text);
        }}
        value={value}
      />
    </View>
  );
};

export default Demo;
