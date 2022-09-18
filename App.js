import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Notification, AddTask } from './src/Navigator';

import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
  
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="AddTask" component={AddTask} />
          <Drawer.Screen name="Notifications" component={Notification} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider> 
  );
}