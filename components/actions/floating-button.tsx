import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../utils/color';

const FloatingButton = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 10,
        width: 50,
        height: 50,
        right: 10,
        backgroundColor: Colors.bluePrimary,
        borderRadius: 25,
      }}>
      <MaterialIcons name="add" size={24} color="white" />
    </View>
  );
};

export default FloatingButton;
