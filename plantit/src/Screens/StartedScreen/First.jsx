import { View, Text,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React from 'react'



//npx expo install expo-font
///import { useFonts } from 'expo-font';
// const [InknutAntiqua] = useFonts({
//    'InknutAntiqua-Black': require('../../../assets/Fonts/InknutAntiqua/InknutAntiqua-Black.ttf')
//})

export default function First() {
    const navigation = useNavigation();
    const [InknutAntiqua] = useFonts({
        'InknutAntiqua-Black': require('../../../assets/Fonts/InknutAntiqua/InknutAntiqua-Black.ttf')
      })

      if (!InknutAntiqua) {
      
        return null;
      }
  return (
    <View>
      <Text style={{fontFamily:'InknutAntiqua-Black'}}>First</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});