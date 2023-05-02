import { View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import CachedIcon from '@mui/icons-material/Cached';
import { Text, Button } from '@react-native-material/core'
import React from 'react';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login({ navigation }) {
  const [loaded] = useFonts({
    pacifico: require('../../../assets/Fonts/Pacifico/Pacifico-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <TouchableOpacity style={styles.iconClose} onPress={()=>navigation.navigate('ClientNotRegister')}>
        <Ionicons  name="close-circle" size={40} color="black" />
      </TouchableOpacity>
      <Image
        source={require('../../../assets/images/LoginImages/LoginImg.png')}
        style={styles.img} />
      <View>
        <Text style={styles.title}>Welcome Plants</Text>
        <Text style={styles.undertitle}>Login to account</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Full Name' />
        <TextInput style={styles.input} placeholder='Password' />
        <Button style={styles.btn} variant="contained" color="green" title="login"></Button>
        <Text style={styles.textSU}>Don’t have an account?</Text>
        <Button onPress={()=>navigation.navigate("Register")} style={styles.signUp} variant="text" color="green" title="Sign up"></Button>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'pacifico'
  },
  undertitle: {
    textAlign: 'center'
  },
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#E1E5E2',
    marginTop: 30
  },
  btn:
  {
    marginTop: 70,
    height: 40,
    textAlign: 'center',
    width: '90%',
  },
  signUp: {
    textDecorationLine: 'underline',
  },
  textSU: {
    marginTop: 20
  },
  iconClose: {
    position: 'absolute',
    top: '10%',
    left: '7%',
    zIndex: 1
  }
});
