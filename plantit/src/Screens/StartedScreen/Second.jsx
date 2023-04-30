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
                <Text style={[{marginRight:-10},styles.bubbleText]}>Do hi sometimes forget to <br /> water your plants ?</Text>
                <View style={styles.bubbleBorderA}>
                    <Image
                    source={require('../../../assets/images/StartedScreenImages/Second-1.png')}
                    style={[styles.bubbleOneImage]}
                    resizeMode="contain"/>
                </View>
            </View>

            <View style={styles.bubbleBoxOTwo}>
                <View style={styles.bubbleBorderB}>
                    <Image
                    source={require('../../../assets/images/StartedScreenImages/Second-2.png')}
                    style={[styles.bubbleTwoImage]}
                    resizeMode="contain"/>
                </View>
                <Text style={[styles.bubbleText]}>Do you know how much <br /> water your plant needs?</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundPage:{// will make a color of all the page correct
        backgroundColor:'#F0F0F0',
        width: '100%',
        height: '100%',
    },
    logo: {// just the logo on top
        width: 25,
        height: 33,
        marginHorizontal:"auto"
    
    },
    bubbleBorderA: { //this is the bubble colors behind the images 
        backgroundColor:"#FBDBBE",
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 50,
    },
    bubbleBorderB: {  //this is the bubble colors behind the images (not the same so i need to tweak for the second bubble)
        marginLeft:10,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#EBBEFB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 50,
    },
    bubbleBoxOne:{// this is the container of all the box one
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        height:100,
        paddingBottom:30,    
    },
    bubbleBoxOTwo:{// this is the container of all the box two
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        height:100    
    },
    bubbleOneImage:{
       marginTop:-37,
       width:60,
       height:173,
      
    
    },
    bubbleTwoImage:{
        marginTop:-45,
        width:85,
        height:190,
        marginLeft:-5,
     },
    bubbleText: {
        fontFamily:'Abel',
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        padding: 10,
        width: 175,
        height:50,
        marginTop: 68,
        textAlign:"center",
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: -15
    },

});