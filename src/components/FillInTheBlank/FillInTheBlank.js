import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { fillInTheBlankStyle } from './styles'
import Button from '../button/Button'
import WordOption from '../WordOption/WordOption'

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null)
  console.log(selected)
  const onButtonPress = () => {
    if (selected === question.correct) {
      onCorrect();
    }
    else {
      onWrong();
    }
    setSelected(null)
  }

  return (
    <>
      <Text style={fillInTheBlankStyle.title}>Complete The Sentence</Text>
      <View style={fillInTheBlankStyle.row}>

        <Text style={fillInTheBlankStyle.text}>{question.textPre}</Text>
        <View style={fillInTheBlankStyle.blank}>
          {
            selected && <WordOption text={selected} onPress={() => setSelected(null)} />
          }
        </View>
        <Text style={fillInTheBlankStyle.text}>{question.textPost}</Text>
      </View>

      <View style={fillInTheBlankStyle.optionsContainer}>
        {
          question.options.map(((option, index) => (
            <WordOption key={index} text={option} isSelected={selected === option} onPress={() => setSelected(option)} />
          )))
        }
      </View>

      <Button text={"Check"} onPress={onButtonPress} disabled={!selected} />
    </>
  )
}

export default FillInTheBlank