import React from "react";
import { View, Image, Text, Button, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

const Bemvindo = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={["#381010", "#361010"]}
    >
      <View>
        <Image
          source={require("../assets/logoUEM.png")}
          style={{
            height: 200,
            width: 200,
            position: "absolute",
            top: windowHeight / 7,
            right: windowWidth / 3.5,
          }}
        />
        <View
          style={{
            top: 400,
            gap: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold",
              color: "white",
              textShadowColor: "black",
              textShadowOffset: { width: 6, height: 4 },
              textShadowRadius: 10,
            }}
          >
            yUem
          </Text>
          <Pressable
            onPress={() => navigation.navigate("Cadastro")}
            style={{
                alignItems: 'center',
                paddingVertical: 20,
                paddingHorizontal: 38,
                borderRadius: 8,
                elevation: 3,
                backgroundColor: 'black',
                width: 220,
            }}
          >
            <Text style={{
                fontSize: 22,
                lineHeight: 21,
                fontWeight: 'bold',
                letterSpacing: 0.75,
                color: 'white',
            }}>Cadastre-se!</Text>
          </Pressable>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              letterSpacing: 0.75,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
              }}
            >
              Você ja tem um Cadastro?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: "red",
                  fontWeight: "bold",
                  marginLeft: 4,
                  textDecorationLine: "underline",
                }}
              >
                Entre aqui!
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Bemvindo;
