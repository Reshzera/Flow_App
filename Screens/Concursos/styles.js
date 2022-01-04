import styled from 'styled-components/native';

export const ListContainer = styled.View`
   flex: 1;
   width: 95%;
   align-self: center;
   margin-top: 5%;

`
export const SubmitConcurso = styled.TouchableOpacity `
    width: 150px;
    height: 40px;
    background: ${props => props.status == true ? "#ffc107" : "#888888"}; 
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-right: 20px;
`;
export const Itemcontainer = styled.View`
    flex: 1;
    width: 95%;
    background: #fff;
    border-radius: 10px;
    align-self: center;
    margin-top: 30px;
    padding-top: 20px;
    align-items: center;
    padding-bottom: 20px;
`;
export const ImageContainerConcurso = styled.View`
    width: 300px;
    height: 157px;
`;
export const TextContainer = styled.View`
    flex: 1;
    width: 90%;
    align-items:center;
    margin-top: ${props => props.size ? props.size : "30px"};
    margin-bottom: 30px;
`;
export const Memberbutton = styled.TouchableOpacity `
    width: 200px;
    height: 60px;
    background:#ffc107; 
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;
export const ImageRow = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
`