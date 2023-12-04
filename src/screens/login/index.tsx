import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./styles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { api } from "../../lib/axios";
import React, { useState } from "react";


export function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/signIn', { email, password });
      console.log(response)
      if (response.data.authenticated) {
        navigation.navigate("home");
      } else {
        // Trate o caso em que a autenticação falhou
        alert('Login falhou. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
    }
  };

  const handleGoSiginPage = () => {
    navigation.navigate("singin")
  };
  const handleGoHomePage = () => {
    navigation.navigate("home")
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
        >Faça seu Login!
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inpunt}
          placeholder="E-mail"
          placeholderTextColor='#6B6B6B'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inpunt}
          placeholder="Senha"
          placeholderTextColor='#6B6B6B'
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        onPress={handleGoSiginPage}
      >
        <View style={styles.speceRow}>

          <Text style={styles.textMid}
          >Cadastre-se
          </Text>
          <Icon name="chevron-right" style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.login}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.direitos}>Todos os direitos reservados @2023</Text>
    </View>
  );
}
