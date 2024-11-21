import { ActivityIndicator } from "react-native";
import { Colors } from "../../utils/color";


const CircleLoading = (props: any) => {
    const {color = Colors.bluePrimary} = props;
    return (
        <ActivityIndicator size="large" color={color}/>
    );
}

export default CircleLoading;