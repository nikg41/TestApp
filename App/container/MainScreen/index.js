import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, ActivityIndicator, BackHandler, FlatList, Keyboard } from "react-native";
import styles from "./styles";
import AndroidStatusBar from "../../components/AndroidStatusBar";
import { SearchBar } from "react-native-elements";
import axios from "axios";
import { isEmpty } from "ramda";
const MainScreen = (props) => {
    const [serachText, setSearchText] = useState("");
    const [drugsData, setDrugsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showData, setShowData] = useState([])
    const getData = async () => {
        setIsLoading(true)
        try {
            let response = await axios({
                method: 'post',
                url: "http://182.76.237.238/~teammaxtra/help_application/public/api/drugss",
                headers: {},
                data: {
                    "offset": 0,
                }
            });
            let data = await response.data;
            if (data.status === 0) {
                setDrugsData([])
                setShowData([])
            } else {
                setDrugsData(data.data);
                setShowData(data.data)
            }
        } catch (error) {
            // setLoginError(error.message);
        }
        setIsLoading(false)
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => { return true; });
        getData();
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", () => { return true; });
        };
    }, []);

    const filterData = () => {
        let newData = drugsData.filter(drug => drug.drug_name.includes(serachText.toLowerCase()));
        setShowData(newData)
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            Keyboard.dismiss();
            if (!isEmpty(serachText)) {

                filterData();
            } else {
                setShowData(drugsData)
            }
        }, 2000)

        return () => clearTimeout(delayDebounceFn)
    }, [serachText]);

    const capitalize = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const renderDrugData = (drug) => {
        return <View style={{ marginVertical: 6, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
                <Text style={styles.drugName}>{capitalize(drug.drug_name)}</Text>
                <Text style={styles.mfdText}>{`Manufactured By:- ${drug.drug_company_name}`}</Text>
                <Text style={styles.mfdText}>{`Manufacturing Date:- ${drug.manufacturing_date}`}</Text>
                <Text style={styles.mfdText}>{`Expiry Date:- ${drug.expiry_date}`}</Text>
            </View>
            <View>
                <Text style={styles.drugName}>{`Rs. ${drug.price_per_piece}`}</Text>
                <Text style={[styles.mfdText, { alignSelf: "flex-end" }]}>{`(Rs. ${drug.price_per_piece}/item)`}</Text>
            </View>
        </View>
    }

    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <View style={styles.mainView}>
                <SearchBar
                    containerStyle={{ borderRadius: 20, height: 40, padding: 0 }}
                    inputContainerStyle={{ borderRadius: 20, height: 40, margin: 0, marginTop: -1.25 }}
                    placeholder={"Filter Drugs"}
                    value={serachText}
                    onChangeText={value => setSearchText(value)}
                />
                <View style={{ marginVertical: 20 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={showData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => renderDrugData(item)}
                    />
                </View>
            </View>
            {isEmpty(showData) && !isLoading &&
                <View style={styles.activityIndicator}>
                    <Text style={styles.drugName}>{"Data not found"}</Text>
                </View>}
            {isLoading ? (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size="large" color={"#312F57"} />
                </View>
            ) : null}
        </SafeAreaView>
    </React.Fragment>
};

export default MainScreen;
