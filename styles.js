import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';

export default StyleSheet.create({
    container_one: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C81315',
    },
    logo: {
      width: 600,
      height: 600,
    },
    welcome: {
      fontSize: 50,
      color: 'white',
      marginTop: 25,
      
    },
    mainContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#C81315',
    },
    ContainerOne: {
      width: 340,
    },
    MenuItemMainContainer: {
      flex: 1,
      backgroundColor: '#C81315',
    },
    HeaderContainer: {
      flex: 1,
      flexDirection: "row",
      margin: 20,
      padding: 10,
    },
    TitleContainer: {
      flex: 7,
      marginTop: 20,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    },
    PriceContainer: {
      flex: 1,
      marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
    },
    BodyContainer: {
      flex: 3,
      flexDirection: "row",
    },
    ImageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
    },
    RightContainer: {
      flex: 1,
      marginTop: 60,
    },
    MenuItem: {
      flex: 2,
      width: 512,
    },
    image: {
      height: 400,
      width: '100%',
    },
    fullImageStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '98%',
      resizeMode: 'contain',
    },
    modelStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    closeButtonStyle: {
      width: 25,
      height: 25,
      top: 9,
      right: 9,
      position: 'absolute',
    },
    flatList: {
      marginTop: 100,
    },
    listItem: {
      marginTop: 20,
    },
    buttonStyle1: {
      backgroundColor:'#C81315',
    },
  });
  