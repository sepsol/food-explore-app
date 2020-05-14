import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 



function RatingStars({ rating }) {

  if (rating >= 0 && rating <0.5) {
    // 0
    return(
      <View style={styles.container}>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
      </View>
    );
  } else if (rating >= 0.5 && rating < 1.5) {
    // 1
    return(
      <View style={styles.container}>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
      </View>
    );
  } else if (rating >= 1.5 && rating < 2.5) {
    // 2
    return(
      <View style={styles.container}>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
      </View>
    );
  } else if (rating >= 2.5 && rating < 3.5) {
    // 3
    return(
      <View style={styles.container}>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
      </View>
    );
  } else if (rating >= 3.5 && rating < 4.5) {
    // 4
    return(
      <View style={styles.container}>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOff}/>
      </View>
    );
  } else {
    // 5
    return(
      <View style={styles.container}>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
        <MaterialCommunityIcons name="star-box" style={styles.starOn}/>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  starOn: {
		color: 'red',
		fontSize: 25,
    marginHorizontal: -1,
  },
  starOff: {
    color: '#b0b0b0',
    fontSize: 25,
    marginHorizontal: -1,
  },
});



export default RatingStars;