import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';

export const HeaderContainer = styled.View`
  width: 100%;
  height: 15%;
  background: #000000;
  box-shadow: 0px 5px 10px black;
;
  border-bottom-width: 1px;
  border-color: #ffc107;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`;
export const LogoContainer = styled.View`
    width: 40%;
    height: 75%;
`;
export const ButtonNavigation = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
`;
