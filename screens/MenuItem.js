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
      <Image 
        source={product.image_url}
        style={{
          width: 1280,
          height: 800,
          position: "absolute",
        }}
       />
        <View style={styles.HeaderContainer}>

          <Text 
          style={{
            color: "#282828",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "right",
            position: 'absolute', right: 85,
            marginTop:100,
            borderColor: "black",
            borderWidth: 0,
          }}
          >{product.price}</Text>

        </View>
        <View style={styles.BodyContainer}>
          <View style={styles.ImageContainer}>
          </View>

          <View style={styles.RightContainer}>

            <Card
              containerStyle={{
                backgroundColor: "#f2f2f2",
                shadowColor: "#000",
                position: 'absolute', right: 0,
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
                Descripción:
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
              
              <Divider style={{ backgroundColor: '#f2f2f2', margin:20, }} />
              
              <Text
                style={{
                  color: "#C81315",
                  fontSize: 25,
                  fontWeight: "bold",
                  textAlign: "left"
                }}
              >
                Opciones:
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
