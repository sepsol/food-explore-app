import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessList from '../components/BusinessList';



function Home() {

	const[term, setTerm] = useState('');
	const[SearchApi, businesses, errorMessage] = useBusinesses();
	
	function FilterBusinesses(categoryPrice) {
		return businesses.filter(business => business.price === categoryPrice);
	}

	return(
		<View style={styles.container}>

			<SearchBar 
				currentState={term} 
				newState={setTerm} // newState={newTerm => setTerm(newTerm)} === newState={setTerm}
				onSubmit={() => SearchApi(term)} // onSubmit={() => SearchApi()} === onSubmit={SearchApi}
			/>

			<ScrollView>
				<BusinessList title="Cost Effective" filteredBusinesses={FilterBusinesses('$')}/>
				<BusinessList title="Bit Pricier" filteredBusinesses={FilterBusinesses('$$')}/>
				<BusinessList title="Big Spender!" filteredBusinesses={FilterBusinesses('$$$')}/>
			</ScrollView>

			{errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	error: {
		backgroundColor: '#ffeecc',
		color: '#653',
		borderColor: '#dca',
		borderWidth: 0.5,
		paddingVertical: 12,
		paddingHorizontal: 15,
		borderRadius: 7,
		position: 'absolute',
		bottom: 20,
		alignSelf: 'center',
		marginHorizontal: 40,
	},
});



export default Home;