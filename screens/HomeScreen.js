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
  

  class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
        <Image style={styles.logo}source={require('../img/rinconcito_logo.png')} />
        <Button 
          style={styles.logo}
          title="Iniciar"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
        </View>
      );
    }
  }
  
export default HomeScreen