import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    safeViewTop: {
        backgroundColor: "#8684B9",
        flex: 0,
        height: Platform.OS === "ios" ? 30 : 0
    },
    container: {
        flex: 1,
        backgroundColor: "#8684B9",
    },
    mainView: {
        marginHorizontal: 15,
        marginTop: 15
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
    drugName: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "600"
    },

    mfdText: {
        color: "#fff",
        fontSize: 12,
    }

})

export default styles;