import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthProvider } from "./contexts/AuthContext";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

import LogInScreen from "./screens/LogInScreen";

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
