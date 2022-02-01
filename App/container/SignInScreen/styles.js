import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    safeViewTop: {
        backgroundColor: "#312F57",
        flex: 0,
    },

    container: {
        flex: 1,
        backgroundColor: "#312F57"
    },

    signinView: {
        marginTop: 35,
        marginVertical: 20
    },

    textInputView: {
        width: width - 30,
        height: 55,
        backgroundColor: "#F2F2F2",
        borderRadius: 25,
        justifyContent: "center",
        paddingHorizontal: 20
    },

    textInputStyle: {
        color: "#7F7F7F",
        fontSize: 14
    },

    passwordView: {
        marginTop: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },


    signInButton: {
        width: width - 30,
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        marginTop: 18,
        borderColor: "#312F57",
        borderWidth: 2,
        borderRadius: 25
    },

    signInText: {
        color: "#312F57",
        fontSize: 16,
        fontWeight: "700"
    },


    errorText: {
        marginHorizontal: 15,
        color: "#ED1B2E",
        padding: 4,
        fontSize: 11,
    },
    activityIndicator: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
    },

    loginError: {
        marginHorizontal: 15,
        color: "#ED1B2E",
        padding: 4,
        fontSize: 15,
    },

})

export default styles;