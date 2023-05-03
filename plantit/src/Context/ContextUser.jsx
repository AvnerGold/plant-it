import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const ContextUser = createContext();
import { useNavigation } from 'react-router-dom';
const ContextUserProvider = ({ children,navigation }) => {

    // Garden Page data
    const [MmFlowers, setFlowers] = useState([]) // התיק פרחים שלי

    // Search Page data
    const [allDataFlowers, setAllDataFlowers] = useState([]) // מאגר צמחים

    //register form (create new user)
    const [userName, setUserName] = useState(); // name
    const [userPassword, setUserPassword] = useState(); // password

    // function who print just first time the explication Pages
    async function checkFirstTime(navigation) {
        // await AsyncStorage.removeItem('firstTime');
        const isFirstTime = await AsyncStorage.getItem('firstTime');
        console.log(isFirstTime);
        let t = 4;
        setTimeout(async () => {
            if (isFirstTime == null) {
                await AsyncStorage.setItem('firstTime', 'false');
                navigation.navigate('Second');
            }
            else {
                navigation.navigate('Login');
                // await AsyncStorage.removeItem('firstTime');
            }
        }, 1000 * t);
    }

    const value = {
        checkFirstTime,
    }

    return (
        <ContextUser.Provider value={value}>
            {children}
        </ContextUser.Provider>
    )
}

export default ContextUserProvider