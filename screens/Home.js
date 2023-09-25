import React, { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from 'axios';

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={["#381010", "#361010"]}
    >
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: 200,
            fontSize: 50,
            fontWeight: "bold",
            color: "white",
            textShadowColor: "black",
            textShadowOffset: { width: 6, height: 4 },
            textShadowRadius: 10,
          }}
        >
          Home
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Home;