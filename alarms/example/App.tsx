import { Button, StyleSheet, Text, View } from 'react-native';

import * as Alarms from 'alarms';
import { useEffect } from 'react';

export default function App() {
  // Toggle between dark and light theme
  return (
    <View style={styles.container}>
       <Button title={`--+++++++`} onPress={() => {
        for (let i = 0; i < 8; i++) {
          Alarms.setAlarm(16, 20+i, `Alarm ${i}`, i);
          console.log(" made request to ",i);
          
        }
       }} />
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
