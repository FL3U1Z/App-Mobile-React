import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

interface Item {
  key: string;
  nameMonth: string;
}

export function MonthsView() {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const monthActual = new Date();
  const monthName = months[monthActual.getMonth()];

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
  );
}