import React from 'react';
import { View } from 'react-native';
import Header from '../../Components/Header';
import { Container, Title } from '../../styles-global';
// import { Container } from './styles';

const Loja = ({navigation}) => {
  return (
    <Container>
      <Header button func={() => navigation.openDrawer()}/>
      <View style={{marginTop: 30, width: '95%', flex: 1, alignSelf: 'center'}}>
        <Title size={"20px"} color={"white"}>Obrigado por acessar a Loja do Flow!{"\n"}{"\n"}No momento estamos reformulando nossos produtos e em breve voltaremos com novidades! 🌻</Title>
      </View>
    </Container>
  );
}

export default Loja;