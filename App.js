import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Bemvindo, Login, Cadastro, Home, Profile, CriarPost } from './screens';

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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
              headerShown:false
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
              headerShown:false
          }}
        />
        <Stack.Screen
          name="CriarPost"
          component={CriarPost}
          options={{
              headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
