/**
 * Author: Delsin
 * Created: 12/21/2016
 * Last modified: 12/21/2016
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

class First extends Component {
    onPress() {
        this.props.navigator.push({
            id: 'Second'
        });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.infoTextStyle}>
                    Navigator Demo
                </Text>
                <TouchableHighlight onPress={this.onPress.bind(this)} style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>
                        Next
                    </Text>
                </TouchableHighlight>
            </View>
        );
        // ?: .bind(this)
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddfd4'
    },
    infoTextStyle: {
        flex: 1,
        fontSize: 52,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#3fb8ac'
    },
    buttonTextStyle: {
        fontSize: 52
    }
};

export default First;
