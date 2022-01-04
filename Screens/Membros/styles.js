import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background: #2d2d2d;
    justify-content: center;
`;
export const Memberbutton = styled.TouchableOpacity`
    width: 160px;
    height: 160px;
    background: #212529;
    border-radius: 20px;
    border-width: 0.7px;
    border-color: #ffc107;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 10px 10px black;
    padding-top: 10px;
    padding-bottom: 10px;
`;
export const ButtonContainer = styled.View`
    flex:4;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
`;
export const TitleContainer = styled.View`
    flex: 1;
    width: 90%;
    align-self: center;
    justify-content: center;
    padding-top: 15px;
`;
export const Title = styled.Text`
    color: white;
    font-size: 25px;
    text-align: center;
    line-height: 35px;
`;
export const Buttonlabel = styled.Text`
    color: white;
    font-size: 15px;
    text-align: center;
    margin-bottom: 5px;
`;
export const ImageContainer = styled.View`
    width: 100px;
    height: 100px;
`;
export const ModalContainer = styled.View`
    position: absolute;
    bottom: 20px;
    top: 18%;
    right: 20px;
    left: 20px;
    background: #212529;
    align-self: center;
    border-radius: 20px;
    border-width: 1px;
    border-color: white;
    align-items: center;
    padding-top: 15px;
`;
export const TextContainer = styled.View`
    width: 90%;
    margin-top: 10px;
    margin-bottom: 20px;
    flex: 1;
    
`;
export const Closebutton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    right: 10px;
    top: 10px;
    position: absolute;
`