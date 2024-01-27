import { StyleSheet } from "react-native";

export const buttonStyle = StyleSheet.create({
    container: {
        backgroundColor: "#58CC02",
        height: 50,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,

        borderRadius: 10,
        borderBottomWidth: 5,
        borderColor: "#57A600"
    },
    text: {
        fontSize: 20,
        color: "white",
        fontWeight:"bold",
        borderBottomColor:"white",
        borderBottomWidth:2
    },
    disabledContainer:{
        backgroundColor:"gray",
        borderBottomColor:"black",
        height: 50,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,

        borderRadius: 10,
        borderBottomWidth: 5,
    }
})