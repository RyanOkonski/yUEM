import React from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const checkLogin = async (data) => {
    try {
      const url =
        "https://gnat-huge-gibbon.ngrok-free.app/User/Login/" +
        data.email +
        "/" +
        data.senha;
      const response = await axios.get(url);
      if (response.data != "") {
        console.log(response.data);
        navigation.navigate("Home", {
          userId: response.data,
        });
      } else {
        alert("Usuário não cadastrado!");
      }
    } catch (error) {
      console.error("Erro na hora do GET:", error);
    }
  };

  const onSubmit = (data) => {
    checkLogin(data);
  };

  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={["#381010", "#361010"]}
    >
      <TouchableWithoutFeedback onPress={handlePressOutside}>
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
            yUEM
          </Text>

          <Text
            style={{
              marginTop: 60,
              marginBottom: 4,
              fontSize: 16,
              color: "grey",
            }}
          >
            E-mail:
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Insira seu email"
                inputMode="email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 22,
                  borderRadius: 8,
                  elevation: 3,
                  backgroundColor: "white",
                  width: 280,
                  height: 40,
                }}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={{ marginTop: 4, color: "red" }}>
              Esse campo é obrigatório!
            </Text>
          )}

          <Text
            style={{
              marginTop: 20,
              marginBottom: 4,
              fontSize: 16,
              color: "grey",
            }}
          >
            Senha:
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Insira sua senha"
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={true}
                value={value}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 22,
                  borderRadius: 8,
                  elevation: 3,
                  backgroundColor: "white",
                  width: 280,
                  height: 40,
                }}
              />
            )}
            name="senha"
          />
          {errors.senha && (
            <Text style={{ marginTop: 4, color: "red" }}>
              Esse campo é obrigatório!
            </Text>
          )}

          <Pressable
            onPress={handleSubmit(onSubmit)}
            style={{
              alignItems: "center",
              marginTop: 50,
              paddingVertical: 18,
              paddingHorizontal: 28,
              borderRadius: 8,
              elevation: 3,
              backgroundColor: "black",
              width: 250,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                lineHeight: 22,
                fontWeight: "bold",
                letterSpacing: 0.75,
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
              Entrar
            </Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default Login;
