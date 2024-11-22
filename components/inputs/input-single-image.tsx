import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import Separator from '../others/separator';

const InputSingleImage = (props: any) => {
  const {onImageResult = () => {}} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const addImage = () => {
    setModalVisible(true);
  };

  const onImageAttachFrom = (from: String) => {
    setModalVisible(false);
    onImageResult(from);
  };

  const ModalChooseImagePict = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{position: 'absolute', top: 10, right: 10}}>
              <MaterialIcons
                name="close"
                size={24}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
            <Text style={styles.modalText}>Choose Image</Text>
            <Separator />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '50%',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                  borderColor: Colors.gray,
                  padding: 10,
                  borderRadius: 5,
                }}>
                <MaterialIcons
                  name="camera-alt"
                  size={50}
                  color={Colors.gray}
                  onPress={() => onImageAttachFrom('camera')}
                />
                <Text>Camera</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '50%',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                  borderColor: Colors.gray,
                  padding: 10,
                  borderRadius: 5,
                  marginLeft: 10,
                }}>
                <MaterialIcons
                  name="photo-library"
                  size={50}
                  color={Colors.gray}
                  onPress={() => onImageAttachFrom('gallery')}
                />
                <Text>Gallery</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <View
        style={{
          padding: 10,
          height: 200,
          margin: 10,
          borderRadius: 5,
          backgroundColor: Colors.white,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <ModalChooseImagePict />
        <MaterialIcons
          testID="addImage"
          name="add-a-photo"
          style={{marginRight: 10, marginTop: 60}}
          size={50}
          onPress={addImage}
          color={Colors.gray}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: 250,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16
  },
});

export default InputSingleImage;
