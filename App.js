<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Bemvindo, Login, Cadastro } from './screens';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Bemvindo'
      >
        <Stack.Screen
          name="Bemvindo"
          component={Bemvindo}
          options={{
              headerShown:false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
              headerShown:false
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
              headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
=======
import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View>
        <View>
            <Text>Oiii</Text>
        </View>
    </View>
  );
}

export default App;
>>>>>>> a5d110699fe4d1d923a0f14f18302bc7630c9b0c
