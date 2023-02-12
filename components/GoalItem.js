import { React, StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    /* It's a style property that is being applied to the `goalItem` style. */
    goalText: {
        color: 'white'
    }
});