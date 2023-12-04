import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CardData {
  selectedFlag: string; // Troque para o tipo de dados correto
  limit: number; // Troque para o tipo de dados correto
  selectedFechamento: number; // Troque para o tipo de dados correto
  selectedVencimento: number; // Troque para o tipo de dados correto
  cardName: string; // Troque para o tipo de dados correto
}

export function AddCardF() {
  const navigation = useNavigation();
  const route = useRoute();
  const { cardData } = route.params as { cardData: CardData };

  const handleGoCard = () => {
    navigation.navigate("home");
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const {
    selectedFlag,
    limit,
    selectedFechamento,
    selectedVencimento,
    cardName,
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
            Adicionar Cartão
          </Text>
          <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Bandeira do Cartão
            </Text>
            <Text style={styles.H1}>{selectedFlag}</Text>
          </View>
          <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Limite
            </Text>
            <Text style={styles.H1}>{limit}</Text>
          </View>
          <View style={[styles.rowContainer]}>
            <View style={styles.maginT}>
              <Text style={styles.sizeMid}>
                Dia de fechamento
              </Text>
              <Text style={styles.H1}>{selectedFechamento}</Text>
            </View>
            <View style={[styles.maginT, { marginLeft: -30 }]}>
              <Text style={styles.sizeMid}>
                Dia de Vencimento
              </Text>
              <Text style={styles.H1}>{selectedVencimento}</Text>
            </View>
          </View>
          <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Nome do cartão
            </Text>
            <Text style={styles.H1}>{cardName}</Text>
          </View>
        </View>

        <View style={styles.MaginT}>
          <TouchableOpacity
            style={styles.roundedButton}
            onPress={handleGoCard}
          >
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
