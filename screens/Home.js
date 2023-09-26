import React from "react";
import { View, FlatList, Pressable, Text, Alert } from "react-native";
import { Dimensions } from "react-native";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import tweets from "../data/tweets";
import Tweet from "./Tweet";
import axios from "axios";

const Home = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("screen").width;

  const onProfileScreen = () => {
    navigation.navigate("Profile");
  };

  const onSubmit = () => {
    console.log("Usar para fazer GET nas requisições");
  };

  const onExitSubmit = () => {
    Alert.alert(
      "Confirmação",
      "Você realmente deseja sair?",
      [
        {
          text: "Não",
          onPress: () => console.log("Usuário desistiu de sair!"),
        },
        {
          text: "Sim",
          onPress: () => navigation.navigate("Bemvindo"),
          style: "cancel",
        },
      ],
      { cancelable: false } // Make the alert non-dismissable by tapping outside
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#381010", height: 85 }}>
        <Text
          style={{
            position: "absolute",
            fontSize: 30,
            fontWeight: "bold",
            color: "#1C7A2F",
            textShadowColor: "black",
            textShadowOffset: { width: 6, height: 4 },
            textShadowRadius: 10,
            right: windowWidth / 2.6,
            bottom: 10,
          }}
        >
          yUEM
        </Text>
      </View>
      <View style={{ backgroundColor: "white", height: windowHeight / 1.25 }}>
        <FlatList
          data={tweets}
          renderItem={({ item }) => <Tweet tweet={item} />}
        />
        <Pressable
          onPress={onSubmit}
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            width: 64,
            height: 64,
            backgroundColor: "#1C7A2F",
            borderRadius: 34,
            padding: 18,
          }}
        >
          <Entypo name="feather" size={30} color="black" />
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: "#381010",
          height: 85,
          flexDirection: "row",
          gap: 100,
        }}
      >
        <Pressable
          onPress={onProfileScreen}
          style={{ marginLeft: 34, marginTop: 15 }}
        >
          <Ionicons name="person" size={38} color="#1C7A2F" />
        </Pressable>
        <Pressable onPress={onSubmit} style={{ marginTop: 10 }}>
          <Entypo name="home" size={44} color="#1C7A2F" />
        </Pressable>
        <Pressable onPress={onExitSubmit} style={{ marginTop: 15 }}>
          <MaterialCommunityIcons name="exit-run" size={38} color="#1C7A2F" />
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
