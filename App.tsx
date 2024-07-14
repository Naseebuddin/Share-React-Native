import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Home from './src/Home/Home'

const App = () => {
  return (
   <SafeAreaView style={{flex:1}}>
    <StatusBar/>
    <View style={{flex:1}}>
      <Home/>
    </View>
   </SafeAreaView>
  )
}

export default App