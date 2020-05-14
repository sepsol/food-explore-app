import React from 'react';
import { View, StyleSheet } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'; 



function PriceDollarSigns({ price }) {

  switch (price) {
    case '$':
      return(
        <View style={styles.container}>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOff}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOff}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOff}/>
        </View>
      );
    case '$$':
      return(
        <View style={styles.container}>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOff}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOff}/>
        </View>
      );
    case '$$$':
      return(
        <View style={styles.container}>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOff}/>
        </View>
      );
    case '$$$$':
      return(
        <View style={styles.container}>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
          <FontAwesome5 name="dollar-sign" style={styles.dollarSignOn}/>
        </View>
      );
    default:
      throw new Error('Invalid price value!');
  }

}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dollarSignOn: {
		color: '#444',
		fontSize: 18,
		marginHorizontal: 2,
	},
  dollarSignOff: {
		color: '#b0b0b0',
		fontSize: 18,
		marginHorizontal: 2,
	},
});



export default PriceDollarSigns;