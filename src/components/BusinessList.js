import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import BusinessCard from '../components/BusinessCard';



function BusinessList({ title, filteredBusinesses }) {

  const flatlistRef = useRef();
  // useEffect(() => flatlistRef.current.scrollToIndex({ index: 0, animated: false, viewOffset: 18}), []);

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
        contentContainerStyle={styles.flatlist}
        ref={flatlistRef}
      />
      {/* <Button title="go to start" onPress={() => flatlistRef.current.scrollToIndex({ index: 0, animated: false, viewOffset: 18})}/> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 20,
  },
  flatlist: {
    paddingLeft: 18,
    paddingRight: 10,
  },
});



export default BusinessList;