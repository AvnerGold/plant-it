import { View, StyleSheet, TextInput, Image } from 'react-native'
import { Text, Button } from '@react-native-material/core'
import React from 'react'

export default function Register({navigation}) {

  return (
    <>
      <View style={styles.top}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.undertitle}>Create your new account</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Full Name' />
        <TextInput style={styles.input} placeholder='Email' />
        <TextInput style={styles.input} placeholder='Password' />
        <TextInput style={styles.input} placeholder='Confirm Password' />
      </View>
      <View>
        <Text style={styles.textPrivacy}>By signing you agree to our term of use and privacy notice</Text>
        <Image
          source={require('../../../assets/images/RegisterImages/registerarosoir.png')}
          style={styles.img} />
        <Button  style={styles.btn} variant="contained" color="green" title="Sign Up"></Button>
        <Button variant='outlined' title="Already have an account ?" color='black' onPress={()=>navigation.navigate("Login")}>Already have an account ? </Button>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    color: 'black',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#E1E5E2',
    margin: 10,
  },
  top: {
    marginTop: '30%'
  },
  title: {
    textAlign: 'center',
    fontSize: 60
  },
  undertitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'grey'
  },
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    alignSelf: 'center',
    marginTop: 20,
  },
  textPrivacy: {
    alignSelf: 'center',
    width: 300,
    textAlign: 'center'
  },
  btn:
  {
    marginTop: 20,
    height: 40,
    textAlign: 'center',
    width: '90%',
    alignSelf:'center'
  },
})