import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function Second({navigation}) {
      // get the correct fun for it
      const [InknutAntiqua] = useFonts({
        'Abel': require('../../../assets/Fonts/Abel/Abel-Regular.ttf')
      })
    // if the font is null return null so it wont get the load to get stuck  
      if (!InknutAntiqua) { return null;}
      // Return your page content here
  return (


        <View style={styles.backgroundPage}>
            <View style={{alignItems:"center"}} >
                <Image
                source={require('../../../assets/images/Logo.png')}
                style={[styles.logo]}
                resizeMode="contain"/>
            </View>

            <View style={styles.bubbleBoxOne}>
                <Text style={[{marginRight:-10},styles.bubbleText]}>Do you sometimes forget to water your plants?</Text>
                <View style={styles.bubbleBorderA}>
                    <Image
                    source={require('../../../assets/images/StartedScreenImages/Second-1.png')}
                    style={[styles.bubbleOneImage]}
                    resizeMode="contain"/>
                </View>
            </View>

            <View style={styles.bubbleBoxTwo}>
                <View style={styles.bubbleBorderB}>
                    <Image
                    source={require('../../../assets/images/StartedScreenImages/Second-2.png')}
                    style={[styles.bubbleTwoImage]}
                    resizeMode="contain"/>
                </View>
                <Text style={[styles.Font,styles.bubbleText]}>Do you know how much water your plant needs?</Text>
            </View>

            <View  style={[styles.dot]}>
            <Image
                    source={require('../../../assets/images/StartedScreenImages/Dot-1.png')}
                    resizeMode="contain"/>
            </View>


            <View style={styles.next}>
                <Text style={[styles.Font,styles.header]}>Hello !</Text>
                <Text style={[styles.Font,styles.welcome]}>Welcome to Plant it</Text>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems:"center",}}>
                    <Text style={[styles.Font,styles.buttonNext]} onPress={()=> navigation.navigate('Third')}>Next</Text>
                </TouchableOpacity>

                <Text style={{textAlign:"center"}}><Text style={{color:"#325A3E"}}>By signing you agree to our</Text> term of use{"\n"} and privacy notice</Text>
            </View>

            
        </View>
  )
}

const styles = StyleSheet.create({
    Font:{
        fontFamily:'Abel',
    },
    backgroundPage:{// will make a color of all the page correct
        backgroundColor:'#F0F0F0',
        width: '100%',
        height: '100%',  
    },
    logo: {// just the logo on top
        marginTop:25,
        width: 25,
        height: 33,
        marginHorizontal:"auto",
        alignItems: 'center', // Add this line
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
        flexDirection:"row",
        justifyContent:"flex-end",
        marginBottom:50
    },
    bubbleBoxTwo:{// this is the container of all the box two
        flexDirection:"row",
        justifyContent:"flex-start",       
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
        padding: 15,
        width: 175,
        height:70,
        marginTop: 68,
        textAlign:"center",
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: -15,
        zIndex:1,
    },
    dot:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    next:{
        marginTop: 15,
      
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor:"#FFFFFF",
        borderRadius:1000000,
        borderWidth:50,
        borderBottomWidth:200,
        borderColor:"#FFFFFF",
    },
    header:{
        paddingTop:25,
        fontSize:30,
    },
    welcome:{
        color:"#848484",
        fontSize:24,
        marginBottom:80
    },
    buttonNext:{
        fontSize:30,
        borderWidth:1,
        borderRadius:100,
        justifyContent: 'center',
        padding:5,
        color:"#FFFFFF",
        width:270,
        backgroundColor:"#325A3E",
        textAlign: 'center',
        marginBottom:10
    }
    

});