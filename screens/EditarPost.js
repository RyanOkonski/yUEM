import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import axios from "axios";

const EditarPost = ({ route, navigation }) => {
  const { userId } = route.params;
  const { postId } = route.params;
  const { message } = route.params;
  const windowWidth = Dimensions.get("screen").width;
  const [text, setText] = useState(message);

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const postDataToApi = async () => {
    const postData = {
      message: String(text),
    };
    try {
      const url =
        "https://gnat-huge-gibbon.ngrok-free.app/User/" +
        userId +
        "/UpdatePost/" +
        postId;
      await axios.put(url, postData);
      console.log("Post editado com sucesso");
      navigation.navigate("Home", userId);
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
          Editar Post
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => setText(newText)}
            value={text}
            multiline={true}
          />
          <Pressable
            onPress={postDataToApi}
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
      </TouchableWithoutFeedback>
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
});

export default EditarPost;
