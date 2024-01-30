import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const WordOption = ({ text, isSelected, onPress }) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={[styles.root, { backgroundColor: isSelected ? "green": "white"  }]}>
      <Text style={[styles.text, {color: isSelected ? "white":"black"}]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  root: {
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  text: {

  }

})

export default WordOption