import { Text, View } from "react-native";


const AppBar = () => {
    return (
        <View style={{
            backgroundColor: '#2196f3',
            height: 50,
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            <Text style={{color: '#fff', width: '100%', textAlign: 'center'}}>My App</Text>
            <Text style={{color: '#fff', width: '100%', textAlign: 'center'}}>My App</Text>
        </View>
    );
};

export default AppBar;