import React, { useState } from 'react';
import { FlatList, View, Image, Alert} from 'react-native';
import { Container, Textcontent, Title } from '../../styles-global';
import Header from '../../Components/Header';
import { FlatListcontainer, Itemcontainer, Sparkbox, Sparkbutton } from './styles';



const sparksprice = [
  {
    sparks: '200 Sparks',
    price: 'R$ 20,00',
  },
  {
    sparks: '400 Sparks',
    price: 'R$ 40,00',
  },
  {
    sparks: '800 Sparks',
    price: 'R$ 80,00',
  },
  {
    sparks: '1.000 Sparks',
    price: 'R$ 100,00',
  },
  {
    sparks: '2.500 Sparks',
    price: 'R$ 250,00',
  },
  {
    sparks: '5.000 Sparks',
    price: 'R$ 500,00',
  },
  {
    sparks: '10.000 Sparks',
    price: 'R$ 1.000,00',
  },
  {
    sparks: '50.000 Sparks',
    price: 'R$ 4.500,00',
  },
]

const Sparks = ({navigation}) => {
  const [wallet, setwallet] =  useState(0) 

  const HandleSparkbutton = (sparks) => {
    if (wallet >= 200000){
      setwallet(200000)
      Alert.alert("Você já tem muitos Sparks")
    }else{
      const pricenum = sparks.replace(/[^\d]+/g,'')
      const sparksnum = parseFloat(pricenum)
      setwallet(wallet + sparksnum)
    }
  } 
  
const SparkBuy = ({price, sparks}) => (
  <Itemcontainer>
    <View style={{flexDirection: 'row', height: '100%', alignItems: 'center'}}>
        <Image source={require('../../assets/flowcoins.png')} resizeMode='contain' style={{width: '30%', height: '100%'}}/>
        <Textcontent size={'16px'}>{sparks}</Textcontent>
    </View>
    <Sparkbutton onPress={()=>{{HandleSparkbutton(sparks)}}}>
        <Textcontent size={'16px'}>{price}</Textcontent>
    </Sparkbutton>
  </Itemcontainer>
)
  return (
    <Container>
      <Header button func={() => navigation.openDrawer()}/>
      <Sparkbox>
        <Title>Comprar Sparks</Title>
        <Textcontent>{wallet == 0 ? 'Sua carteira está vazia!' : `Você tem ${wallet} Sparks`}</Textcontent>
        <FlatListcontainer>
          <FlatList
          data={sparksprice}
          renderItem={({item})=> <SparkBuy price={item.price} sparks={item.sparks}/>}
          keyExtractor={(item, index) => index.toString()}
          />
        </FlatListcontainer>
      </Sparkbox>
    </Container>
  );
}

export default Sparks;