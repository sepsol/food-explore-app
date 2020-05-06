import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import SearchBar from '../components/SearchBar';



function Home({ navigation }) {
    return(
        <View style={styles.container}>
            <SearchBar />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default Home;