import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
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
            <Card
              title={product.name}
              containerStyle={{
                backgroundColor: "white"
              }}
              titleStyle={{
                color: "#C81315",
                fontSize: 50,
                textAlign: "center"
              }}
              dividerStyle={{
                backgroundColor: "white"
              }}
            ></Card>
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
                padding: 20
              }}
            />
          </View>

          <View style={styles.RightContainer}>
            <ListItem
              style={styles.price}
              containerStyle={{
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                
                elevation: 9,
              }}
              titleStyle={{
                color: "#C81315",
                fontSize: 30,
                fontFamily: "Helvetica",
              }}
              title="Precio"
              rightTitle={product.price}
              rightTitleStyle={{
                color: "#282828",
                fontSize: 25,
                fontWeight: "bold",
              }}
            />
            <Card
              title="Descripción"
              containerStyle={{
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                
                elevation: 9,
              }}
              titleStyle={{
                color: "#C81315",
                fontSize: 25
              }}
            >
              <Text
                style={{
                  color: "#282828",
                  fontSize: 20,
                  textAlign: "center"
                }}
              >
                {product.description}
              </Text>
            </Card>
            <Card
              title="Opciones"
              containerStyle={{
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                
                elevation: 9,
              }}
              titleStyle={{
                color: "#C81315",
                fontSize: 25
              }}
            >
              <Text
                style={{
                  color: "#282828",
                  fontSize: 20,
                  textAlign: "center"
                }}
              >
                {product.option}
              </Text>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}
export default MenuItem;
