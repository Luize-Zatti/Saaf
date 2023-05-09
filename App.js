import { View, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from "./src/pages/Cadastro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
       
       
      </Stack.Navigator>

    </NavigationContainer>
  );
}
