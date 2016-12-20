/**
 * Author: Delsin
 * Created: 12/20/2016
 * Last modified: 12/20/2016
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return(
        <View style={{ flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>
    )
}

AppRegistry.registerComponent('albums', () => App);
