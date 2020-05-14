import React, { useEffect } from 'react';
import { View, ScrollView, Image, Text, FlatList, StyleSheet } from 'react-native';

import useBusinessId from '../hooks/useBusinessId';

import RatingStars from '../components/RatingStars';
import PriceDollarSigns from '../components/PriceDollarSigns';



function Details({ route }) {

	const { id } = route.params;
	const [GetBusinessDetails, businessDetails, errorMessage] = useBusinessId();
	useEffect(() => {GetBusinessDetails(id)}, []);
	
	if ( !businessDetails ) { return null }


	function ListCategories() {
		const array = businessDetails.categories;
		let categories = '';
		for (let i = 0; i < array.length; i++) {
			categories += array[i].title;
			if ( i < (array.length - 1) ) {
				categories += ', ';
			}
		}
		return categories;
	}


	// function LoopPhotos() {
	// 	const array = businessDetails.photos;
	// 	for (let i = 0; i < array.length; i++) {
	// 		return <Image style={styles.image} source={{ uri: array[i] }}/>
	// 	}
	// }


	return(
		<View style={{ flex: 1 }}>
			<ScrollView>
				<Image source={{uri: businessDetails.image_url}} style={styles.coverImage}/>
				<View style={styles.contentContainer}>
					<Text style={styles.name}>{businessDetails.name}</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<RatingStars rating={businessDetails.rating}/>
						<Text style={styles.reviews}>  {businessDetails.review_count} Reviews</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
						<PriceDollarSigns price={businessDetails.price}/>
						<Text style={styles.categories}>  {'\u2014'}  {ListCategories()}</Text>
					</View>
					<View style={styles.photos}>
						{/* <FlatList
							data={businessDetails.photos}
							keyExtractor={(photo) => photo}
							renderItem={({ photo }) => <Image source={{ uri: photo }} style={styles.image}/>}
							// scrollEnabled={false}
							horizontal
							xyz = {console.log(businessDetails.photos)}
						/> */}
						{/* {LoopPhotos()} */}
						<Image style={styles.image} source={{ uri: businessDetails.photos[0] }} />
						<Image style={styles.image} source={{ uri: businessDetails.photos[1] }} />
					</View>

				</View>
			</ScrollView>
			{errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
		</View>
	);
}


const styles = StyleSheet.create({
	coverImage: {
		width: '100%',
		height: 300,
	},
	contentContainer: {
		marginHorizontal: 20,
	},
	name: {
		fontWeight: 'bold',
		fontSize: 30,
		marginTop: 20,
		marginBottom: 10,
	},
	reviews: {
		fontSize: 18,
		color: '#444',
	},
	categories: {
		fontSize: 17,
		color: '#444',
	},
	photos: {
		marginTop: 35,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	image: {
		width: '47.5%',
		height: 150,
		borderRadius: 5,
		marginHorizontal: 4,
		marginVertical: 4,
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



export default Details;

// <Image style={styles.image} source={{ uri: array[i] }}/>
// React.createElement( Image, { style: styles.image, source:{ uri: array[i] } }, null )