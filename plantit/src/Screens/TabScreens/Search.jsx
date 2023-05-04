
import { StyleSheet, FlatList, ScrollView, SafeAreaView,View } from 'react-native'
import { Text, Button, TextInput } from '@react-native-material/core'
import React, { useContext, useEffect } from 'react'
import { ContextUser } from '../../Context/ContextUser'

export default function Search() {
  const { LoadDataFlowers, allFlowers, inputSearch, setInputSearch } = useContext(ContextUser)

  useEffect(() => {
    //LoadDataFlowers()
  }, [])

  return (
   <>
      <View>
        <Text style={styles.title}>Find the best plants and vegetables</Text>
      </View>
      <View>
        <TextInput style={styles.input}
          placeholder='enter a plant name'
          onChangeText={setInputSearch}
        />
        <Button style={styles.btn}
          title='search'
          color='green'
        />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
           data={allFlowers}
           renderItem={({ item }) => <View title={item.title} />}
           keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Text>{inputSearch}</Text>
      </>
  ) 
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 200
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginTop: 20
  },
  btn: {
    marginTop: 25,
  },
  container: {
    flex: 1,
  },
})