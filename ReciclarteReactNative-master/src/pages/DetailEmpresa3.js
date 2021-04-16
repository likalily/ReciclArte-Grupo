import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent from '../components/Swiper';

export default function DetailEmpresa3() {
 return (
     <ScrollView style={styles.container}>
     <View style={styles.swiperContent}>
        <SwiperComponent/>
     </View>

    <View style={styles.headerContent}>
      <View style={{ width: '65%' }}>
        <Text style={styles.house}>Recicla Mundo</Text>
      </View>

      <View style={{ width: '35%' }}>
        <Text style={styles.rating}>Avaliações</Text>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Stars
           default={4} 
           count={5}
           half={true}
           starSize={20}
           fullStar={ <Ionicons name="md-star" size={24} style={styles.myStarStyle} /> }
           emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} /> }
           halfStar={  <Ionicons name="md-star-half" size={24} style={styles.myStarStyle} /> }
          />
        </View>
      </View>
    </View>

    <Text style={styles.describ}>
      Ferraz de Vasconcelos
    </Text>
    <Text style={styles.description}>
     Empresa a 35 anos no mercado e há 20 em Ferraz de Vasconcelos.
    </Text>

      <View style={{ width: '65%' }}>
        <Text style={styles.adress}><Feather name="map" size={20} color="black" /> Endereço</Text>
      </View>
      <Text style={styles.description}>
     Rua: Rio da Folha Azul, Bairro: Nilo de Vasconcelos, n°000, CEP: 00000-002, Cidade: Ferraz de Vasconcelos-SP.
    </Text>

    <View style={{ width: '65%' }}>
        <Text style={styles.adress}><Feather name="phone" size={20} color="black" /> Contato</Text> 
      </View>
      <Text style={styles.description}>
     Tel:(88)8888-8888
    </Text>
    <Text style={styles.description}>
     Fax:(88)8888-8888
    </Text>
    <Text style={styles.description}>
     Whats:(88)8888-8888
    </Text>

    <View style={{ width: '85%' }}>
        <Text style={styles.adress}><Feather name="list" size={20} color="black" /> Orçamento</Text> 
      </View>
      <View style={styles.slide}>
          
        <Image
        source={require('../assets/LixeiraPapel.png')}
        style={{width: 30, height: 40, borderRadius: 8}}
        />
      </View>

    <View style={{ width: '65%' }}>
        <Text style={styles.adress}><Feather name="check" size={20} color="black" /> Serviços prestados</Text> 
      </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 35 }}>
      <View style={styles.slide}>
        <Image
        source={require('../assets/LixeiraPapel.png')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/LixeiraVidro.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/LixoEletronico.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>
    </ScrollView>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF'
  },
  swiperContent:{
    flexDirection: 'row',
    height: 240,
    width: '100%',
  },
  headerContent:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  house:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  },
  rating:{
    fontFamily: 'Montserrat_500Medium',
    fontSize: 9,
    color: '#4f4a4a'
  },
  myStarStyle:{
    color: '#E7A74e',
    backgroundColor: 'transparent',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  describ:{
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 10,
    color: '#000'
  },
  description:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 20,
    color: '#b3aeae',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },
  adress:{
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    marginTop: 22,
    color: '#000'
  },
  slide:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 20,
  }
});