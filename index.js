import App from "./App";

import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import registerRootComponent from "expo/build/launch/registerRootComponent";

export default function Main() {
  Parse.setAsyncStorage(AsyncStorage);

  Parse.initialize(
    "isOhb7icCTWYGebp9Lf5grgUZi8em1t37DPEYG07",
    "3SG7BRCtQlsCTpY7BkCRimjksETofzpBZEzU2zdj"
  );
  Parse.serverURL = "https://parseapi.back4app.com/";

  return <App />;
}

registerRootComponent(Main);
