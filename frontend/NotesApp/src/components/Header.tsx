import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

type HeaderProps = {
  title: string; // Title displayed in the header
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {},
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center", // Vertically align content
    alignItems: "flex-start", // Horizontally align content
    paddingStart: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Header;
