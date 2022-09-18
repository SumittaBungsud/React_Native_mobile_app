import { StyleSheet, Text, View } from 'react-native'
import React, { useState} from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker_test = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

  return (
    <View>
      <Button title="Show Date Picker" onPress={setDatePickerVisibility(true)} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={setDatePickerVisibility(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default DatePicker_test

