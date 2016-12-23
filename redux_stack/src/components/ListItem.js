import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        // If the animation method gets called at any point in time before the component gets updated on screen, any change will be animated in any way possible.
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.descriptionTextStyle}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        //console.log(this.props);

        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionTextStyle: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    }
};

const mapStateToProps = (state, ownProps) => { //The second argument, which is by convention called ownProps, is the pros that are passed to the component we are wrapping.
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return ({
        expanded: expanded
    });
};

export default connect(mapStateToProps, actions)(ListItem);
