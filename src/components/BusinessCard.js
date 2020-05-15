import React from 'react';
import { Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/compat'; // for passing params through navigation object



function BusinessCard({ item, navigation }) {
  return(
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate('BusinessDetails', { id: item.id })} // for passing params through navigation object
    >
      <Image source={{uri: item.image_url}} style={styles.image}/>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.rating} Stars, {item.review_count} Reviews</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  image: {
    width: 185,
    height: 100,
    borderRadius: 7,
  },
  name: {
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 2,
    width: 181,
    height: 20,
  },
  subtitle: {
    color: '#666',
    paddingLeft: 2,
  },
});



export default withNavigation(BusinessCard); // for passing params through navigation object