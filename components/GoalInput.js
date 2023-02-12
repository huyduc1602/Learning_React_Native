import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoadHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textinput}
                placeholder='Your course goal!'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Goal'
                onPress={addGoadHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textinput: {
        borderWidth: 1,
        borderColor: '#ccccccc',
        width: '70%',
        marginRight: 8,
        marginBottom: 10,
        padding: 8,
    }
});