import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/App/Home';
import Search from '../../screens/App/Search';
import Favorites from '../../screens/App/Favorites';
import Profile from '../../screens/App/Profile';
import { colors } from '../../utils/colors';

export const HOME = "Ana Sayfa";
export const FAVORITES = "Favoriler";
export const SEARCH = "Arama";
export const PROFILE = "Hesabım";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}

            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        let iconName = '';

                        if (route.name === HOME) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === SEARCH) {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === FAVORITES) {
                            iconName = focused ? 'heart' : 'heart-outline';
                        } else if (route.name === PROFILE) {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }

                        return <Icon name={iconName} size={24} color={color} />;
                    }}
                    getLabelText={({ route }: any) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.title;

                        return label;
                    }}
                    activeColor={colors.RED_COLOR}
                    inactiveColor={colors.GRAY_COLOR}
                    activeIndicatorStyle={{
                        backgroundColor: "transparent"
                    }}
                    style={{
                        borderTopWidth: 0.3,
                        borderColor: colors.GRAY_COLOR,
                        backgroundColor: colors.MAIN_COLOR,
                    }}
                />
            )}

        >
            <Tab.Screen
                name={HOME}
                component={Home}
                options={{
                    tabBarLabel: HOME,
                }}
            />
            <Tab.Screen
                name={SEARCH}
                component={Search}
                options={{
                    tabBarLabel: SEARCH,
                }}
            />
            <Tab.Screen
                name={FAVORITES}
                component={Favorites}
                options={{
                    tabBarLabel: FAVORITES,
                }}
            />
            <Tab.Screen
                name={PROFILE}
                component={Profile}
                options={{
                    tabBarLabel: PROFILE,
                }}
            />
        </Tab.Navigator>
    );
}
