import React from 'react';
import { View, FlatList, Image, Linking } from 'react-native';


import { Container, Textcontent, Title } from '../../styles-global';
import Header from '../../Components/Header';
import { ImageContainerPodcast, Itempcontainer, SubmitPodcast } from './styles';
import {episodedata} from '../../episodio-data';


import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Podcasts = ({navigation}) => {
  const Itempodcast = (props) =>(
    <Itempcontainer>
      <ImageContainerPodcast>
        <Image source={props.imagem}  resizeMode='contain' style={{width: '100%', height: '100%'}}/>
      </ImageContainerPodcast>
        <Title size={"20px"}>{props.produto}{"\n"}</Title>
        <Textcontent >{props.descricao}{"\n"}</Textcontent>
        <SubmitPodcast onPress={ ()=>{ Linking.openURL(props.ytblink)}}><Title size={"20px"}><Entypo name="youtube" size={24} color="black" />   Youtube</Title></SubmitPodcast>
        <SubmitPodcast onPress={ ()=>{ Linking.openURL('https://open.spotify.com/show/3V5LBozjo4vNg2oJoA4Wb2')}}><Title size={"20px"}><Entypo name="spotify" size={24} color="black"/>    Spotify</Title></SubmitPodcast>
        <SubmitPodcast onPress={ ()=>{ Linking.openURL('https://podcasts.apple.com/br/podcast/flow-podcast/id1466327128')}}><Title size={"20px"}><AntDesign name="apple1" size={24} color="black" />    Apple Music</Title></SubmitPodcast>
    </Itempcontainer>
  )
  return (
      <Container>
        <Header button func={() => navigation.openDrawer()}/>
        <FlatList
        data={episodedata}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item})=> <Itempodcast produto={item.produto} descricao={item.descricao} imagem={item.imagem} ytblink={item.linkytb}/>}
        />
      </Container>
  );
}

export default Podcasts;