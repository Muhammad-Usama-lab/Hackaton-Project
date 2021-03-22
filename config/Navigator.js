//internal imports 
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../screens/Home.js'
import Setting from '../screens/Setting.js'
import Company from '../screens/Company.js';
import { useSelector } from 'react-redux'


//external imports

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// declarations

const Tab = createMaterialBottomTabNavigator();


const Navigator = () => {
    const User = useSelector(state => state.user.User);
    return (

        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#f0edf6"
                inactiveColor="#546E7A"
                barStyle={{ backgroundColor: '#1E88E5' }}
            >
                {(User === "Student") ?
                    <>
                        <Tab.Screen name="Companies" component={Company} options={{ tabBarLabel: 'Companies' }} />
                        <Tab.Screen name="Profile" component={Setting} options={{ tabBarLabel: 'Profile' }} />
                    </>
                    : (User === "Admin") ?
                        <>
                            <Tab.Screen name="Feed" component={Home} options={{ tabBarLabel: 'Feed' }} />
                            <Tab.Screen name="Students" component={Company} options={{ tabBarLabel: 'Companies' }} />
                            <Tab.Screen name="Profile" component={Setting} options={{ tabBarLabel: 'Profile' }} />

                        </> 
                        :(User === "Company")?
                        <>
                        <Tab.Screen name="Feed" component={Home} options={{ tabBarLabel: 'Feed' }} />
                        <Tab.Screen name="Profile" component={Setting} options={{ tabBarLabel: 'Profile' }} />

                        </>
                        :null

                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Navigator;