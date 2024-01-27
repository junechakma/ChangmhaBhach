import { Text, TouchableOpacity } from "react-native"
import { buttonStyle } from "./styles"

function Button({ text, onPress, disabled }) {
    return (
        <TouchableOpacity onPress={onPress} style={disabled ? buttonStyle.disabledContainer : buttonStyle.container}>
            <Text style={buttonStyle.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button