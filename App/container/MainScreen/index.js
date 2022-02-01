import React, { useState, useEffect } from "react";
import { Pressable, SafeAreaView, Text, View, TextInput, BackHandler } from "react-native";
import styles from "./styles";
import AndroidStatusBar from "../../components/AndroidStatusBar";

const MainScreen = (props) => {
    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <Text>helllo</Text>
        </SafeAreaView>
    </React.Fragment>
};

export default MainScreen;
