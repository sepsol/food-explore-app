import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import BusinessDetails from '../screens/BusinessDetails';



const Stack = createStackNavigator();

function StackNavigator() {
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>
				<Stack.Screen name="Home" component={Home} options={{title: "Business Search"}}/>
				<Stack.Screen name="BusinessDetails" component={BusinessDetails} options={{title: "Business Details"}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}



export default StackNavigator;