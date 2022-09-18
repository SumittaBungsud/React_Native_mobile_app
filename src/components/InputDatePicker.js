import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/dist/MaterialIcons"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { setSubmit_off, addDate } from '../Redux/taskReducer'
import { useDispatch, useSelector } from 'react-redux'
  
const Input = ({
    label,
    iconName,
    error,
    messageDefault,
    onFocus = () => {},
    ...props
}) => {

    const { isSubmit } = useSelector(state => state.taskTarget);
    const dispatch = useDispatch();

    let spliter, spliter2, sub
    const [isFocused, setIsFocused] = useState(false); 
    const [messageChange, setNewMessage] = useState(messageDefault);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  return (
    <View style={{marginBottom: 20}} >
      <Text style={styles.label} >{label}</Text>
      <View style={[styles.inputContainer, {borderColor: error ?'red':isFocused ?'#57597c':'#f5f6ff',}]} >
        <Icon name={iconName} style={{fontSize: 22, color: '#57597c', marginRight: 10}} />
        <TouchableOpacity
            onPress = {() =>{
                onFocus();
                setIsFocused(true);
                setDatePickerVisibility(true);
            }} 
            style={{backgroundColor: 'darkBlue', flex: 1}} 
            {...props}
        >
            <Text>{isSubmit? 'Choose your date':messageChange}</Text>
        </TouchableOpacity>
      </View>
      
      { error && (<Text style={{color: 'red', fontSize: 12, marginTop: 7}} >{error}</Text> )}
      <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={(date) => {
                spliter = date.toLocaleDateString()
                sub = spliter.split('/')
                spliter2 = `${sub[1]}/${sub[0]}/${sub[2]}`
                setDatePickerVisibility(false);
                setIsFocused(false);
                setNewMessage(spliter2);
                dispatch(addDate(spliter2));
                dispatch(setSubmit_off()); 
            }}
            onCancel={() => {
                setDatePickerVisibility(false);
                setIsFocused(false);
            }}
        />
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
        borderWidth: 0.5,
        alignItems: 'center',
    },
})

export default Input;




