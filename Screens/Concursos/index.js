import React, { useState } from 'react';
import { FlatList, Image, Modal } from 'react-native';
import Header from '../../Components/Header';
import { Container, Textcontent, Title } from '../../styles-global';
import { ListContainer, Itemcontainer, TextContainer, SubmitConcurso, Memberbutton, ImageContainerConcurso, ImageRow } from './styles';
import { Concursoinfo} from '../../concurso-data';
import Modalpopup from '../../Components/Modalpopup/Modalpopup';
import { Closebutton, ModalContainer, ImageContainer } from '../Membros/styles';
import { Ionicons } from '@expo/vector-icons'; 


const humilde = require('../../assets/flower_humilde.png')
const burgues = require('../../assets/flower_burgues.png')

const Concursos = ({navigation}) => {
  const [isVisible, setisVisible] = useState(false);

  const Modalinfo = () => (
    <ModalContainer>
      <Closebutton onPress={()=>{setisVisible(false)}}>
        <Ionicons name="ios-close" size={30} color="white"/>
      </Closebutton>
      <ImageRow>
        <ImageContainer>
            <Image source={humilde} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
        </ImageContainer>
        <ImageContainer>
            <Image source={burgues} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
        </ImageContainer>
      </ImageRow>
      <TextContainer size={"30px"}>
        <Title size={"30px"} color={"white"}>Quer participar do concurso?{"\n"}</Title>
        <Textcontent color={"white"}>Para participar desse e de outros concursos, você deve ser membro{"\n"}</Textcontent>
        <Memberbutton onPress={()=>{{setisVisible(false), navigation.navigate('Membros')}}}>
          <Title size={"23px"} >Seja um Membro!</Title>
        </Memberbutton>
      </TextContainer>
    </ModalContainer>
  )
  const ItemConcurso = (props) => (
      <Itemcontainer>
        <ImageContainerConcurso>
          <Image source={props.imagem} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
        </ImageContainerConcurso>
        <TextContainer>
          <Title size={"25px"}>{props.produto}{"\n"}</Title>
          <Textcontent >{props.descricao}</Textcontent>
        </TextContainer>
        <SubmitConcurso status={props.status} onPress={()=>{setisVisible(true)}} disabled={!props.status}>
          <Title size={"20px"}>{props.status == true ? "Participar" : "Encerrado"}</Title>
        </SubmitConcurso>
      </Itemcontainer>
    )
  return (
    <Container>
      <Header button func={() => navigation.openDrawer()}/>
      <ListContainer>
        <FlatList
        data={Concursoinfo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item})=> <ItemConcurso produto={item.produto} descricao={item.descricao} status={item.status} imagem={item.imagem}/>}
        />
      </ListContainer>
      <Modalpopup isVisible={isVisible} object={Modalinfo()}/>
    </Container>
  );
}

export default Concursos;