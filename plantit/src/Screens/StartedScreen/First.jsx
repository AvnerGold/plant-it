import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



//npx expo install expo-font
///import { useFonts } from 'expo-font';
// const [InknutAntiqua] = useFonts({
//    'InknutAntiqua-Black': require('../../../assets/Fonts/InknutAntiqua/InknutAntiqua-Black.ttf')
//})

export default function First() {
  const navigation = useNavigation();

  async function checkFirstTime() {
    // await AsyncStorage.removeItem('firstTime');
    const isFirstTime = await AsyncStorage.getItem('firstTime');
    console.log(isFirstTime);
    let t = 4;
    setTimeout(async() => {
      if (isFirstTime == null) {
        await AsyncStorage.setItem('firstTime', 'false');
        navigation.navigate('Second');
      }
      else {
        navigation.navigate('Login');
        // await AsyncStorage.removeItem('firstTime');
      }
    }, 1000 * t);
  }


  useEffect(() => {

    checkFirstTime();
  }, []);

  // const navigateToNextScreen = useCallback(() => {
  //   navigation.navigate('Login');
  // }, [navigation]);

  const [InknutAntiqua] = useFonts({
    'InknutAntiqua-Black': require('../../../assets/Fonts/InknutAntiqua/InknutAntiqua-Black.ttf')
  });

  if (!InknutAntiqua) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/Logo.png')}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
        onLoad={() => console.log('Image loaded successfully!')}
      />
      <Text style={{ fontFamily: 'InknutAntiqua-Black' }}>Plant It</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3FFD1'
  },
});
