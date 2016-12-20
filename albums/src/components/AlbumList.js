/**
 * Author: Delsin
 * Created: 12/20/2016
 * Last modified: 12/20/2016
 */

 import React, { Component } from 'react';
 import { ScrollView } from 'react-native';
 import axios from 'axios';
 import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    // Lifecycle method. Called when app loaded.
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }


    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />);
    }


    // How the component is rendered
    render() {
        //console.log(this.state);

        return(
            <ScrollView>
               {this.renderAlbums()}
            </ScrollView>
        );
    }
 }

 export default AlbumList;
