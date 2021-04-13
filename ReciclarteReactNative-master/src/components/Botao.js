import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Botao(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.container}>
     

     <View style={styles.content}>
      <Text style={styles.title}>{props.name}</Text>

     </View>
     

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    backgroundColor: '#FFF',
    height: 10,
    width: 250,
    elevation: 3,
    borderRadius: 30,
    padding: 40,
    paddingVertical:25,
    marginRight: 30,
    marginLeft: 35,
    marginBottom: 1,
  },
  title:{
    fontFamily: 'Montserrat_700Bold',
    fontSize:12,
    color: '#4f4a4a'
  }
});