import React from 'react'
import { Button, SafeAreaView } from 'react-native';
import Calendar_test from '../components/Calendar_test'; 

const Home = (props) => {
    return (
      <SafeAreaView style={{ flex: 1, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
        <Calendar_test />
        <Button onPress={() => props.navigation.navigate('Notifications')} title="Go to Notifications" />
      </SafeAreaView>
    );  
}

export default Home