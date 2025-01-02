import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Header from "../components/Header";

const NotesListScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Notes" />

      {/* Content */}
      <View style={styles.content}>
        <Text>Welcome to the Notes App!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container fills the full screen
    backgroundColor: "#1a1b1a",
  },
  content: {
    marginTop: 60, // Account for the height of the header
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotesListScreen;
