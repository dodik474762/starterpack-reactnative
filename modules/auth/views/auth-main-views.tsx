import {Text, View} from 'react-native';

const AuthMainViews = (props: any) => {
  const {base_url = ''} = props;
  return (
    <View>
      <Text>Auth Main Views {base_url}</Text>
    </View>
  );
};

export default AuthMainViews;
