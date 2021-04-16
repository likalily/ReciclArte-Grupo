import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import AnimatedButton from '../components/AnimatedButton';
import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';

export default function Home() {
 const navigation = useNavigation();
 
 return (
      
   <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#FFF' }}
  >
    <View style={styles.container}>
  <AnimatedButton 
      style={{buttom: 60, right: 60, marginTop: 850}}/>
      </View>

    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name="search" size={24} color="black" />
        <TextInput
        placeholder="O que está procurando?"
        style={styles.input}
        />
      </View>
    </View>

    <View style={{ flexDirection: 'row', marginBottom:1, alignItems: 'center' }}>
      <Text style={[styles.title, { marginTop: 2 } ]}>Menu de opções</Text>
    </View>  

    <View style={styles.header}>
    <View style={styles.inputIcon}>
           <Text><Feather name="home" size={24} color="black" />Missão</Text>
         </View>
         <View style={styles.inputIcon}>
           <Text><Feather name="wifi" size={24} color="black" />Devs</Text>
         </View>
         <View style={styles.inputIcon}>
           <Text><Feather name="home" size={24} color="black" />Origem</Text>
         </View>
       </View>

       <View style={styles.header}>
    <View style={styles.inputIcon}>
           <Text><Feather name="home" size={24} color="black" />Missão</Text>
         </View>
         <View style={styles.inputIcon}>
           <Text><Feather name="wifi" size={24} color="black" />Devs</Text>
         </View>
         <View style={styles.inputIcon}>
           <Text><Feather name="home" size={24} color="black" />Origem</Text>
         </View>
       </View>

       <View style={{ flexDirection: 'row', marginBottom:10, alignItems: 'center' }}>
      <Text style={[styles.title, { marginTop: 20 } ]}>Nosso site</Text>
    </View>  

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
      <House
      cover={require('../assets/Computador.png')}
      />
      <House
      cover={require('../assets/house6.jpg')}
      />
       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
      <House
      cover={require('../assets/house5.jpg')}
      />
    
    </ScrollView>
    </ScrollView>

    <View style={{ flexDirection: 'row', marginBottom:10, alignItems: 'center' }}>
      <Text style={[styles.title, { marginTop: 20 } ]}>Nossos Parceiros</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
      <New
       cover={require('../assets/Parceiro1.jpg')} 
       name="Reciclagem Verde"
       description="Retira resíduos em domícilio, aberta de segunda á sexta."
       onPress={() => navigation.navigate('detailempresa1') }
      />

      <New
       cover={require('../assets/Parceiro2.jpg')} 
       name="Recicla Eletrônicos"
       description="Não retira resíduos em domícilio, aberta de segunda á sexta."
       onPress={() => navigation.navigate('detailempresa2') }
      />

      <New
       cover={require('../assets/Parceiro3.jpg')} 
       name="Recicla Mundo"
       description="Retira resíduos em domícilio, aberta de segunda á sexta."
       onPress={() => navigation.navigate('detailempresa3') }
      />

    </ScrollView>


    <Text style={[styles.title, { marginTop: 20 } ]}>
      Dica do dia
    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15 }}>
      <Recommended
        cover={require('../assets/LixoEletronico.jpg')}
        house="Lixo Eletrônico"
        offer="5%"
      />
      <Recommended
        cover={require('../assets/LixeiraVidro.jpg')}
        house="Lixo de Vidro"
        offer="2%"
      />
      <Recommended
        cover={require('../assets/LixeiraPapel.png')}
        house="Lixo de Papel"
        offer="1%"
      />
    </ScrollView>
    <Text style={[styles.title, { marginTop: 20 } ]}>
      Dica do dia
    </Text>
   </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  header:{
   paddingHorizontal: 15,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   marginVertical: 5, 
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor:  '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  inputIcon:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
    backgroundColor:  '#FFF',
    elevation: 10,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 100,
  },
  input:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  },
  container:{
    flex:1,
    backgroundColor: '#fff',
  }
});