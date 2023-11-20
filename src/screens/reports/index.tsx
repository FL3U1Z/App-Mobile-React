import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { HeadPages } from '../../componets/headPages';
import { MonthsView } from '../../componets/months';

interface Item {
    key: string;
    nameMonth: string;
}

export function Reports() {
    const navigation = useNavigation();

    const dynamicData = [
        { key: '1', date: '01/11/2023', input: 'R$200', output: 'R$0,00', result: 'R$200 ' },
        { key: '2', date: '02/11/2023', input: 'R$120', output: 'R$23', result: 'R$97 ' },
        { key: '3', date: '04/11/2023', input: 'R$0', output: 'R$44', result: '-R$44 ' },
        { key: '4', date: '05/11/2023', input: 'R$912', output: 'R$212', result: 'R$700 ' },
        { key: '5', date: '06/11/2023', input: 'R$245', output: 'R$123', result: 'R$122 ' },
        { key: '6', date: '07/11/2023', input: 'R$53', output: 'R$675', result: 'R$622 ' },
        { key: '7', date: '08/11/2023', input: 'R$20', output: 'R$22', result: '-R$2 ' },
        { key: '8', date: '09/11/2023', input: 'R$11', output: 'R$561', result: '-R$550 ' },
        { key: '9', date: '10/11/2023', input: 'R$14,56', output: 'R$125', result: '-R$111,56 ' },
        { key: '10', date: '11/11/2023', input: 'R$125,2', output: 'R$12', result: 'R$113,2 ' },
        { key: '11', date: '12/11/2023', input: 'R$0,00', output: 'R$244', result: '-R$244 ' },
        { key: '12', date: '13/11/2023', input: 'R$0,00', output: 'R$0,00', result: 'R$0,00 ' },
        { key: '13', date: '14/11/2023', input: 'R$0,00', output: 'R$0,00', result: 'R$0,00 ' },
        { key: '14', date: '15/11/2023', input: 'R$2', output: 'R$24', result: '-R$22 ' },
        { key: '15', date: '16/11/2023', input: 'R$21', output: 'R$24', result: '-R$3 ' },

    ];

    return (
        <View style={styles.container}>
            <HeadPages currentPage="Relatórios" />
            <MonthsView />
            <View style={styles.speceRowBills}>
                <View style={styles.speceRow}>
                    <Text style={styles.billsMonth}>Data</Text>
                </View>
                <Text style={styles.billsMonthValue}>Entradas</Text>
                <Text style={styles.billsMonthValue}>Saídas</Text>
                <Text style={styles.billsMonthValue}>Resultado</Text>
            </View>

            <ScrollView>
                {dynamicData.map((item) => (
                    <View key={item.key} style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                            <Text style={styles.billsMonth}>{item.date}</Text>
                        </View>
                        <Text style={[styles.billsMonthValue, styles.balanceValue]}>{item.input}</Text>
                        <Text style={[styles.billsMonthValue, styles.expenseValue]}>{item.output}</Text>
                        <Text style={styles.billsMonthValue}>{item.result}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
