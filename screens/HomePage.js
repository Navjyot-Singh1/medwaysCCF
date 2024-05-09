import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Health App!</Text>
      <Image
        source={{ uri: "https://placeimg.com/640/480/tech" }} // Placeholder image
        style={styles.image}
      />
      <Text style={styles.text}>
        This is your home page where you can access all your health information.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default HomePage;
