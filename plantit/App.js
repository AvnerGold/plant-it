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
import ContextUserProvider from './src/Context/ContextUser';
import MyGarden from './src/Screens/TabScreens/MyGarden'
import Discover from './src/Screens/TabScreens/Discover'
import Chat from './src/Screens/TabScreens/Chat'
import Search from './src/Screens/TabScreens/Search'
import Reminder from './src/Screens/TabScreens/Reminder'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <ContextUserProvider>
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="First" component={First}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Second" component={Second}/>
        <Stack.Screen name="Third" component={Third}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ClientNotRegister" component={ClientNotRegister}/>
     </Stack.Navigator>
    </NavigationContainer>
    </ContextUserProvider>
  );
}

// CLIENT 
export const ClientNotRegister = () => {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'MyGarden'){
            iconName = focused
              ? 'ios-flower'
              : 'ios-flower-outline';
          } else if (route.name === 'Reminder') {
            iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
          } else if (route.name === 'Chat'){
            iconName = focused ? 'ios-chatbox-ellipses' : 'ios-chatbox-ellipses-outline';
          }  else if (route.name === 'Discover'){
            iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
          } else if (route.name === 'Search'){
          iconName = focused ? 'ios-search-circle-sharp' : 'ios-search';
        }
          

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
      })}>
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reminder" component={Reminder} />
        <Tab.Screen name="MyGarden" component={MyGarden} />

      </Tab.Navigator>
  );
};

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
