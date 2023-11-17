import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "./styles"
import FeatherIcon from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Item {
    key: string;
    nameCard: string;
    valueExpense: string;
}

export function CardView() {
    const data = [
        { key: '1', nameCard: 'Cartão nubank', valueExpense: '200' },
        { key: '2', nameCard: 'Cartão paypal', valueExpense: '450' },
        { key: '3', nameCard: 'Cartão picpay', valueExpense: '120' },
        // Add more data as needed
    ];
    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.notSpeceRowNMargin}>
            <View style={styles.notSpeceRowM}>
                <View style={styles.circleBackground}>
                    <FeatherIcon name="credit-card" style={styles.iconUser}></FeatherIcon>
                </View>
                <View style={styles.spaceCircle}>
                    <Text style={styles.sizeMidB}>{item.nameCard}</Text>

                    <View style={styles.notSpeceRow}>
                        <Text style={styles.sizeMid}>Fatura Atual</Text>
                        <Text style={[styles.sizeSmall, styles.colorExpense, styles.marginValueExpense]}>R$ {item.valueExpense}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <>
            <View style={styles.speceRow}>
                <Text style={styles.H1}
                >Cartões de crédito
                </Text>
                <Icon name="chevron-right" style={styles.arrowIcon} />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />

        </>
    )
} 
