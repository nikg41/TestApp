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
})

export default styles;