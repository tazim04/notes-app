import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotesListScreen from "../screens/NotesListScreen";
import NotesContentScreen from "../screens/NoteContentScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NotesList" component={NotesListScreen} />
      <Stack.Screen name="NotesContent" component={NotesContentScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
