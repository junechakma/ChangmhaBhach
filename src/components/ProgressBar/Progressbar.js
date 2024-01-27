import { View,  StyleSheet } from 'react-native'
import React from 'react'

const Progressbar = ({progress}) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg,{width:`${progress *100}%`}]}/>
    </View>
  )
}

export default Progressbar

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "gray",
    height: 30,
    flex: 1,
    borderRadius:30,
  },
  fg:{
    backgroundColor: "#FAC800",
    flex:1,
    borderRadius:30,
  }
})