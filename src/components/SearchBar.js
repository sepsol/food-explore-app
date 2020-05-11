import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import { AntDesign } from '@expo/vector-icons';



function SearchBar({ currentState, newState, onSubmit }) {
	return(
		<View style={styles.container}>
			<AntDesign name="search1" style={styles.icon}/>
			<TextInput
				style={styles.input}
				placeholder="Search"
				placeholderTextColor='#ababab'
				autoCapitalize='none'
				autoCorrect={false}
				value={currentState}    // value={ () => currentState }
				onChangeText={newState} // onChangeText={ () => newState() }
				onEndEditing={onSubmit}   // onEdnEditing={ () => .....() }
			/>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		marginHorizontal: 20,
		height: 50,
		backgroundColor: '#f0eeee',
		borderRadius: 10,
		flexDirection: 'row',
		marginBottom: 15,
	},
	icon: {
		fontSize: 30,
		marginLeft: 15,
		alignSelf: 'center',
		marginBottom: 3,
		color: '#555',
	},
	input :{
		marginLeft: 15,
		flex: 1,
		fontSize: 18,
	}
});



export default SearchBar;