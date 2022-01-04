import { color } from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background: #2d2d2d;
`;
export const Textcontent = styled.Text`
    color: ${props=> props.color ? props.color : "#111"};
    font-size:${props=> props.size ? props.size : "20px"};
    text-align: ${props=> props.textal ? props.textal : "null"};
`;
export const Title = styled.Text`
    color: ${props=> props.color ? props.color: "#111"};
    font-size: ${props=> props.size ? props.size : "40px"};
    text-align: center;
    font-weight: bold
`;
