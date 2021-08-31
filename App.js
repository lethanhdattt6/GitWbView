import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import WebView from 'react-native-webview';
import link from './source';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
        <WebView
            style = {{width : deviceWidth, height : deviceHeight}}
            source = {{uri : link}}
        />
    </View>
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
