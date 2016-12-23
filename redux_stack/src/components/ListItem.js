import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
    Image,
    Linking
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { item, expanded } = this.props;
        const { image, url } = item;

        if (expanded) {
            return (
                <View>
                    <CardSection>
                        <Image source={{ uri: image }} style={styles.imageStyle} />
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => Linking.openURL(url)}>
                            Buy Now
                        </Button>
                    </CardSection>
                </View>
            );
        }
    }

    render() {
        const { title, artist, thumbnail_image } = this.props.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectItem(title)}
            >
                <View>
                <Card>
                    <CardSection>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                source={{ uri: thumbnail_image }}
                                style={styles.thumbnailStyle}
                            />
                        </View>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.headerTextStyle}>{title}</Text>
                            <Text>{artist}</Text>
                        </View>
                    </CardSection>
                    {this.renderDescription()}
                </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 10
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
        borderRadius: 5
    }
};

// The second argument, which is by convention called ownProps,
// is the pros that are passed to the component we are wrapping.
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedItemId === ownProps.item.title;
    return ({
        expanded: expanded
    });
};

export default connect(mapStateToProps, actions)(ListItem);
