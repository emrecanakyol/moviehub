import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/App/Home';
import OnBoardingOne from '../../screens/Auth/OnBoardings/OnBoardingOne';
import OnBoardingTwo from '../../screens/Auth/OnBoardings/OnBoardingTwo';
import OnBoardingThree from '../../screens/Auth/OnBoardings/OnBoardingThree';
import Favorites from '../../screens/App/Favorites';
import Search from '../../screens/App/Search';
import Profile from '../../screens/App/Profile';
import BottomTabs from '../BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetails from '../../screens/App/MoviesDetails';


export const BOTTOM_TABS = "BottomTabs";
export const ONBOARDINGONE = "OnBoardingOne";
export const ONBOARDINGTWO = "OnBoardingTwo";
export const ONBOARDINGTHREE = "OnBoardingThree";
export const HOME = "Home";
export const FAVORITES = "Favorites";
export const SEARCH = "Search";
export const PROFILE = "Profile";
export const MOVIES_DETAILS = "MovieDetails";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ONBOARDINGONE}
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name={ONBOARDINGONE} component={OnBoardingOne} />
                <Stack.Screen name={ONBOARDINGTWO} component={OnBoardingTwo} />
                <Stack.Screen name={ONBOARDINGTHREE} component={OnBoardingThree} />
                <Stack.Screen name={BOTTOM_TABS} component={BottomTabs} />
                <Stack.Screen name={HOME} component={Home} />
                <Stack.Screen name={FAVORITES} component={Favorites} />
                <Stack.Screen name={SEARCH} component={Search} />
                <Stack.Screen name={PROFILE} component={Profile} />
                <Stack.Screen name={MOVIES_DETAILS} component={MovieDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;