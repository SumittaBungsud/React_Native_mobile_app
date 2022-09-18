import { TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Daylist = ({item}) => {

  const [isFocused, setIsFocused] = useState(false); 

  return (
    <ScrollView>
      <TouchableOpacity 
        style = {[styles.layout, {borderBottomColor: isFocused? '#bcbcbc':'#80d1c5',}]} 
        onPress = {() => { isFocused ? setIsFocused(false):setIsFocused(true) }} >
        <Text style={[styles.layoutTask, {color: isFocused ? '#cfcfcf':'#5b5b5b', 
                                          textDecorationLine: isFocused ? 'line-through':'none',}]} >{item.task}</Text>
        <Text style={[styles.layoutDate, {color: isFocused ? '#cfcfcf':'#5b5b5b',}]} >{item.date}</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderBottomWidth: 10,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    margin: 8,
  },
  layoutTask: {
    fontSize: 16,
    paddingLeft: 20,
    paddingVertical: 25,
    width: '60%',
  },
  layoutDate: {
    fontSize: 16,
    paddingRight: 20,
    paddingVertical: 25,
  },
});

export default Daylist

