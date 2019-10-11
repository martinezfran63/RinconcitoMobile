import React, { Component } from "react";
import {
  Image,
  View,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import styles from "../styles.js";
import listaDeFrutasPreparadas from "../data/listaDeFrutasPreparadas.js";
import listaDeElotes from "../data/listaDeElotes.js";
import listaDeNieves from "../data/listaDeNieves.js";
import listaDeBebidas from "../data/listaDeBebidas.js";
import listaDePapas from "../data/listaDePapas.js";

class MainMenu extends React.Component {
  render() {
    
    return (
      <View style={styles.mainContainer}>
        
        <View style={styles.ContainerOne}>
          <Card
            containerStyle={{
              marginTop: 70,
              backgroundColor: "white",
              width: 320
            }}
          >
            <Image
              source={require("../img/Frutas_Preparadas_MainMenu_300x250.png")}
              style={{ width: 300, height: 250 }}
            />
            <Button
              titleStyle={{
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 25
              }}
              buttonStyle={styles.buttonStyle1}
              title="Frutas Preparadas"
              onPress={() =>
                this.props.navigation.navigate("SubMenu", {
                  menuParam: "MenuItem",
                  menuList: listaDeFrutasPreparadas,
                  menuTitle: "Frutas Preparadas"
                })
              }
            />
          </Card>
          <Card
            containerStyle={{
              backgroundColor: "white",
              width: 320
            }}
          >
            <Image
              source={require("../img/Papas_MainMenu_300x250.png")}
              style={{ width: 300, height: 250 }}
            />
            <Button
              titleStyle={{
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 25,
                marginRight: 10
              }}
              buttonStyle={styles.buttonStyle1}
              title="Papas"
              onPress={() =>
                this.props.navigation.navigate("SubMenu", {
                  menuParam: "MenuItem",
                  menuList: listaDePapas,
                  menuTitle: "Papas"
                })
              }
            />
          </Card>
        </View>
        <View style={styles.ContainerOne}>
          <Card
            containerStyle={{
              marginTop: 70,
              backgroundColor: "white",
              width: 320
            }}
          >
            <Image
              source={require("../img/Bebidas_MainMenu_300x250.png")}
              style={{ width: 300, height: 250 }}
            />
            <Button
              titleStyle={{
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 25
              }}
              buttonStyle={styles.buttonStyle1}
              title="Bebidas"
              onPress={() =>
                this.props.navigation.navigate("SubMenu", {
                  menuParam: "MenuItem",
                  menuList: listaDeBebidas,
                  menuTitle: "Bebidas"
                })
              }
            />
          </Card>
          <Card
            containerStyle={{
              backgroundColor: "white",
              width: 320
            }}
          >
            <Image
              source={require("../img/Nieves_300x250.png")}
              style={{ width: 300, height: 250 }}
            />
            <Button
              titleStyle={{
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 25
              }}
              buttonStyle={styles.buttonStyle1}
              title="Nieves"
              onPress={() =>
                this.props.navigation.navigate("SubMenu", {
                  menuParam: "MenuItem",
                  menuList: listaDeNieves,
                  menuTitle: "Nieves"
                })
              }
            />
          </Card>
        </View>
        <View style={styles.ContainerOne}>
          <Card
            containerStyle={{
              marginTop: 70,
              backgroundColor: "white",
              width: 320
            }}
          >
            <Image
              source={require("../img/Elotes_MainMenu_300x250.png")}
              style={{ width: 300, height: 250 }}
            />
            <Button
              titleStyle={{
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 25
              }}
              buttonStyle={styles.buttonStyle1}
              title="Elotes"
              onPress={() =>
                this.props.navigation.navigate("SubMenu", {
                  menuParam: "MenuItem",
                  menuList: listaDeElotes,
                  menuTitle: "Elotes"
                })
              }
            />
          </Card>
        </View>
      </View>
    );
  }
}
export default MainMenu;
