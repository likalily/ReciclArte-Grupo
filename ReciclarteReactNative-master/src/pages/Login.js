import React from 'react';
import { View, StyleSheet,  TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Logo from '../components/Logo';
import Botao from '../components/Botao';


export default function Login() {
    const navigation = useNavigation();

    return (
     
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFF' }}
     >

        <View horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 80,}}>
      <Logo
       cover={require('../assets/Logo.png')} 
      />
       </View>
        
       <View style={styles.header}>
         <View style={styles.inputArea}>
           <Feather name="user" size={24} color="black" />
           <TextInput
           placeholder="E-MAIL"
           style={styles.input}
           />
         </View>
       </View>
   
       <View style={styles.header}>
         <View style={styles.inputArea}>
           <Feather name="key" size={24} color="black" />
           <TextInput
           placeholder="LOGIN"
           style={styles.input}
           />
         </View>
       </View>
   
       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, paddingTop: 5,}}>
         <Botao 
          name="Esqueceu a  senha?"
         />
   
       </ScrollView>

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15,}}>
         <Botao 
          name="ENTRAR" 
          onPress={() => navigation.navigate('home') }
         />
   
       </ScrollView>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
         <Botao
          name="CADASTRAR"
          onPress={() => navigation.navigate('home') }
         />
         </ScrollView>
      </ScrollView>
     );
   }
   
   const styles = StyleSheet.create({
     header:{
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginVertical: 3, 
      paddingTop: 13,
     },
     inputArea:{
       paddingHorizontal: 15,
       flexDirection: 'row',
       alignItems: 'center',
       width: '98%',
       backgroundColor:  '#FFF',
       elevation: 10,
       height: 37,
       borderRadius: 10,
     },
     input:{
       fontFamily: 'Montserrat_500Medium',
       paddingHorizontal: 10,
       fontSize: 13,
       width: '90%'
     },
     contentBotao:{
       flexDirection: 'row',
       width: '100%',
       alignItems: 'center'
     }
   });