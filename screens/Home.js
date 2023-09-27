import React, { useState, useEffect } from "react";
import { View, FlatList, Pressable, Text, Alert, ActivityIndicator } from "react-native";
import { Dimensions } from "react-native";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Tweet from "./Tweet";

const Home = ({ route, navigation }) => {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("screen").width;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onProfileScreen = () => {
    navigation.navigate("Profile");
  };

  const onSubmit = () => {
    console.log("Usar para fazer GET nas requisições");
  };

  const onCriarPost = () => {
    console.log(route.params);
    navigation.navigate("CriarPost", route.params);
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

  useEffect(() => {
    fetch('http://25.7.138.178:8080/User/Posts')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" style={{top: (windowHeight/2)}} color="#00ff00" />;
  }
 
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#381010", height: 85 }}>
        <Text
          style={{
            position: "absolute",
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
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
          data={data}
          renderItem={({item}) => <Tweet tweet={item}/>}
        />
        <Pressable
          onPress={onCriarPost}
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
          <Ionicons name="person" size={38} color="white" />
        </Pressable>
        <Pressable onPress={onSubmit} style={{ marginTop: 10 }}>
          <Entypo name="home" size={44} color="white" />
        </Pressable>
        <Pressable onPress={onExitSubmit} style={{ marginTop: 15 }}>
          <MaterialCommunityIcons name="exit-run" size={38} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
