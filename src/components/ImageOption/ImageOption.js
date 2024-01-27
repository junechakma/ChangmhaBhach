import { Image, Text, TouchableOpacity } from "react-native"
import ImageOptionStyle from "./styles"

const ImageOption = ({ image, text, isSelected , onPress}) => (
  <TouchableOpacity onPress={onPress} style={[ImageOptionStyle.optionContainer, isSelected ? ImageOptionStyle.slectedConatiner : {}]}>
    <Image source={{ uri: image }} resizeMode='cover' style={ImageOptionStyle.optionImage} />
    <Text style={isSelected ? ImageOptionStyle.selectedText: ImageOptionStyle.optionText }>{text}</Text>
  </TouchableOpacity>
)


export default ImageOption