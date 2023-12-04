import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

interface Item {
  key: string;
  nameCard: string;
  valueExpense: string;
}

interface CardViewProps {
  orientation: "horizontal" | "vertical";
}

export function CardView({ orientation }: CardViewProps) {
  const navigation = useNavigation();

  const data: Item[] = [
    { key: '1', nameCard: 'Cartão nubank', valueExpense: '200' },
    { key: '2', nameCard: 'Cartão paypal', valueExpense: '450' },
    { key: '3', nameCard: 'Cartão picpay', valueExpense: '120' },

  ];

  const handleCardPress = (item: Item) => {
    // Exemplo de navegação para cardDetails
    navigation.navigate('cardDetails', { cardDetails: { key: item.key, nameCard: item.nameCard, valueExpense: item.valueExpense } });

  };

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
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
    </TouchableOpacity>
  );

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal={orientation === "horizontal"}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={orientation === "horizontal"}
      />
    </>
  );
}
