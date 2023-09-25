import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import { SelectList } from "react-native-dropdown-select-list";
import axios from 'axios';

const Cadastro = ({ navigation }) => {
  const genders = ["Masculino", "Feminino", "Outro"];

  const [selected, setSelected] = React.useState("");

  const selectList = [
    { key: "1", value: "Administração" },
    { key: "2", value: "Agronomia" },
    { key: "3", value: "Arquitetura" },
    { key: "4", value: "Artes Cênicas" },
    { key: "5", value: "Artes Visuais" },
    { key: "6", value: "Biomedicina" },
    { key: "7", value: "Bioquímica" },
    { key: "8", value: "Biotecnologia" },
    { key: "9", value: "Ciência da Computação" },
    { key: "10", value: "Ciências Biológicas" },
    { key: "11", value: "Ciências Contábeis" },
    { key: "12", value: "Ciências Econômicas" },
    { key: "13", value: "Ciências Socias" },
    { key: "14", value: "Comunicação e Multimeios" },
    { key: "15", value: "Design" },
    { key: "16", value: "Direito" },
    { key: "17", value: "Educação Física" },
    { key: "18", value: "Enfermagem" },
    { key: "19", value: "Engenharia Agrícola" },
    { key: "20", value: "Engenharia Ambiental" },
    { key: "21", value: "Engenharia Civil" },
    { key: "22", value: "Engenharia de Alimentos" },
    { key: "23", value: "Engenharia de Produção" },
    { key: "24", value: "Engenharia Elétrica" },
    { key: "25", value: "Engenharia Mecânica" },
    { key: "26", value: "Engenharia Química" },
    { key: "27", value: "Estatística" },
    { key: "28", value: "Farmácia" },
    { key: "29", value: "Filosofia" },
    { key: "30", value: "Física" },
    { key: "31", value: "Geografia" },
    { key: "32", value: "História" },
    { key: "33", value: "Informática" },
    { key: "34", value: "Letras" },
    { key: "35", value: "Matemática" },
    { key: "36", value: "Medicina" },
    { key: "37", value: "Moda" },
    { key: "38", value: "Música" },
    { key: "39", value: "Odontologia" },
    { key: "40", value: "Pedagogia" },
    { key: "41", value: "Psicologia" },
    { key: "42", value: "Química" },
    { key: "43", value: "Zootecnia" },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      course: "",
      age: "",
      anonymous: false,
      gender: "",
    },
  });

  const validateAge = (value) => {
    const age = parseInt(value, 10);
    if (isNaN(age)) {
      return "Insira números!";
    }
    if (age < 17) {
      return "Você precisa ter mais que 16 anos!";
    }
    return true;
  };

  const handleTextInputChange = (inputText) => {
    let typingTimeout = 2000;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    typingTimeout = setTimeout(() => {
      Keyboard.dismiss();
    }, 2000);
  };

  const [responseMessage, setResponseMessage] = useState('');
  const postDataToApi = async (data) => {
    const postData = {
      name: data.name,
      email: data.email,
      password: data.password,
      course: data.course,
      age: parseInt(data.age),
      anonymous: data.anonymous,
      gender: data.gender,
    }

    try {
      const response = await axios.post(
        'http://25.7.138.178:8080/User/CreateUser',
        postData
      );
      setResponseMessage(response.data.message);
      navigation.navigate("Home");
    } catch (error) {
      console.error('Deu ruim:', error);
    }
    console.log("Deu bom");
  };

  const onSubmit = (data) => {
    postDataToApi(data);
  };

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
            marginTop: 20,
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
        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 4, fontSize: 16, color: "grey" }}>
            Nome:
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Insira seu nome"
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
            name="name"
          />
          {errors.nome && (
            <Text style={{ marginTop: 4, color: "red" }}>
              Esse campo é obrigatório!
            </Text>
          )}

          <Text
            style={{
              marginTop: 12,
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
              marginTop: 12,
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
            name="password"
          />
          {errors.senha && (
            <Text style={{ marginTop: 4, color: "red" }}>
              Esse campo é obrigatório!
            </Text>
          )}

          <Text
            style={{
              marginTop: 12,
              marginBottom: 4,
              fontSize: 16,
              color: "grey",
            }}
          >
            Idade:
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 2,
              validate: validateAge,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Insira sua idade"
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={(text) => {
                  onChange(text);
                  handleTextInputChange(text);
                }}
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
            name="age"
          />
          {errors.idade && (
            <Text style={{ marginTop: 4, color: "red" }}>
              {errors.idade.message}
            </Text>
          )}

          <Text
            style={{
              marginTop: 12,
              marginBottom: 4,
              fontSize: 16,
              color: "grey",
            }}
          >
            Escolha seu curso:
          </Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <SelectList
                onBlur={onBlur}
                onChangeText={(itemValue) => {
                  onChange(itemValue);
                }}
                setSelected={setSelected}
                data={selectList}
                value={value}
                search={true}
                placeholder="Selecione uma opção"
                boxStyles={{
                  paddingVertical: 8,
                  paddingHorizontal: 22,
                  borderRadius: 8,
                  elevation: 3,
                  backgroundColor: "white",
                  width: 280,
                  height: 40,
                }}
                inputStyles={{
                  fontSize: 14,
                  color: "black",
                }}
                dropdownStyles={{
                  backgroundColor: "white",
                }}
              />
            )}
            name="course"
          />
          {errors.curso && (
            <Text style={{ marginTop: 4, color: "red" }}>
              Esse campo é obrigatório!
            </Text>
          )}

          <Text
            style={{
              marginTop: 12,
              marginBottom: 4,
              fontSize: 16,
              color: "grey",
            }}
          >
            Gênero:
          </Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <View style={{ marginTop: 8, flexDirection: "row", gap: 12 }}>
                {genders.map((genderOption) => (
                  <View key={genderOption} style={{ flexDirection: "row" }}>
                    <Text style={{ marginRight: 10, color: "white" }}>
                      {genderOption}
                    </Text>
                    <Pressable
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        backgroundColor:
                          value === genderOption ? "red" : "white",
                        borderColor: "black",
                        borderWidth: 1,
                      }}
                      onPress={() => onChange(genderOption)}
                    />
                  </View>
                ))}
              </View>
            )}
            name="gender"
          />
          {errors.genero && (
            <Text style={{ marginTop: 4, color: "red" }}>
              Esse campo é obrigatório!
            </Text>
          )}

          <Text
            style={{
              marginTop: 12,
              marginBottom: 4,
              fontSize: 16,
              color: "grey",
            }}
          >
            Quer ser Anônimo?
          </Text>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <View style={{ marginTop: 8, flexDirection: "row" }}>
                <Text style={{ marginRight: 8, color: "white" }}>Sim</Text>
                <Pressable
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: value ? "red" : "white",
                    borderColor: "balck",
                    borderWidth: 1,
                  }}
                  onPress={() => onChange(true)}
                />
                <Text style={{ marginHorizontal: 8, color: "white" }}>
                  Não
                </Text>
                <Pressable
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: !value ? "red" : "white",
                    borderColor: "black",
                    borderWidth: 1,
                  }}
                  onPress={() => onChange(false)}
                />
              </View>
            )}
            name="anonymous"
          />

          <Pressable
            onPress={handleSubmit(onSubmit)}
            style={{
              alignItems: "center",
              marginLeft: 20,
              marginTop: 30,
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
              Cadastre-se
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Cadastro;
