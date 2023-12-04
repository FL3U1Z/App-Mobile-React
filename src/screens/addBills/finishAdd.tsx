import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CardData {
  category: string; // Troque para o tipo de dados correto
  description: number; // Troque para o tipo de dados correto
  day: number; // Troque para o tipo de dados correto
  month: number; // Troque para o tipo de dados correto
  year: string; // Troque para o tipo de dados correto
  value: string
}

export function AddBillsF() {
  const navigation = useNavigation();
  const route = useRoute();
  const { cardData } = route.params as { cardData: CardData };

  const handleGoBills = () => {
    navigation.navigate("home");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const {
    category,
    description,
    day,
    month,
    year,
    value
  } = cardData;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleGoBack}
        >
          <View style={styles.marginTB}>
            <Icon name="close" style={styles.closeIcon} />
          </View>
        </TouchableOpacity>
        <View style={styles.marginTL}>
          <Text style={styles.H1}>
            Despesa Adicionada com sucesso!
          </Text>
          <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Categoria
            </Text>
            <Text style={styles.H1}>{category}</Text>
          </View>
          <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Descrição
            </Text>
            <Text style={styles.H1}>{description}</Text>
          </View>
          <View style={[styles.rowContainer]}>
            <View style={styles.maginT}>
              <Text style={styles.sizeMid}>
                Data
              </Text>
              <Text style={styles.H1}>{day}/{month}/{year}</Text>
            </View>
          </View>
          <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Valor
            </Text>
            <Text style={styles.H1}>{value}</Text>
          </View>
        </View>

        <View style={styles.MaginT}>
          <TouchableOpacity
            style={styles.roundedButton}
            onPress={handleGoBills}
          >
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
