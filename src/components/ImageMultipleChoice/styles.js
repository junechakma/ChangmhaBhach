import { StyleSheet } from "react-native";

export const ImageMultipleChoiceStyle = StyleSheet.create(
    {

        title: {
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "stretch"
        },

        optionsContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            flex: 1,
            justifyContent: "space-between",
            alignContent: "space-between"
        },

        optionContainer: {
            borderWidth: 2,
            borderColor: "Lightgrey",
            borderRadius: 10,
            borderBottomWidth: 4,

            width: '48%',
            height: '48%',
            alignItems: "center",
            padding: 10
        },

        optionImage: {
            width: "100%",
            flex: 1,
            resizeMode: "contain"
        },
    })