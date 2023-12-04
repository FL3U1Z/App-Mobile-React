import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SelectList } from 'react-native-dropdown-select-list';

export function AddCard() {
  const navigation = useNavigation();
  const [selectedFlag, setSelectedFlag] = useState<null>(null);
  const [selected, setSelected] = React.useState("");
  const [limit, setLimit] = useState<string>("");
  const [selectedFechamento, setSelectedFechamento] = useState<string>("");
  const [selectedVencimento, setSelectedVencimento] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");

  const dataFlag = [
    { key: '1', value: 'Master Card' },
    { key: '2', value: 'Visa' },
    { key: '3', value: 'Elo' },
    { key: '4', value: 'Sodexo', disabled: true },
  ];
  const days = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4' },
    { key: '5', value: '5' },
    { key: '6', value: '6' },
    { key: '7', value: '7' },
    { key: '8', value: '8' },
    { key: '9', value: '9' },
    { key: '10', value: '10' },
    { key: '11', value: '11' },
    { key: '12', value: '12' },
    { key: '13', value: '13' },
    { key: '14', value: '14' },
    { key: '15', value: '15' },
    { key: '16', value: '16' },
    { key: '17', value: '17' },
    { key: '18', value: '18' },
    { key: '19', value: '19' },
    { key: '20', value: '20' },
    { key: '21', value: '21' },
    { key: '22', value: '22' },
    { key: '23', value: '23' },
    { key: '24', value: '24' },
    { key: '25', value: '25' },
    { key: '26', value: '26' },
    { key: '27', value: '27' },
    { key: '28', value: '28' },
    { key: '29', value: '29' },
    { key: '30', value: '30' },
    { key: '31', value: '31' },
  ];

  const handleGoAddCardF = () => {
    const cardData = {
      selectedFlag,
      limit,
      selectedFechamento,
      selectedVencimento,
      cardName,
    };
    navigation.navigate("addCardF", { cardData });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

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
            <SelectList
              setSelected={(val: any) => setSelectedFlag(val)}
              data={dataFlag}
              search={false}
              save="value"
              placeholder="Selecione a bandeira"
              boxStyles={{ width: "85%" }}
              dropdownStyles={{ width: "85%" }} // Ajuste a largura conforme necessário
            />
          </View>
          <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Limite
            </Text>
            <View style={styles.form}>
              <TextInput
                style={styles.inpunt}
                placeholder="Limite"
                placeholderTextColor='#6B6B6B'
                value={limit}
                onChangeText={(number) => setLimit(number)}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={[styles.rowContainer]}>
            <View style={styles.maginT}>
              <Text style={styles.sizeMid}>
                Dia de fechamento
              </Text>
              <SelectList
                setSelected={(val: any) => setSelectedFechamento(val)}
                data={days}
                search={false}
                save="value"
                defaultOption={{ key: '1', value: '1' }}
                boxStyles={{ width: "40%" }}
                dropdownStyles={{ width: "40%" }} // Ajuste a largura conforme necessário
              />
            </View>
            <View style={[styles.maginT, { marginLeft: -30 }]}>
              <Text style={styles.sizeMid}>
                Dia de Vencimento
              </Text>
              <SelectList
                setSelected={(val: any) => setSelectedVencimento(val)}
                data={days}
                search={false}
                save="value"
                defaultOption={{ key: '1', value: '1' }}
                boxStyles={{ width: "40%" }}
                dropdownStyles={{ width: "40%" }} // Ajuste a largura conforme necessário
              />
            </View>
          </View>
          <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Nome do cartão
            </Text>
            <View style={styles.form}>
              <TextInput
                style={styles.inpunt}
                placeholder="Nome do cartão"
                placeholderTextColor='#6B6B6B'
                value={cardName}
                onChangeText={(text) => setCardName(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.MaginT}>
          <TouchableOpacity
            style={styles.roundedButton}
            onPress={handleGoAddCardF}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
