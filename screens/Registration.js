import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons/MaterialCommunityIcons";

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState(null);
  const [mobileNoError, setMobileNoError] = useState(null);
  const [sexError, setSexError] = useState(null);
  const [ageError, setAgeError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleRegistration = () => {
    let isValid = true;

    setNameError(null);
    setMobileNoError(null);
    setSexError(null);
    setAgeError(null);
    setUsernameError(null);
    setPasswordError(null);

    // Validation
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!mobileNo || mobileNo.length !== 10) {
      setMobileNoError("Mobile number must be 10 digits");
      isValid = false;
    }
    if (!sex) {
      setSexError("Please select your sex");
      isValid = false;
    }
    if (!age || age <= 0 || !Number.isInteger(parseInt(age))) {
      setAgeError("Age must be a positive integer");
      isValid = false;
    }
    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    }
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    if (isValid) {
      console.log("Registration details:", {
        name,
        mobileNo,
        sex,
        age,
        username,
        password,
      });
      // Implement your registration logic here (e.g., send data to backend)
      navigation.navigate("Home"); // Navigate to Home screen after successful registration (replace with your logic)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="account"
          size={24}
          color="#ccc"
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          onBlur={() => {
            setNameError(!name && "Name is required");
          }}
        />
      </View>
      {nameError && <Text style={styles.error}>{nameError}</Text>}

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="phone"
          size={24}
          color="#ccc"
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Mobile Number"
          value={mobileNo}
          onChangeText={(text) => setMobileNo(text)}
          keyboardType="numeric"
          onBlur={() => {
            setMobileNoError(
              !mobileNo || mobileNo.length !== 10
                ? "Mobile number must be 10 digits"
                : null
            );
          }}
        />
      </View>
      {mobileNoError && <Text style={styles.error}>{mobileNoError}</Text>}

      {/* You can use RadioButtons or a Picker component for sex selection (replace with your implementation) */}
      <View style={styles.sexSelection}>
        <Text>Sex:</Text>
        <View style={styles.sexOption}>
          <MaterialCommunityIcons
            name="mars"
            size={24}
            color={sex === "Male" ? "#3498db" : "#ccc"}
            onPress={() => setSex("Male")}
          />
          <Text style={styles.sexText}>Male</Text>
        </View>
        <View style={styles.sexOption}>
          <MaterialCommunityIcons
            name="venus"
            size={24}
            color={sex === "Female" ? "#3498db" : "#ccc"}
            onPress={() => setSex("Female")}
          />
          <Text style={styles.sexText}>Female</Text>
        </View>
        {sexError && <Text style={styles.error}>{sexError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="calendar"
          size={24}
          color="#ccc"
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
          onBlur={() => {
            setAgeError(
              !age || age <= 0 || !Number.isInteger(parseInt(age))
                ? "Age must be a positive integer"
                : null
            );
          }}
        />
      </View>
      {ageError && <Text style={styles.error}>{ageError}</Text>}

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="account-outline"
          size={24}
          color="#ccc"
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          onBlur={() => {
            setUsernameError(!username && "Username is required");
          }}
        />
      </View>
      {usernameError && <Text style={styles.error}>{usernameError}</Text>}

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color="#ccc"
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          onBlur={() => {
            setPasswordError(
              !password || password.length < 6
                ? "Password must be at least 6 characters"
                : null
            );
          }}
        />
      </View>
      {passwordError && <Text style={styles.error}>{passwordError}</Text>}

      <Button
        title="Register"
        style={styles.button}
        onPress={handleRegistration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  textInput: {
    flex: 1,
    padding: 8,
  },
  icon: {
    marginRight: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
  sexSelection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sexOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  sexText: {
    marginLeft: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#3498db", // Blue button
    color: "#fff", // White text
    borderRadius: 5,
  },
});

export default Registration;
