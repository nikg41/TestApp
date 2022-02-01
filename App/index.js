import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './container/SignInScreen';
import MainScreen from './container/MainScreen';
const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled: false
            }}
        >
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
    );
}

export { RootStack };