import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainMenu from './screens/MainMenu.js';
import SubMenu from './screens/SubMenu.js';
import Home from './screens/Home.js';
import MenuItem from './screens/MenuItem.js';


const MainNavigator = createStackNavigator({

  Home: {screen: Home,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerTransparent: true,
    }),
  },
  MainMenu: {screen: MainMenu,
    navigationOptions: () => ({
      title: `Menu`,
      headerBackTitle: null,
      headerTransparent: true,
      headerTintColor: '#C81315',
      headerTitleStyle: {
        fontSize: 20,
      }
    }),
  },
  SubMenu: {screen: SubMenu,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('menuTitle', 'Menu Category'),
      headerBackTitle: null,
      headerTransparent: true,
      headerTintColor: '#C81315',
      headerTitleStyle: {
        fontSize: 20,
      }
    }),
  },
  MenuItem: {screen: MenuItem,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam("menuItemName", []),
      headerBackTitle: null,
      headerTransparent: true,
      headerTintColor: '#C81315',
      headerStyle: {height: 100},
      headerTitleStyle: {
        fontSize: 60,
        position: 'absolute', left: 0,
      }
    }),
  }
});

const App = createAppContainer(MainNavigator);

export default App;