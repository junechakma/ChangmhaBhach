import { StyleSheet } from "react-native";

export default Style = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop:60
    },

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
        justifyContent:"space-between",
        alignContent:"space-between"
    },

    optionContainer: {
        borderWidth: 2,
        borderColor: "Lightgrey",
        borderRadius: 10,
        borderBottomWidth: 4,

        width: '48%',
        height: '48%',
        alignItems: "center",
        padding:10
    },

    optionImage: {
        width: "100%",
        flex:1,
        resizeMode:"contain"
    },
    
    optionText: {

    }
})