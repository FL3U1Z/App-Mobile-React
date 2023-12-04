import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SelectList } from 'react-native-dropdown-select-list';

export function AddRevenue() {
  const navigation = useNavigation();
  const category= "receita"
  const [description, setDescription] = React.useState("");
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [value, setValue] = useState<string>("");

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
  const months = [
    { key: '1', value: 'Janeiro' },
    { key: '2', value: 'Fevereiro' },
    { key: '3', value: 'Março' },
    { key: '4', value: 'Abril' },
    { key: '5', value: 'Maio' },
    { key: '6', value: 'Junho' },
    { key: '7', value: 'Julho' },
    { key: '8', value: 'Agosto' },
    { key: '9', value: 'Setembro' },
    { key: '10', value: 'Outubro' },
    { key: '11', value: 'Novembro' },
    { key: '12', value: 'Dezembro' },
  ];
  const years = [
    { key: '1', value: '2001' },
    { key: '2', value: '2002' },
    { key: '3', value: '2003' },
    { key: '4', value: '2004' },
    { key: '5', value: '2005' },
    { key: '6', value: '2006' },
    { key: '7', value: '2007' },
    { key: '8', value: '2008' },
    { key: '9', value: '2009' },
    { key: '10', value: '2010' },
    { key: '11', value: '2011' },
    { key: '12', value: '2012' },
    { key: '13', value: '2013' },
    { key: '14', value: '2014' },
    { key: '15', value: '2015' },
    { key: '16', value: '2016' },
    { key: '17', value: '2017' },
    { key: '18', value: '2018' },
    { key: '19', value: '2019' },
    { key: '20', value: '2020' },
    { key: '21', value: '2021' },
    { key: '22', value: '2022' },
    { key: '23', value: '2023' },
    { key: '24', value: '2024' },
    { key: '25', value: '2025' },
    { key: '26', value: '2026' },
    { key: '27', value: '2027' },
    { key: '28', value: '2028' },
    { key: '29', value: '2029' },
    { key: '30', value: '2030' },
    { key: '31', value: '2031' },
  ];

  const handleGoAddRevenueF = () => {
    const cardData = {
      category,
      description,
      day,
      month,
      year,
      value
    };
    navigation.navigate("addRevenueF", { cardData });
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
            Adicionar Receita
          </Text>
          {/* <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Categoria
            </Text>
            <SelectList
              setSelected={(val: any) => setCategory(val)}
              data={categories}
              search={false}
              save="value"
              placeholder="Selecione a Categoria"
              boxStyles={{ width: "85%" }}
              dropdownStyles={{ width: "85%" }} // Ajuste a largura conforme necessário
            />
          </View> */}
          <View style={styles.maginT}>
            <Text style={styles.sizeMid}>
              Descrição
            </Text>
            <View style={styles.form}>
              <TextInput
                style={styles.inpunt}
                placeholder="Descrição"
                placeholderTextColor='#6B6B6B'
                value={description}
                onChangeText={(text) => setDescription(text)}
              />
            </View>
          </View>
          <View style={[styles.rowContainer]}>
            <View style={styles.maginT}>
              <Text style={styles.sizeMid}>
                Data
              </Text>
              <View style={[styles.speceRowNBetWeen]}>
                <SelectList
                  setSelected={(val: any) => setDay(val)}
                  data={days}
                  search={false}
                  save="value"
                  defaultOption={{ key: '1', value: '1' }}
                  boxStyles={{ width: "33%" , marginRight: 60  }}
                  dropdownStyles={{ width: "33%", }}
                />
                <SelectList
                  setSelected={(val: any) => setMonth(val)}
                  data={months}
                  search={false}
                  save="value"
                  defaultOption={{ key: '1', value: 'Janeiro' }}
                  boxStyles={{ width: "55%", marginLeft: -120}}
                  dropdownStyles={{ width: "55%", marginLeft: -120 }}
                />
              </View>
            </View>

          </View>
          <SelectList
                  setSelected={(val: any) => setYear(val)}
                  data={years}
                  search={false}
                  save="value"
                  defaultOption={{ key: '23', value: '2023' }}
                  boxStyles={{ width: "53%", marginTop: 30 }}
                  dropdownStyles={{ width: "53%" }}
                />
          <View style={[styles.maginT,]}>
            <Text style={styles.sizeMid}>
              Valor
            </Text>
            <View style={styles.form}>
              <TextInput
                style={styles.inpunt}
                placeholder="Valor"
                placeholderTextColor='#6B6B6B'
                value={value}
                onChangeText={(text) => setValue(text)}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View style={styles.MaginT}>
          <TouchableOpacity
            style={styles.roundedButton}
            onPress={handleGoAddRevenueF}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
