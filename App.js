import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootSceen}>
      <ImageBackground
        source={require('./assets/images/background.jpeg')}
        resizeMode="cover"
        style={styles.rootSceen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootSceen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
