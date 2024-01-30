import { StyleSheet } from "react-native";

export const fillInTheBlankStyle = StyleSheet.create({

    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start",
    },
    row: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginVertical: 10,
        height:70,
    },
    mascot: {
        width: "30%",
        aspectRatio: 3 / 4,
        marginRight: 10,
    },
    optionsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
    },
    blank: {
        borderBottomWidth: 2,
        borderColor: "lightgrey",
        width: 100,
    },
    text: {
        alignSelf: "flex-end",
        color:"grey",
        fontSize: 20,
        fontWeight: "bold",
    }
})