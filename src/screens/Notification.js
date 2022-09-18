import React from 'react'
import { Button, View, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';
import { useSelector } from 'react-redux'

const Notification = (props) => { 
  
    const { taskOrder } = useSelector((state) => state.taskTarget);
    return (
      <View style={{ flex: 1, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList data={taskOrder} renderItem={({item}) => (<TaskItem item={item} />)} />
        <Button style={{padding: 20, width: 80}} onPress={() => props.navigation.navigate('AddTask')} title="Go to AddTask" />
      </View>
    );
}

export default Notification;