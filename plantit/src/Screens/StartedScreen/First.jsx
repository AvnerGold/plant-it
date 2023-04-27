import { View, Text,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function First() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>First</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});