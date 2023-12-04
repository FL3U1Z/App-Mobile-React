import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView, Button, } from "react-native"
import { styles } from "./styles"
import { RouteProp } from '@react-navigation/native';
import FeatherIcon from "react-native-vector-icons/Feather";
import { StackNavigationProp } from '@react-navigation/stack';

import { Image } from "expo-image";
import { CardView } from "../../componets/cardView/index"
import { HeadPages } from "../../componets/headPages"
import { StackedBarChart } from 'react-native-chart-kit';
import { useNavigation } from "@react-navigation/native";
import { MonthsView } from "../../componets/months";

// Importe o tipo Item ou defina-o aqui
interface Item {
    key: string;
    nameCard: string;
    valueExpense: string;
}

type RootStackParamList = {
    cardDetails: { cardDetails: Item };
    // Adicione outros nomes de telas e parâmetros conforme necessário
};

type CardDetailsScreenRouteProp = RouteProp<RootStackParamList, 'cardDetails'>;

type CardDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'cardDetails'>;

type Props = {
    route: CardDetailsScreenRouteProp;
    navigation: CardDetailsScreenNavigationProp;
};

const CardDetailsScreen: React.FC<Props> = ({ route }) => {
    const { cardDetails } = route.params;

    // Agora você pode acessar as propriedades do cardDetails
    const { nameCard, valueExpense } = cardDetails;

    return (
        <View>
            <Text>Detalhes do Cartão</Text>
            <Text>Nome do Cartão: {nameCard}</Text>
            <Text>Valor da Despesa: {valueExpense}</Text>
            {/* Adicione mais informações conforme necessário */}
        </View>
    );
};

export function CardDatails({ route }: Props) {
    const { cardDetails } = route.params;
    const { nameCard, valueExpense } = cardDetails;
    
    const dynamicData = [
        { key: '1', category: 'Padaria', value: 'R$912,50 ' },
        { key: '2', category: 'Posto Relevancia', value: 'R$41,99' },
        { key: '3', category: 'Shein', value: 'R$1.087,50' },
        { key: '4', category: 'Tablet S6', value: 'R$1.286,35 ' },
        { key: '5', category: 'Good Bom', value: 'R$67,00' },
        { key: '6', category: 'C&A', value: 'R$378,00' },
        { key: '7', category: 'Arena Atacado', value: 'R$103,65' },
    ];
    
    return (
        <>
            <View style={styles.container}>
                <HeadPages currentPage="Gastos  Cartão" />
                <ScrollView>
                    <View style={styles.maginT}>
                        <View style={styles.notSpeceRowNMargin}>
                            <View style={styles.notSpeceRowM}>
                                <View style={styles.circleBackground}>
                                    <FeatherIcon name="credit-card" style={styles.iconUser}></FeatherIcon>
                                </View>
                                <View style={styles.spaceCircle}>
                                    <Text style={styles.sizeMidB}>{nameCard}</Text>
                                    <View style={styles.notSpeceRow}>
                                        <Text style={styles.sizeMid}>Fatura Atual</Text>
                                        <Text style={[styles.sizeSmall, styles.colorExpense, styles.marginValueExpense]}>R$ {valueExpense}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.notSpeceRowM}>
                            <Text style={styles.sizeMid}>Limite Disponível</Text>
                            <Text style={[styles.sizeMidB, styles.marginValueExpense]}>R$ 0,00</Text>
                        </View>
                    </View>
                    <View style={styles.separator1}></View>
                    {dynamicData.map((item) => (
                        <View key={item.key} style={styles.speceRowBills}>
                            <View style={styles.speceRow}>
                                <View style={styles.circleBackgroundList}>
                                    <FeatherIcon name="credit-card" style={styles.iconUser}></FeatherIcon>
                                </View>
                                <Text style={styles.billsMonth}>{item.category}</Text>
                            </View>
                            <Text style={[styles.billsMonthValue, { marginRight: 16, }]}>{item.value}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    );
}

