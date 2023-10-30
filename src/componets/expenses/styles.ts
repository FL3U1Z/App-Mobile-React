import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: "space-between",
        backgroundColor: '#D9D9D9',
    },
    name: {
        flex: 1,//EMPURRA O BOTÃO DE '-'
        color: '#505050',
        fontSize: 24,
        marginLeft: 16
    },
    buttonText: {
        color: '#FDFCFE',
    },
    button: {
        width: 70,
        height: 36,
        borderRadius: 5,
        backgroundColor: '#00875F',
        alignItems: 'center',
        justifyContent: 'center'
    },

})