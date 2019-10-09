import React, { Component } from "react";
import {
  View,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import styles from "../styles.js";

class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container_one}>
        <Image
          style={styles.logo}
          source={require("../img/rinconcito_logo.png")}
        />
        <Button
          titleStyle={{
            color: "#C81315",
            fontFamily: "Helvetica",
            fontSize: 30
          }}
          title="Iniciar"
          type="outline"
          raised={true}
          onPress={() => navigate("MainMenu")}
        />
      </View>
    );
  }
}
export default Home;
