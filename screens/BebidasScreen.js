

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import GallerySwiper from "react-native-gallery-swiper";

class BebidasScreen extends React.Component {
  render() {
    return (

<GallerySwiper
            images={[
                { source: require("../img/bananasconcrema.jpg"),
                   width: 1080,
                   height: 1920 },
                { source: require("../img/bananasplit_2.jpg"),
                    width: 1080,
                    height: 1920 },
                { source: require("../img/clamatoreparado.jpg"),
                    width: 1080,
                    height: 1920 },
                { source: require("../img/dorinachos_2.jpg"),
                    width: 1080,
                    height: 1920 },
                    { source: require("../img/bananasconcrema.jpg"),
                    width: 1080,
                    height: 1920 },
                 { source: require("../img/bananasplit_2.jpg"),
                     width: 1080,
                     height: 1920 },
                 { source: require("../img/clamatoreparado.jpg"),
                     width: 1080,
                     height: 1920 },
                 { source: require("../img/dorinachos_2.jpg"),
                     width: 1080,
                     height: 1920 },
            ]}
        />

    );
  }
}
export default BebidasScreen;