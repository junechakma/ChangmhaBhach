import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Progressbar from '../ProgressBar/Progressbar'
import heart from '../../../assets/images/heart.png'

const Header = ({ progress , lives}) => {
  return (
    <View style={styles.root}>
      <Progressbar progress={progress} />
      <Image source={heart} style={styles.icon}/>
      <Text style={styles.text}>{lives}</Text>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 35,
    height: 30,
    resizeMode: "contain",
    marginHorizontal:5
  },
  text:{
    color:"red",
    fontSize:24,
    fontWeight: "bold",
  }
})