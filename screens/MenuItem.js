import React, { Component } from "react";
import { Text, View, Image} from "react-native";
import styles from "../styles.js";

class MenuItem extends React.Component {
  render() {
    const br = `\n`;
    const navigation = this.props.navigation;
    const product = navigation.getParam("menuItem");
    return (
      <View style={styles.MenuItemMainContainer}>
        <View style={styles.HeaderContainer}>
          <View style={styles.TitleContainer}>
            <Text
              style={{
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 55,
                marginTop: 30,
                textAlign: "left"
              }}
            >
              {product.name}
            </Text>
          </View>

          <View style={styles.PriceContainer}>
            <Text
              style={{
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 45,
                marginTop: 30,
                textAlign: "right"
              }}
            >
              {product.price}
            </Text>
          </View>
        </View>
        <View style={styles.BodyContainer}>
          <View style={styles.ImageContainer}>
            <Image
              source={product.icon_url}
              style={{
                width: 480,
                height: 400,
                position: "absolute",
                padding: 20,
              }}
            />
          </View>

          <View style={styles.RightContainer}>
            <Text
              style={{
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 50
              }}
            >
              Description:{br}
              {product.description}
            </Text>

            <Text
              style={{
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 50
              }}
            >
              Opciones:{br}
              {product.option}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default MenuItem;
