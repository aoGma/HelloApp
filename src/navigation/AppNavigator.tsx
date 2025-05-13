import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MainHomeScreen from '../screens/MainHomeScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#999',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: {
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="Home"
          component={MainHomeScreen}
          options={{
            title: '首页',
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Todo"
          component={HomeScreen}
          options={{
            title: '待办事项',
            tabBarLabel: '待办',
            tabBarIcon: ({color, size}) => (
              <Icon name="list-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
