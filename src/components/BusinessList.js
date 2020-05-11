import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import BusinessCard from '../components/BusinessCard';



function BusinessList({ title, filteredBusinesses }) {

  if(!filteredBusinesses.length) {return null;}

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ filteredBusinesses }
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => <BusinessCard item={item} /> }
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});



export default BusinessList;