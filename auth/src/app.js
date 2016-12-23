/**
 * Author: Delsin
 * Created: 12/21/2016
 * Last modified: 12/22/2016
 */

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class app extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBKsvOVuLTlfp2sK8I5md66GqPOivPR-UE',
            authDomain: 'authentication-4d280.firebaseapp.com',
            databaseURL: 'https://authentication-4d280.firebaseio.com',
            storageBucket: 'authentication-4d280.appspot.com',
            messagingSenderId: '870643214873'
        });
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <Text>App</Text>
            </View>
        );
    }
}

export default app;
