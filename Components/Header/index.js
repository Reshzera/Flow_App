import React from 'react';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonNavigation, HeaderContainer, LogoContainer } from './styles';


const ButtonMenu = (props) => {
    if(props.button == true){
        return(
            <ButtonNavigation onPress={props.func}>
                <MaterialIcons name="menu-open" size={30} color="white" />
            </ButtonNavigation>
        )
    }else{
        return(null)
    }
}

const Header = (props) => {
    const logo = require('../../assets/flowlogo.jpg')
  return (
      <HeaderContainer>
          <ButtonMenu button={props.button} func={props.func}/>
          <LogoContainer>
              <Image source={logo} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
          </LogoContainer>
      </HeaderContainer>
  );
}

export default Header;