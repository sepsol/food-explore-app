import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



function BusinessList({ title, filteredBusinesses }) {
  return(
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={{color:'red'}}>{filteredBusinesses.length}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ filteredBusinesses }
        renderItem={ ({item}) => <Text>{item.name}   </Text> }
        keyExtractor={ item => item.id }
      />
    </View>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  }
});



export default BusinessList;