/**
 * Author: Delsin
 * Created: 12/21/2016
 * Last modified: 12/21/2016
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';
import First from './src/components/First';
import Second from './src/components/Second';


export default class NavDemo extends Component {
  navigatorRenderScene(route, navigator) {
      switch (route.id) {
          case 'First':
              return (<First navigator={navigator} />);
          case 'Second':
              return (<Second navigator={navigator} />);
          default:

      }
  }

  render() {
    return (
        <Navigator
            initialRoute={{
                id: 'First'
            }}
            renderScene={
                this.navigatorRenderScene
            }
        />
    );
  }
}


AppRegistry.registerComponent('nav_demo', () => NavDemo);
