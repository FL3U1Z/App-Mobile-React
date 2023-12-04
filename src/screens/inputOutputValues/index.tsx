import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Expenses } from "../../componets/expenses";
import { ReceiveBills } from "../../componets/receiveBills";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Image } from "expo-image";
import { CardView } from "../../componets/cardView/index"
import { HeadPages } from "../../componets/headPages"
import { StackedBarChart } from 'react-native-chart-kit';
import { useNavigation } from "@react-navigation/native";

export function InputOutput() {
    const navigation = useNavigation();
    const handleGoReleasePage = () => {
        navigation.navigate("release")
    };
    const data = {
        labels: [''],
        legend: ['Saídas', 'Entradas'],
        data: [[60.00, 40.00]],
        barColors: ['#1D9000', '#FF6262',],
    };
    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 2,
        color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
        },
        options: {
            legend: {
                display: false
            }
        },
        propsForBackgroundLines: { strokeWidth: 0 } //strokeWidth: 0 remove as linhas do fundo
    };
    return (
        <>
            <View style={[styles.container]}>
                <HeadPages currentPage="Entradas e saídas" />
                <View style={[styles.container]}>
                    <View style={{ width: 200 }}>
                        <View style={styles.speceRow}>
                            <Text style={styles.textMidB}
                            >Saídas
                            </Text>
                            <Text style={[styles.textMid, { justifyContent: 'flex-end' }]}>20,26%</Text>

                        </View>

                        <View style={[styles.speceRow, { marginTop: -15 }]}>
                            <Text style={styles.textMidB}
                            >Entradas
                            </Text>
                            <Text style={styles.textMid}>80,74%</Text>
                        </View>
                        <StackedBarChart
                            style={{ marginVertical: 8, borderRadius: 16, position: "absolute", marginLeft: 220 }}
                            data={data}
                            width={100}
                            height={250}
                            chartConfig={chartConfig}
                            hideLegend={true}
                            withHorizontalLabels={false}
                            withVerticalLabels={false}
                        />
                        <Text style={[styles.textBigB, { marginTop: 45 }]}
                        >Saldo Atual
                        </Text>
                        <Text style={styles.textBigB}>R$2703,00</Text>
                    </View>



                    <View style={styles.separator1}></View>



                    <TouchableOpacity 
                    onPress={handleGoReleasePage}
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }} >
                        <Text style={styles.textMid}
                        >Saldo e Saidas
                        </Text>
                        <Icon name="chevron-right" style={styles.arrowIconRight} />
                    </TouchableOpacity>


                    <View style={[styles.speceRow, { marginTop: 15 }]}>
                        <Text style={styles.textMidB}
                        >Entradas
                        </Text>
                        <Text style={styles.textMid}>R$ 3390,00</Text>
                    </View>
                    <View style={styles.speceRow}>
                        <Text style={styles.textMidB}
                        >Saídas
                        </Text>
                        <Text style={[styles.textMid, { justifyContent: 'flex-end' }]}>R$ 687,00</Text>

                    </View>
                    <View style={[styles.speceRow, { marginTop: 20 }]}>
                        <Text style={styles.textMidB}
                        >Resultado
                        </Text>
                        <Text style={[styles.textBigB, { justifyContent: 'flex-end', marginTop: -5 }]}>R$ 2703,00</Text>

                    </View>
                </View>
            </View>
        </>
    )
} 
