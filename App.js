import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Text, View } from 'react-native';
import style from './Screens/style';

import { useEffect, useState } from 'react';
import Questions from './assets/data/multipleQuestions';
import ImageMultipleChoice from './src/components/ImageMultipleChoice/ImageMultipleChoice';
import Header from './src/components/Header/Header';
import FillInTheBlank from './src/components/FillInTheBlank/FillInTheBlank'
export default function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(Questions[0])
  const [lives, setlives] = useState(5)

  useEffect(() => {

    if (currentQuestionIndex >= Questions.length) {
      alert("You Won")
      setCurrentQuestionIndex(0)
    }
    else {
      setCurrentQuestion(Questions[currentQuestionIndex])
    }
  }, [currentQuestionIndex])

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const restart = () => {
    setlives(5)
    setCurrentQuestionIndex(0)
  }
  const onWrong = () => {
    Alert.alert("WrongAnswer")

    if (lives <= 1) {
      Alert.alert("You Loose", "Please Try Again", [{
        text: "Try Again",
        onPress: restart,
      }])
    }
    setlives(lives - 1)
  }


  return (
    <View style={style.container}>
      <StatusBar style="auto" />

      <Header progress={currentQuestionIndex / Questions.length} lives={lives} />

      {
        currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && <ImageMultipleChoice question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong} />
      }
      
      {
        currentQuestion.type === "FILL_IN_THE_BLANK" && <FillInTheBlank question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong} />

      }
    </View>
  );
}

