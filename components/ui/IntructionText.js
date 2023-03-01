import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function IntructionText({ children, style }) {
    return <Text style={[styles.intructionText, style]}>{children}</Text>
}

export default IntructionText;

const styles = StyleSheet.create({
    intructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
});