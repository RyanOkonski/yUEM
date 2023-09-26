import React from "react";
import { View} from "react-native";
import { Dimensions } from "react-native";
import Twett from "./Twett";
import axios from "axios";

const Home = () => {
  const windowHeight = Dimensions.get("window").height;

  const user = {
    name: "Ryan",
    email: "gmail.com",
    post: {
      text: "Primeiro post",
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#381010", height: 45 }}></View>
      <View style={{ backgroundColor: "white", height: windowHeight / 1.11 }}>
        <Twett twett={user}/>
      </View>
      <View style={{ backgroundColor: "#381010", height: 45 }}></View>
    </View>
  );
};

export default Home;