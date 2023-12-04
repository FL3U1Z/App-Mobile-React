import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./styles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { api } from "../../lib/axios";
import React, { useState } from "react";

export function Singin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordC, setPasswordC] = useState('');

  const navigation = useNavigation();

  const handleGoLoginPage = () => {
    navigation.navigate("login")
  };
  const handleRegister = async () => {
    try {
      if (password !== passwordC) {
        alert('As senhas não coincidem.');
        return;
      }
      const response = await api.post('auth/cadastro', { email, name, password });
      console.log(response);
      if (response) {
        alert('Cadastro bem-sucedido!');
        navigation.navigate("home");
      } else {
        // Trate o caso em que o cadastro falhou (por exemplo, e-mail já registrado)
        alert('Falha no cadastro. Verifique suas informações.');
      }
    } catch (error) {
      console.error('Erro ao tentar cadastrar:', error);
    }
  };



  return (

    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/freefinanceicon.png")}
          resizeMode="contain"
          style={styles.icon}
        ></Image>
      </View>
      <View>
        <Text style={styles.welcome}
        >Faça seu cadastro!
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inpunt}
          placeholder="Nome"
          placeholderTextColor='#6B6B6B'
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.inpunt}
          placeholder="E-mail"
          placeholderTextColor='#6B6B6B'
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.inpunt}
          placeholder="Senha"
          placeholderTextColor='#6B6B6B'
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TextInput
          style={styles.inpunt}
          placeholder="Confirmação de senha"
          placeholderTextColor='#6B6B6B'
          secureTextEntry={true}
          onChangeText={(text) => setPasswordC(text)}
          value={passwordC}
        />
      </View>
      <TouchableOpacity
        onPress={handleGoLoginPage}
      >
        <View style={styles.speceRow}>

          <Text style={styles.textMid}
          >Faça seu login!
          </Text>
          <Icon name="chevron-right" style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.login}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.direitos}>Todos os direitos reservados @2023</Text>
    </View>
  );
}
