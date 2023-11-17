import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./styles"

export function Login() {
  return (

    <View style={styles.container}>
      <Image
        source={require("../../../assets/icon.png")}
        resizeMode="contain"
        style={styles.icon}
      ></Image>
      <Text style={styles.welcome}
      >Bem Vindo!
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.inpunt}
          placeholder="E-mail"
          placeholderTextColor='#6B6B6B'
        />
      <TextInput
          style={styles.inpunt}
          placeholder="Senha"
          placeholderTextColor='#6B6B6B'
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        // onPress={() => props.navigation.navigate("Untitled1")}
        style={styles.button}
      >
        <Text style={styles.login}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.direitos}>Todos os direitos reservados @2023</Text>
    </View>
  );
}
