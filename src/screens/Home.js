import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

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

			{errorMessage ? <Text>{errorMessage}</Text> : null}

			<BusinessList title="Cost Effective" filteredBusinesses={FilterBusinesses('$')}/>
			<BusinessList title="Bit Pricier" filteredBusinesses={FilterBusinesses('$$')}/>
			<BusinessList title="Big Spender!" filteredBusinesses={FilterBusinesses('$$$')}/>

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