import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Toolbar = () => {
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity>
        <Ionicons name="ios-menu" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="ios-search" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#8C52FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingTop: 20, // adiciona um espaço para não sobrepor o conteúdo principal
  },
});

export default Toolbar;
