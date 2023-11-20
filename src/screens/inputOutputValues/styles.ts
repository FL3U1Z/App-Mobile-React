import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  rowContainer: {
    justifyContent: 'space-between', // Alinha os ícones nos extremos
    flexDirection: 'row',
    alignItems: 'center', // Centraliza verticalmente
  },
  speceRowNBetWeen: {
    flexDirection: "row",
  },
  speceRow: {
    padding: 18,
    marginLeft: -10,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  textMid: {
    color: "#4F4E4E",
    fontSize: 16,
  },
  textBig: {
    color: "#4F4E4E",
    fontSize: 24,
  },
  textMidB: {
    color: "#4F4E4E",
    fontSize: 16,
    fontWeight: 'bold',
  },
  textBigB: {
    color: "#4F4E4E",
    fontWeight: 'bold',
    fontSize: 24,
  },

  separator1: {
    marginTop: 40,
    marginBottom: 40,
    paddin: -24,
    height: 2, // Altura da barra
    width: "100%",
    backgroundColor: '#E6E6E6', // Cor da barra
  },
  arrowIconRight: {
    marginTop: -5,
    fontSize: 30,
    color: "#505050"
  },



});
