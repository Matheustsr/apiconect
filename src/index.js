import React from 'React';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
  <View style={style.container}> 
    <Text>Hello GoStack</Text>
  </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },

});