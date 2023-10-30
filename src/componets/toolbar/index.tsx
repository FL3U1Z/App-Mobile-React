import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { styles } from "./styles";
import { BlurView } from "@react-native-community/blur";


const Index = () => {
  const [selectedIcon, setSelectedIcon] = useState("home");

  function changeScrens(iconName : string) {
    console.log("Você clicou no botão de adicionar");
    setSelectedIcon(iconName);
  }

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <TouchableOpacity style={styles.button} onPress={() => changeScrens("bar-graph")}>
          <EntypoIcon name="bar-graph" style={selectedIcon === "bar-graph" ? styles.selectedIcon : styles.icon}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeScrens("home")}>
          <EntypoIcon name="home" style={selectedIcon === "home" ? styles.selectedIcon : styles.icon}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeScrens("circle-with-plus")}>
          <EntypoIcon name="circle-with-plus" style={selectedIcon === "circle-with-plus" ? styles.selectedIcon : styles.icon}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeScrens("credit-card")}>
          <EntypoIcon name="credit-card" style={selectedIcon === "credit-card" ? styles.selectedIcon : styles.icon}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeScrens("swap")}>
          <EntypoIcon name="swap" style={selectedIcon === "swap" ? styles.selectedIcon : styles.icon}></EntypoIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
