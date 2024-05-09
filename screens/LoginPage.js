import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Logo from "../assets/Logo.png";

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // Implement your login logic here (e.g., call your Back4App API)
    console.log("Login clicked! Username:", username, "Password:", password);
    // If successful, navigate to Home screen
    // navigation.navigate("Home");
  };

  const handleRegister = () => {
    // Implement your register logic here (e.g., call your Back4App API)
    console.log("Register clicked! Username:", username, "Password:", password);
    navigation.navigate("Registration");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Medways CCF</Text>
        <Image
          source={Logo}
          style={{ width: 60, height: 60, marginBottom: 20 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" style={styles.button} onPress={handleLogin} />
          <Button
            title="Register"
            style={styles.button}
            onPress={handleRegister}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    marginTop: 100,
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Light background
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc", // Light border
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    // width: "80%",
    padding: 15,
    backgroundColor: "#3498db", // Blue button
    color: "#fff", // White text
    borderRadius: 5,
  },
});

export default LoginPage;
