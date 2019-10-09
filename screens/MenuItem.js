import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Card, ListItem, Button, Icon, Divider } from "react-native-elements";
import styles from "../styles.js";

class MenuItem extends React.Component {
  render() {
    const navigation = this.props.navigation;
    const product = navigation.getParam("menuItem");
    return (
      <View style={styles.MenuItemMainContainer}>
        <View style={styles.HeaderContainer}>
          <View style={styles.TitleContainer}>
            
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
              title={product.price}
              titleStyle={{
                color: "#282828",
                fontSize: 40,
                fontWeight: "bold",
              }}
            />
           
            <Card
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
            >
              <Text
                style={{
                  color: "#C81315",
                  fontSize: 25,
                  fontWeight: "bold",
                  textAlign: "left"
                }}
              >
                Descripción
              </Text>

              <Text
                style={{
                  color: "#282828",
                  fontSize: 20,
                  textAlign: "left"
                }}
              >
                {product.description}
              </Text>
              
              <Divider style={{ backgroundColor: 'black', margin:10, }} />
              
              <Text
                style={{
                  color: "#C81315",
                  fontSize: 25,
                  fontWeight: "bold",
                  textAlign: "left"
                }}
              >
                Opciones
              </Text>

              <Text
                style={{
                  color: "#282828",
                  fontSize: 20,
                  textAlign: "left"
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
