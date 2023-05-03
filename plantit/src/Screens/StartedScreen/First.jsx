import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useEffect, useCallback, useContext } from 'react'
import { ContextUser } from '../../Context/ContextUser';

export default function First({navigation}) {
  
  const { checkFirstTime } = useContext(ContextUser)
  useEffect(() => {
    checkFirstTime(navigation);
  }, []);

  const [InknutAntiqua] = useFonts({
    'InknutAntiqua-Black': require('../../../assets/Fonts/InknutAntiqua/InknutAntiqua-Black.ttf')
  });

  if (!InknutAntiqua) { return null; }

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
