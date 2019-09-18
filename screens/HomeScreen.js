import React from 'react'
import { Text } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C81315',
    },
    logo: {
      width: 300,
      height: 300,
    },
    welcome: {
      fontSize: 50,
      color: 'white',
      marginTop: 25,
      textAlign: 'center',
    },
  });
  

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
    <Image style={styles.logo}source={require('../img/rinconcito_logo.png')} />
    <Button onPress={() => navigation.navigate('First')} title="Iniciar" />
    </View>
  )
export default HomeScreen