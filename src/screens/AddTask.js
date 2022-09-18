import React from 'react'
import { SafeAreaView, ScrollView, Button, View, Text, Alert } from 'react-native'
import InputDatePicker from '../components/InputDatePicker'
import Reminder from '../components/Reminder'
import { addDate, addMessage, addTask, setSubmit_on } from '../Redux/taskReducer'
import { useSelector, useDispatch } from 'react-redux'

const AddTask = (props) => {

  const { dateTarget, messageTarget, isSubmit } = useSelector(state => state.taskTarget);
  const dispatch = useDispatch();

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white', width: '100%', justifyContent: 'center', padding: 20}}>
        <ScrollView contentContainerStyle={{padding: 20}} >
          <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}} > AddTask </Text>
          <Text style={{color: 'grey', fontSize: 18, marginVertical: 10}} > Enter Your Details  </Text>
          <View style={{marginVertical: 20}} >
            <InputDatePicker label='Date' iconName='date-range' messageDefault='Choose your date' />
            <Reminder label='Reminder' placeholder='Enter your activity' />
          </View>
          {/* { isSubmit && (<Text style={{alignItems: 'center', paddingVertical: 20}} >{'กำหนดการ  '+messageTarget+'  เมื่อ  '+dateTarget}</Text>)} */}

          <Button color='#c90076' title='Submit' onPress={() => {
            if (messageTarget && dateTarget) {
              dispatch(setSubmit_on());
              dispatch(addTask()); 
              dispatch(addDate()); 
              dispatch(addMessage()); 
            }else{
              Alert.alert( "Warnning", "กรุณากรอกข้อมูลให้ครบ", [{ text: "OK"}]);
            }
          }} />
        </ScrollView>
        <Button onPress={() => props.navigation.goBack()} title="Go back home" />
      </SafeAreaView>
    )
}

export default AddTask;