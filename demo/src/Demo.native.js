import React, { useState } from "react";
import { Dimensions, TextInput, View, Button, Alert } from "react-native";
import QRCode from "./lib";
import axios from "axios";

const { height, width } = Dimensions.get("window");

const Demo = () => {
  const [value, setValue] = useState("");

  const handleDownload = async () => {
    try {
      const timestamp = new Date().toISOString();
      const qrId = Math.random().toString(36).substring(2, 15); // Generate a random ID

      await axios.post("http://localhost:3001/save-qr-data", {
        id: qrId,
        rawTextValue: value,
        createdAt: timestamp,
        updatedAt: timestamp,
      });

      Alert.alert("Success", "QR Code data saved to the server.");
    } catch (error) {
      console.error("Error saving QR code data:", error);
      Alert.alert("Error", "Failed to save QR Code data to the server.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <QRCode size={Math.min(height, width) * 0.8} value={value} />
      <TextInput
        style={{
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          margin: 10,
          padding: 5,
          width: "80%", 
          flexShrink: 0, 
        }}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Enter text to generate QR code"
      />
      <Button title="Download QR Code" onPress={handleDownload} />
    </View>
  );
};

export default Demo;
