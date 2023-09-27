import React, { useState } from "react";
import { View, Text, TextInput, Pressable , StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import axios from 'axios';

const CriarPost = ({ route, navigation }) => {
  const user_Id = route.params;
  const windowWidth = Dimensions.get("screen").width;
  const [text, setText] = useState("");

  const postDataToApi = async () =>{
    const postData = {
      massage: String(text),
      likePost: 0
    };
    console.log(postData);
    try {
      const url = "http://25.7.138.178:8080/User/" + user_Id + "/CreatePost";
      await axios.post(
        url,
        postData,
      );
      console.log("Post criado com sucesso");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Deu ruim:", error);
    }
  };

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
            right: windowWidth / 3,
            bottom: 10,
          }}
        >
          Criar Post
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => setText(newText)}
          value={text}
          placeholder="Digite seu post aqui..."
          multiline={true}
        />
        <Pressable
          onPress={handleSubmit(postDataToApi)}
          multiline={true}
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            width: 64,
            height: 64,
            backgroundColor: "#1C7A2F",
            borderRadius: 34,
            padding: 16,
          }}
        >
          <Entypo name="check" size={30} color="black" />
        </Pressable>
      </View>
      <View style={{ backgroundColor: "#381010", height: 65 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    width: "100%",
    height: 20,
    marginBottom: 20,
    paddingHorizontal: 6,
  },
  button: {
    bottom: 0,
    width: 64,
  },
});

export default CriarPost;
