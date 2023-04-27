import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { DateRange } from '@mui/icons-material';
import{ NavigationContainer } from '@react-navigation/native';
import{ createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ createStackNavigator } from '@react-navigation/stack'
import{ MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
     <Stack.Navigator>
       {/* <Stack.Screen name="ShowItems" component={ShowItems}
        options={{title: 'All Items List'}} />
       <Stack.Screen name="ShowCards" component={ShowCard} /> */}
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
