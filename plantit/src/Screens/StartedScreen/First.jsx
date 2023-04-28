import { View, Text,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React,{useEffect,useCallback} from 'react'



//npx expo install expo-font
///import { useFonts } from 'expo-font';
// const [InknutAntiqua] = useFonts({
//    'InknutAntiqua-Black': require('../../../assets/Fonts/InknutAntiqua/InknutAntiqua-Black.ttf')
//})

export default function First() {
    const navigation = useNavigation();

  // Define a callback function that will navigate to the next screen
  const navigateToNextScreen = useCallback(() => {
    navigation.navigate('Second');
  }, [navigation]);

  useEffect(() => {
    // Set a timeout to navigate to the next screen after 5 seconds
    const timeout = setTimeout(navigateToNextScreen, 1000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigateToNextScreen]);

  
    // get the correct fun for it
    const [InknutAntiqua] = useFonts({
        'InknutAntiqua-Black': require('../../../assets/Fonts/InknutAntiqua/InknutAntiqua-Black.ttf')
      })
    // if the font is null return null so it wont get the load to get stuck  
      if (!InknutAntiqua) {
      
        return null;
      }
      // Return your page content here
  return (
    <View style={styles.container}>
        <Image
         source={require('../../../assets/images/Logo.png')}
         style={{ width: 200, height: 200 }}
         resizeMode="contain"
         onLoad={() => console.log('Image loaded successfully!')}
         />
      <Text style={{fontFamily:'InknutAntiqua-Black'}}>Plant It</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#E3FFD1'

    },
});