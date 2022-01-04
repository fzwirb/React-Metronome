import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import colors from "./colors";


export default function App() {
  const [range, setRange] = useState('120 BPM');
  const [sliding, setSliding] = useState('Allegro');
  return (
    <View style={styles.container}>
      <Text style ={{fontSize: 20, fontWeight: 'bold'}}>{range}</Text>
      
      <Slider
        style = {{ width: 200, height: 40}}
        minimumValue = {20}
        maximumValue = {200}
        value = {120}
        minimumTrackTintColor = {colors.primary}
        thumbTintColor = {colors.primary}
        onValueChange = {value => updateValues(parseInt(value))}
      />
      <Text style ={{fontSize: 20, fontStyle: 'italic'}}>{sliding}</Text> 

      <StatusBar style="auto" />
    </View>
  );
  function updateValues(value){
    setTempoText(value);
    setTempoNum(value);
  }
  
  function setTempoNum(val){
    setRange(val + " BPM")
  }
  
   
   function setTempoText(val) {
    if (val <= 40){
          setSliding("Grave")
        }
        else if (val > 40 && val <= 66){
         setSliding("Lento")
         return
        }
        else if (val > 66 && val <= 76) {
          setSliding("Adagio")
          return
        }
        else if (val > 76 && val <= 106) {
          setSliding("Andante")
          return
        }
        else if (val > 106 && val <= 120) {
          setSliding("Moderato")
          return
        }
        else if (val > 120 && val <= 168) {
          setSliding("Allegro")
          return
        }
        else if (val >= 168) {
          setSliding("Presto")
          return
        }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
