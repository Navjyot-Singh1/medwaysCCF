import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

// Import your screen components here
import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import BloodReports from "./screens/BloodReports";
import ECGReports from "./screens/ECGReports";
import EchoReports from "./screens/EchoReports";
import CAGReports from "./screens/CAGReports";
import ProceduresDone from "./screens/ProceduresDone";
import Vaccination from "./screens/Vaccination";
import Registration from "./screens/Registration";

const App = () => {
  //Initializing the SDK.

  const Stack = createStackNavigator();
  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear user data)
    console.log("User logged out");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }} // Hide header for Login screen
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({ navigation }) => ({
            title: "My Health App",
            headerRight: () => <Button title="Logout" onPress={handleLogout} />,
          })}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: "Registration" }}
        />
        <Stack.Screen name="BloodReports" component={BloodReports} />
        <Stack.Screen name="ECGReports" component={ECGReports} />
        <Stack.Screen name="EchoReports" component={EchoReports} />
        <Stack.Screen name="CAGReports" component={CAGReports} />
        <Stack.Screen name="ProceduresDone" component={ProceduresDone} />
        <Stack.Screen name="Vaccination" component={Vaccination} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
