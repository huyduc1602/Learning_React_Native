import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput.js';
import GoalItem from './components/GoalItem.js';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoadHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  };

  function deleteGoalHandler() {
    console.log('DELETE');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoadHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return (
            <GoalItem
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
            />
          );
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },
});
