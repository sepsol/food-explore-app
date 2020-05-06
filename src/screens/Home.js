import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import SearchBar from '../components/SearchBar';



function Home({ navigation }) {

    const[term, setTerm] = useState('');

    return(
        <View style={styles.container}>
            <SearchBar 
                currentState={term} 
                newState={newTerm => setTerm(newTerm)} // is equal to >>> newState={setTerm}
                onSubmit={() => {
                    console.log(term);
                    setTerm(''); }}
            />
            <Text style={{alignSelf: 'center'}}>{term}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});



export default Home;