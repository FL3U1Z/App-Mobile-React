import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 34,
        backgroundColor: "#fff"
    },
    arrowIconLeft: {
        fontSize: 40,
        color: "#505050"
    },
  rowContainer: {
    justifyContent: 'space-between', // Alinha os ícones nos extremos
    flexDirection: 'row',
    alignItems: 'center', // Centraliza verticalmente
  },
  textName:{
    color: "#4F4E4E",
    fontSize: 16,
    fontWeight: "400",
  },
  
  icon: {
    width: 44, // Defina o tamanho da imagem aqui
    height: 44, // Defina o tamanho da imagem aqui
    marginLeft: 10,
  },
});
