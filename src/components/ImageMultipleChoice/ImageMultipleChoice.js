import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import ImageOption from '../ImageOption/ImageOption'
import Button from '../button/Button'
import { ImageMultipleChoiceStyle } from './styles'

const ImageMultipleChoice = ({ question, onCorrect, onWrong }) => {
    const [selected, setSelected] = useState(null)

    const onButtonPress = () => {
        if (selected.correct) {
            onCorrect()
            setSelected(null)
        } else {
            onWrong()
        }
    }

    return (
        <>
            <Text style={ImageMultipleChoiceStyle.title}>{question.question}</Text>
            <View style={ImageMultipleChoiceStyle.optionsContainer}>
                {
                    question.options.map((option) => (
                        <ImageOption
                            key={option.id}
                            image={option.image}
                            text={option.text}
                            isSelected={selected?.id === option.id}
                            onPress={() => setSelected(option)}
                        />
                    ))
                }
            </View>

            <Button text={"Check"} onPress={onButtonPress} disabled={!selected} />
        </>
    )
}

export default ImageMultipleChoice