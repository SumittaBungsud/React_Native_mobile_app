import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Feather'


const Navbar = (props) => {

    return (
      <View style={styles.navbar}>
        <TouchableOpacity onPress={props.navigation.openDrawer} >
          <Icon name="menu" size={30} color="#f2ebeb" />
        </TouchableOpacity>
        <Text style={styles.navbarText}> Routine App </Text>
        <TouchableOpacity>
          <Icon name="user" size={30} color="#f2ebeb" />
        </TouchableOpacity>
      </View>
    )
  }


const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: '#108080',
    },
    navbarText: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        color: '#d7eccd',
    },
})

export default Navbar;