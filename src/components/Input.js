import { TextInput, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/dist/MaterialIcons"

const Input = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => {},
    ...props
}) => {

    const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{marginBottom: 20}} >
      <Text style={styles.label} >{label}</Text>
      <View style={[styles.inputContainer, {borderColor: error ?'red':isFocused ?'#57597c':'#f5f6ff',}]} >
        <Icon name={iconName} style={{fontSize: 22, color: '#57597c', marginRight: 10}} />
        <TextInput 
            autoCorrect={false}
            onFocus = {() =>{
                onFocus();
                setIsFocused(true);
            }} 
            onBlur = {() =>{
                setIsFocused(false);
            }} 
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
        borderWidth: 0.5,
        alignItems: 'center',
    },
})

export default Input

