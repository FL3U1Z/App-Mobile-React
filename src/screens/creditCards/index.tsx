import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { CardView } from "../../componets/cardView/index"
import { HeadPages } from "../../componets/headPages"
import { useNavigation } from "@react-navigation/native";


export function CreditCards() {
  const navigation = useNavigation();

  const handleGoAddCard = () => {
    navigation.navigate("addCard")
};

  return (
    <>
      <View style={styles.container}>
        <HeadPages currentPage="Cartões de Crédito" />
        <ScrollView>
          <View style={styles.marginValueExpense}>
            <CardView 
            orientation="vertical" 
            />
          </View>
          <View style={[styles.MaginT, styles.speceRow]}>
            <TouchableOpacity
              style={styles.roundedButton}
              onPress={handleGoAddCard}
            >
              <Text style={styles.buttonText}>Adicionar Cartão</Text>
            </TouchableOpacity>
            <View style={styles.boxTotal}>
              <Text style={styles.textBigB}> Gasto Total  </Text>
              <Text style={styles.textBigB}> R$600,00</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
