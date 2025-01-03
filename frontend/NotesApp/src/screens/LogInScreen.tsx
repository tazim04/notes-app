import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Alert,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { loginUser } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";

const LogInScreen = ({ navigation }: any) => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const token = await loginUser(username, password); // call login api
      login(); // update authentication state to swtich to MainNavigator
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Icon name="note" size={80} color="#fd6702" style={styles.logo} />
          <Text style={styles.title}>Log In</Text>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#aaa"
            style={styles.input}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            style={styles.input}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.logInButton}>
            <Button title="Login" color="white" onPress={handleLogin} />
          </View>
          <View style={styles.signUp}>
            <Button
              title="Sign Up"
              color="#fd6702"
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#1a1b1a",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    color: "white",
  },
  logInButton: {
    marginHorizontal: "auto",
    backgroundColor: "#fd6702",
    borderRadius: 100,
    paddingVertical: 2,
    width: "50%",
    marginVertical: 10,
  },
  logo: {
    marginHorizontal: "auto",
    marginBottom: 20,
  },
  signUp: {
    width: "auto",
  },
});

export default LogInScreen;
