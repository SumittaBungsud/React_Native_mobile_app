import React, { useState } from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'
import { addMessage } from '../Redux/taskReducer'
import { useDispatch, useSelector } from 'react-redux' 

const Reminder = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => {},
    ...props
}) => {

  const { isSubmit } = useSelector(state => state.taskTarget);
  const dispatch = useDispatch();

  const [isFocused, setIsFocused] = useState(false);
  const [messageChange, setNewMessage] = useState('');

  return (
    <View style={{marginBottom: 20}} >
      <Text style={styles.label} >{label}</Text>
      <View style={[styles.inputContainer, {borderColor: error ?'red':isFocused ?'#57597c':'#f5f6ff',}]} >
        <TextInput 
            autoCorrect={false}
            value={messageChange}
            onFocus = {() =>{
              onFocus();
              setIsFocused(true);
            }} 
            onBlur = {() =>{setIsFocused(false)}} 
            onChangeText = {(data) => {
              dispatch(addMessage(data));
              isSubmit? setNewMessage(''):setNewMessage(data) }}
            style={{color: 'darkBlue', flex: 1}} 
            {...props}
        />
      </View>

      { error && (<Text style={{color: 'red', fontSize: 12, marginTop: 7}} >{error}</Text> )}
    </View>
  )
}

const styles = StyleSheet.create({
    label: {
        marginVertical: 6,
        fontSize: 14,
        color: 'grey'
    },
    inputContainer: {
        height: 55,
        backgroundColor: '#f5f6ff',
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginBottom: 30,
        borderWidth: 0.5,
        alignItems: 'center',
    },
})

export default Reminder;