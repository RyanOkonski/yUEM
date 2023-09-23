import React from 'react';
import { View, Image, Text, Button, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Dimensions} from 'react-native';

const Bemvindo = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={['#381010', '#361010']}
        >
            <View style={{flex: 1}}>
                <View>
                    <Image
                        source={require("../assets/logoUEM.png")}
                        style={{
                            height: 200,
                            width: 200,
                            position: "absolute",
                            top: (windowHeight/7),
                            right: (windowWidth/3.5),
                        }}
                    />
                    <View
                        style={{
                            paddingHorizontal: 42,
                            position: "absolute",
                            top: 400,
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{
                                position: "absolute",
                                top: -60,
                                right: (windowWidth/3),
                                fontSize: 50,
                                fontWeight: 'bold',
                                color: 'white',
                                textShadowColor: 'black',
                                textShadowOffset: {width: 6, height: 4},
                                textShadowRadius: 10
                            }}
                        >
                            yUem
                        </Text>
                        <Button
                            title="Cadastre-se"
                            onPress={() => navigation.navigate("Cadastro")}
                            style={{
                                marginTop: 80,
                                width: "100%",
                            }}
                        />
                        <View style={{
                                flexDirection: "row",
                                marginTop: 12,
                                justifyContent: "center"
                            }}>
                            <Text style={{
                                fontSize: 16,
                                color: 'white',
                                }}>Você ja tem um Cadastro?
                            </Text>
                            <Pressable
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: 'white',
                                    fontWeight: "bold",
                                    marginLeft: 4
                                }}>Entre aqui!</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Bemvindo;