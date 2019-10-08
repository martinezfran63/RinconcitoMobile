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
import styles from "../styles.js";

class MenuItem extends React.Component {
  render() {
    const br = `\n`;
    const navigation = this.props.navigation;
    const product = navigation.getParam("menuItem");
    return (
      <View style={styles.MenuItemMainContainer}>
        <View style={styles.HeaderContainer}>
          <View style={styles.HeaderContainer}>
            <Text
              style={{
                color: "black",
                fontFamily: "Helvetica",
                fontSize: 40,
                marginTop: 65,
                textAlign: "left"
              }}
            >
              {product.name}
            </Text>
          </View>

          <View style={styles.PriceContainer}>
            <Text
              style={{
                color: "black",
                fontFamily: "Helvetica",
                fontSize: 45,
                marginTop: 65,
                textAlign: "right"
              }}
            >
              {product.price}
            </Text>
          </View>
        </View>

        <View style={styles.ImageContainer}>
          <Image
            source={product.icon_url}
            style={{ width: 540, height: 450, marginTop: 65 }}
          />
        </View>
      </View>
    );
  }
}
export default MenuItem;
