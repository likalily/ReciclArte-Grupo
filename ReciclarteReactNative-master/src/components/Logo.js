import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Logo(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.container}>
     <Image
      source={props.cover}
      style={styles.cover}
     />

     <View style={styles.content}>
      <Text style={styles.title}>{props.name}</Text>
     </View>

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    backgroundColor: '#FFF',
    height: 150,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover:{
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content:{
   flexDirection: 'row',
   alignItems: 'center',
   marginVertical: 10, 
  },
  title:{
    fontFamily: 'Montserrat_700Bold',
    fontSize:12,
    color: '#4f4a4a'
  }
});