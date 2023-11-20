import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, Button, } from "react-native"
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
import { HeadPages } from "../../componets/headPages"
import { StackedBarChart } from 'react-native-chart-kit';
import { useNavigation } from "@react-navigation/native";
import { MonthsView } from "../../componets/months";


export function Revenue() {
    const navigation = useNavigation();
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
        { key: '1', category: 'Receita', value: 'R$912,50 ' },
        { key: '2', category: 'Receita', value: 'R$41,99' },
        { key: '3', category: 'Receita', value: 'R$1.087,50' },
        { key: '4', category: 'Receita', value: 'R$1.286,35 ' },
        { key: '5', category: 'Receita', value: 'R$67,00' },
        { key: '6', category: 'Receita', value: 'R$378,00' },
        { key: '7', category: 'Receita', value: 'R$103,65' },
    ];
    return (
        <>
          <View style={styles.container}>
            <HeadPages currentPage="Contas a Receber" />
            <Text style={[styles.textBig, { marginTop: 30 }]}>Contas a Receber</Text>
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
                  <Text style={[styles.billsMonthValue, { marginRight: 16,}]}>{item.value}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </>
      );
    }

