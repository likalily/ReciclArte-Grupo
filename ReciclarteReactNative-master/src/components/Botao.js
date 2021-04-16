import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Botao(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.container}>

      <Text style={styles.title}>{props.name}</Text>

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    backgroundColor: '#FFF',
    height: 30,
    width: 200,
    elevation: 3,
    padding: 10,
    borderRadius: 10,
    paddingVertical:1,
    marginRight: 30,
    marginLeft: 75,
    marginBottom: 1,
  },
  title:{
    fontFamily: 'Montserrat_700Bold',
    fontSize:14,
    color: '#4f4a4a'
  }
});