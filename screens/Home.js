import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from "react";
import {
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Linking
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
