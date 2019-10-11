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
import { ListItem } from "react-native-elements";
import styles from "../styles.js";
import rinconctio from "../img/rinconcito_logo.png";

class SubMenu extends React.Component {
  
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      style={styles.listItem}
      containerStyle={{
        backgroundColor: "#f2f2f2",

      }}
      titleStyle={{
        color: "#282828",
        fontFamily: "Helvetica",
        fontSize: 25
      }}
      subtitleStyle={{
        color: "black",
        fontFamily: "Helvetica",
        fontSize: 20
      }}
      title={item.name}
      leftAvatar={{
        rounded: false,
        size: "large",
        source: item.icon_url,
        title: item.name[0]
      }}
      rightTitle={item.price}
      rightTitleStyle={{
        color: "#484848",
        fontFamily: "Helvetica",
        fontSize: 20
      }}
      bottomDivider
      topDivider
      chevron
      onPress={() =>
        this.props.navigation.navigate(
          this.props.navigation.getParam("menuParam"),
          { menuItem: item, menuItemName: item.name }
        )
      }
    />
  );

  render() {
    const navigation = this.props.navigation;
    const arr = navigation.getParam("menuList", []);
    return (
      <View style={styles.mainContainer}>
        <FlatList
          style={styles.flatList}
          keyExtractor={this.keyExtractor}
          data={arr}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
export default SubMenu;
