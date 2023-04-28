import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function Second() {
      // get the correct fun for it
      const [InknutAntiqua] = useFonts({
        'Abel': require('../../../assets/Fonts/Abel/Abel-Regular.ttf')
      })
    // if the font is null return null so it wont get the load to get stuck  
      if (!InknutAntiqua) {
      
        return null;
      }
      // Return your page content here
  return (
    <View>

        <View style={styles.backgroundPage}>
            <Image
            source={require('../../../assets/images/Logo.png')}
            style={[styles.logo]}
            resizeMode="contain"/>

            <View style={styles.bubbleBoxOne}>

                <Text style={[{fontFamily:'Abel'},styles.bubbleOneText]}>Do you sometimes forget to <br /> water your plants ?</Text>
                <Image
                source={require('../../../assets/images/StartedScreenImages/Second-1.png')}
                style={[styles.bubbleOne]}
                resizeMode="contain"/>
            </View>

            <View style={styles.bubbleBoxOTwo}>
            <View style={styles.bubble}>
                <Image
                source={require('../../../assets/images/StartedScreenImages/Second-2.png')}
                style={[styles.bubbleTwo]}
                resizeMode="contain"/>

            </View>
                <Text style={[{fontFamily:'Abel'},styles.bubbleOneText]}>Do you know how much <br /> water your plant needs?</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundPage:{
        backgroundColor:'#F0F0F0',
        color:"red",
        width: '100%',
        height: '100%',

    },
    logo: {
        width: 25,
        height: 33,
        marginHorizontal:"auto"
    
    },
    bubble: {
        marginLeft:10,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 10,
        marginTop: 50,
    },
    bubbleBoxOne:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        height:100,
        paddingBottom:30,    
    },
    bubbleOne:{
       marginTop:-37,
       width:60,
       height:173,
       marginLeft:15
    },
    bubbleOneText: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        width: 175,
        height:60,
        marginTop: 68,
        borderWidth: 1,
        borderColor: '#000',
        textAlign:"center"
    },
    bubbleBoxOTwo:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        height:100    
    },
    bubbleTwo:{
        marginTop:-45,
        width:85,
        height:190,
        marginLeft:-5,
     },

});