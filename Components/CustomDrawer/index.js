import React from 'react';
import {Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { ContainerProfile, Containertextp } from './styles';
import { Textcontent, Title } from '../../styles-global';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <ContainerProfile>
          <Image
              style={{
                borderRadius: 40,
                borderColor: '#535353',
                borderWidth: 2,
                height: 80,
                width: 80,
              }}
              source={require("../../assets/images.jpg")}
          />
          <Containertextp>
            <Title size={"20px"} color={"#fff"}>Igor3k</Title>
            <Textcontent size={"15px"} color={"#9f9f9f"}>Salve Salve Família!</Textcontent>
          </Containertextp> 
      </ContainerProfile>
      <DrawerItemList {...props} style/>
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;