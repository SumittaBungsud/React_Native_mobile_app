import React, { useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { Calendar } from "react-native-calendars"
import TaskItem from "./TaskItem"
import { useSelector } from 'react-redux'

const Calendar_test = () =>{

  const { taskOrder } = useSelector(state => state.taskTarget);
  
  const [getday, setDay] = useState()
  const [getmonth, setMonth] = useState()
  const [getyear, setYear] = useState()
  const [newItem, setNewItem] = useState()
  const mapsMonth = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const [isPerDate, setPerDate] = useState(false)
  
  const chooseDate = (date) => {
    setNewItem(taskOrder)
    setNewItem( prevItems =>{
      return prevItems.filter(item => item.date == date)
    })
  }

  return ( 
    <View style={styles.container}>
        <Calendar
          // Handler which gets executed on day press. Default = undefined
          onDayPress={date => {
            setDay(date.day);
            setMonth(date.month);
            setYear(date.year);
            setPerDate(true);
            let conv = date.dateString.split('-');
            let recon = conv[2]+'/'+conv[1]+'/'+conv[0][2]+conv[0][3]
            chooseDate(recon);
            console.log('selected day', date);
          }}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            setDay();
            setMonth();
            setYear();
            console.log('month changed to', month.month);
          }}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
        />
        <View style={styles.content_box}>
          <Text>{getday}  {mapsMonth[getmonth-1]}  {getyear}</Text>
        </View>
        {isPerDate && (<View style={styles.listBox}>
          <FlatList data={newItem} renderItem={({item}) => (<TaskItem item={item} />)} />
        </View>)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content_box: {
      margin: 10,
      alignItems: 'center', 
    },
    listBox: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#e9e9e9',
      alignItems: 'center',
      width: 350,
      margin: 10,
      padding: 20,
  },
})

export default Calendar_test;