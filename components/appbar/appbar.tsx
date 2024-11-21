import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../utils/color';

const AppBar = (props: any) => {
  const {
    onBackPress = () => {},
    onRightPress = () => {},
    color = Colors.white,
    title = 'App',
    backgroundColor = Colors.bluePrimary,
    nameRightIcon = "search",
  } = props;
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: 50,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}>
      <Ionicons
        testID="backButton"
        name="arrow-back"
        color={color}
        size={24}
        style={{backgroundColor: 'transparent', width: '10%'}}
        onPress={onBackPress}
      />
      <Text
        style={{
          color: color,
          width: '80%',
          fontSize: 20,
          textAlign: 'center',
        }}>
        {title}
      </Text>
      <Ionicons
        testID="rightButton"
        name={nameRightIcon}
        color={color}
        size={24}
        style={{
          backgroundColor: 'transparent',
          width: '10%',
          textAlign: 'right',
        }}
        onPress={onRightPress}
      />
    </View>
  );
};

export default AppBar;
