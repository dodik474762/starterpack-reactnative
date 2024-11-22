import {Text, View} from 'react-native';
import {Colors} from '../../utils/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InputSingleImage = (props: any) => {
    const {onPress = () => {}} = props;
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
        <MaterialIcons
          testID="addImage"
          name="add-a-photo"
          style={{marginRight: 10, marginTop: 60}}
          size={50}
          onPress={onPress}
          color={Colors.gray}
        />
      </View>
    </>
  );
};

export default InputSingleImage;
