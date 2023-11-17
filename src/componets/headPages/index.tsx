import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tollbar from "../../componets/toolbar"
import { Expenses } from "../../componets/expenses";
import { ReceiveBills } from "../../componets/receiveBills";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Image } from "expo-image";
import { CardView } from "../../componets/cardView/index"

export function HeadPages() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Icon name="chevron-left" style={styles.arrowIconLeft} />
                    <Text style={styles.textName}
                    >Entradas e saídas
                    </Text>
                    <Image
                            style={styles.icon}
                            contentFit="cover"
                            source={require("../../../assets/icon.png")}
                        />
                </View>
            </View>
        </>
    )
} 
