import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, Button, } from "react-native"
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
import { MonthsView } from "../../componets/months";

interface Item {
    key: string;
    nameMonth: string;
}

export function Release() {
    const navigation = useNavigation();
    const handleGoReportsPage = () => {
        navigation.navigate("reports")
    };
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const monthActual = new Date();
    const monthName = months[monthActual.getMonth()];
    const getIconByCategory = (category: any) => {
        switch (category) {
            case 'Carro':
                return require("../../../assets/icon-car.png");
            case 'Mercado':
                return require("../../../assets/icon-cart-market.png");
            case 'Home':
                return require("../../../assets/icon-home.png");
            case 'Online':
                return require("../../../assets/icon-online-shopping.png");
            case 'Comida':
                return require("../../../assets/icon-food.png");
            case 'Receita':
                return require("../../../assets/icon-recieve-bills.png");
            case 'Roupa':
                return require("../../../assets/icon-roupas.png");
            case 'Recorrente':
                return require("../../../assets/icon-recurring-expenses.png");
            case 'Shopping':
                return require("../../../assets/icon-shopping.png");
            default:
                return require("../../../assets/icon-nubank.png");
        }
    };

    const dynamicData = [
        { key: '1', category: 'Receita', type: 'Despesa', value: 'R$912,50 ' },
        { key: '2', category: 'Carro', type: 'Despesa', value: 'R$-41,99' },
        { key: '3', category: 'Online', type: 'Despesa', value: 'R$1.087,50' },
        { key: '4', category: 'Comida', type: 'Despesa', value: 'R$1.286,35 ' },
        { key: '5', category: 'Receita', type: 'Despesa', value: 'R$-67,00' },
        { key: '6', category: 'Shopping', type: 'Despesa', value: 'R$-378,00' },
        { key: '7', category: 'Mercado', type: 'Despesa', value: 'R$103,65' },
    ];
    const data: Item[] = [
        { key: '1', nameMonth: 'Janeiro' },
        { key: '2', nameMonth: 'Fevereiro' },
        { key: '3', nameMonth: 'Março' },
        { key: '4', nameMonth: 'Abril' },
        { key: '5', nameMonth: 'Maio' },
        { key: '6', nameMonth: 'Junho' },
        { key: '7', nameMonth: 'Julho' },
        { key: '8', nameMonth: 'Agosto' },
        { key: '9', nameMonth: 'Setembro' },
        { key: '10', nameMonth: 'Outubro' },
        { key: '11', nameMonth: 'Novembro' },
        { key: '12', nameMonth: 'Dezembro' },
    ];

    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.notSpeceRowM}>
            <View style={[styles.borderMonth, { backgroundColor: item.nameMonth === monthName ? '#695CFE' : '#4F4E4E' }]}>
                <Text style={[styles.sizeMidB]}>{item.nameMonth}</Text>
            </View>
        </View>
    );
    return (
        <>
            <View style={styles.container}>
                <HeadPages currentPage="Lançamentos" />

                <View style={styles.monthsContainer}>
                    <Icon name="chevron-left" style={styles.arrowIcon} />

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.key}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        snapToAlignment="center"
                        decelerationRate="fast"
                    />

                    <Icon name="chevron-right" style={styles.arrowIcon} />
                </View>

                <ScrollView>
                    {dynamicData.map((item) => (
                        <View key={item.key} style={styles.speceRowBills}>
                            <View style={styles.speceRow}>
                                <Image
                                    style={styles.iconBills}
                                    contentFit="cover"
                                    source={getIconByCategory(item.category)}
                                />
                                <Text style={styles.billsMonth}>{item.category}</Text>
                            </View>
                            <Text style={styles.billsMonthValue}>{item.type}</Text>
                            <Text style={styles.billsMonthValue}>{item.value}</Text>
                        </View>
                    ))}

                </ScrollView>

                <View style={[styles.borderMonth, styles.centerItems]}>
                    <TouchableOpacity
                        onPress={handleGoReportsPage}
                        style={[styles.borderMonth]}>
                        <Text style={[styles.sizeMidB]}>Relatórios</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
} 
