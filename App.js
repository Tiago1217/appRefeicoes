import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RotaAcesso from "./components/RotaAcesso";

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RotaAcesso />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
