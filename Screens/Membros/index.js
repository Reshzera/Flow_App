import React, { useState } from 'react';
import {FlatList, Image, View} from 'react-native';
import Header from '../../Components/Header';
import Modalpopup from '../../Components/Modalpopup/Modalpopup';
import { Textcontent } from '../../styles-global';
import { Ionicons } from '@expo/vector-icons'; 
import { Container, Memberbutton, ButtonContainer, TitleContainer, Title, Buttonlabel, ImageContainer, ModalContainer, TextContainer, Closebutton } from './styles';

const humilde = require('../../assets/flower_humilde.png')
const burgues = require('../../assets/flower_burgues.png')

const Membros = ({navigation}) => {
  const [isVisible, setisVisible] = useState(false);
  const [Membro, setMembro] = useState(null);

  const infoburgues = ["Faça parte do seleto grupo de MEMBROS do Flow Podcast.", "Desbloqueie um EMBLEMA exclusivo pra exibir no seu perfil e tirar mó onda.", "Ganhe descontos progressivos em produtos da loja.", "Desconto no preço e prioridade máxima na compra de ingressos de futuros eventos que realizaremos.", "Receba adesivos brabíssimos e exclusivos a cada 3 meses.", "Ao ser membro burguês, você ganha 2 tickets por concurso participado, tendo o dobro de chances de ser selecionado entre os tickets gerados para o concurso!"]
  const infohumilde = ["Faça parte do seleto grupo de MEMBROS do Flow Podcast.", "Desbloqueie um EMBLEMA exclusivo para exibir no seu perfil e tirar mó onda.", "Ganhe descontos progressivos em produtos da loja.", "Desconto no preço e prioridade na compra de ingressos de futuros eventos que realizaremos.", "Ao ser membro humilde, você ganha 1 ticket por concurso participado, tendo a chance de ser selecionado entre todos os tickets gerados para o concurso!"]

  const infomodal = () => (
    <ModalContainer>
      <Closebutton onPress={()=>{setisVisible(false)}}>
        <Ionicons name="ios-close" size={30} color="white"/>
      </Closebutton>
      <ImageContainer>
          <Image source={Membro == 0 ? humilde:burgues} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
      </ImageContainer>
      <TextContainer>
        <Textcontent size={"25px"} color={"white"} textal={"center"}>{Membro == 0 ? "MEMBRO FLOWER HUMILDE":"MEMBRO FLOWER BURGUÊS"}</Textcontent>
        <FlatList
          data={Membro == 0 ? infohumilde : infoburgues}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item})=> <View style={{flex:1, paddingTop: 15}}><Textcontent size={"15px"} color={"white"}>● {item}</Textcontent></View>}
          showsVerticalScrollIndicator={false}
        />
      </TextContainer>
    </ModalContainer>
  )

  return(
      <Container>
        <Header button func={() => navigation.openDrawer()}/>
          <TitleContainer>
            <Title>Você precisará escolher entre dois planos para se tornar um MEMBRO FLOWER:</Title>
          </TitleContainer>
          <ButtonContainer>
            <Memberbutton onPress={()=>{{setMembro(0), setisVisible(true)}}}>
              <Buttonlabel>MEMBRO FLOWER HUMILDE</Buttonlabel>
              <ImageContainer>
                <Image source={humilde} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
              </ImageContainer>
            </Memberbutton>
            <Memberbutton  onPress={()=>{{setMembro(1), setisVisible(true)}}}>
              <Buttonlabel>MEMBRO FLOWER BURGUÊS</Buttonlabel>
              <ImageContainer>
                <Image source={burgues} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
              </ImageContainer>
            </Memberbutton>
          </ButtonContainer>
          <Modalpopup object={infomodal()} isVisible={isVisible} Onclose={() => {setisVisible(false)}}/>
      </Container>
  );
}

export default Membros;