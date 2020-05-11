import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';



function BusinessCard({ item }) {
  return(
    <View style={styles.container}>
      <Image source={{uri: item.image_url}} style={styles.image}/>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.rating} Stars, {item.review_count} Reviews</Text>
    </View>
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
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtitle: {
    color: '#666',
  },
});



export default BusinessCard;