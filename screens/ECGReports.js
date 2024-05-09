import React from "react";

const ECGReports = () => {
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

export default ECGReports;