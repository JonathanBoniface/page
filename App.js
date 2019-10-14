import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import About from './components/About'
import Search from './components/Search'




export default function App() {
  return (
    <View style={{marginVertical: 40}}>
      <Search/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
