import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
// import { DateRange } from '@mui/icons-material';
import{ NavigationContainer } from '@react-navigation/native';
import{ createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ createStackNavigator } from '@react-navigation/stack'
import First from './src/Screens/StartedScreen/First';
import Second from './src/Screens/StartedScreen/Second';
import Third from './src/Screens/StartedScreen/Third';
import Login from './src/Screens/StackScreens/Login';
import Register from './src/Screens/StackScreens/Register';


export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="First" component={First}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Second" component={Second}/>
        <Stack.Screen name="Third" component={Third}/>
        <Stack.Screen name="Register" component={Register}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

// for navigation:
// const navigation = useNavigation();
// import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
