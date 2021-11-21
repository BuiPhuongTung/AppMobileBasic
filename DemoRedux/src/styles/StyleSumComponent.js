import { StyleSheet } from "react-native";
const styleSumComponent = StyleSheet.create({
    num: {
        backgroundColor: '#a6a2a2',
        color: 'black',
        fontSize: 18,
    },
    container:{
        flexDirection: 'row'
    },
    add:{
        fontSize: 30,
        justifyContent: 'center',
        color: 'black',
        marginRight: 20,
        marginLeft: 20,
    },
    btnAdd:{
        marginTop: 20,
        backgroundColor: '#a6a2a2',
        alignItems: 'center',
        borderRadius: 10,
        height: 30,
        justifyContent: 'center'
    },
    text:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#a6a2a2',
    },
});
export default styleSumComponent;