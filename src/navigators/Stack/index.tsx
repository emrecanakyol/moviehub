import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/App/Home';
import OnBoardingOne from '../../screens/Auth/OnBoardings/OnBoardingOne';
import OnBoardingTwo from '../../screens/Auth/OnBoardings/OnBoardingTwo';
import OnBoardingThree from '../../screens/Auth/OnBoardings/OnBoardingThree';

export const HOME = "Home";
export const ONBOARDINGONE = "OnBoardingOne";
export const ONBOARDINGTWO = "OnBoardingTwo";
export const ONBOARDINGTHREE = "OnBoardingThree";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={ONBOARDINGONE}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={ONBOARDINGONE} component={OnBoardingOne} />
            <Stack.Screen name={ONBOARDINGTWO} component={OnBoardingTwo} />
            <Stack.Screen name={ONBOARDINGTHREE} component={OnBoardingThree} />
            <Stack.Screen name={HOME} component={Home} />
        </Stack.Navigator>
    )
}

export default StackNavigator;