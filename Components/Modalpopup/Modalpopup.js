import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const Modalpopup = (props) => {
  return (
    <Modal
    visible={props.isVisible}
    animationType='slide'
    transparent={true}
    >
        {props.object}
    </Modal>
  );
}

export default Modalpopup;