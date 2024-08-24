import React, { useEffect } from 'react';
import { Button, StyleSheet, View, Linking, Alert } from 'react-native';
import * as Alarms from 'alarms';

export default function App() {
  
  // useEffect(() => {
  //   const handleUrl = (event: { url: string }) => {
  //     const url = event.url;
  //     // Parse the URL and perform actions based on it
  //     Alert.alert("Deep Link", `URL: ${url}`);
  //     console.log("Url from deep link ",url,"\n\n===",event);
      
  //     // You can use something like react-navigation to navigate based on the URL
  //   };

  //   // Listen for incoming deep links
  //   Linking.addEventListener('url', handleUrl);

  //   // Handle the case where the app is opened with a URL
  //   Linking.getInitialURL().then(url => {
  //     if (url) handleUrl({ url });
  //   });

   
  // }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Set Alarms"
        onPress={() => {
          const minutesNow = new Date().getMinutes();
          const hourNow = new Date().getHours();
          for (let i = 0; i < 8; i++) {
            Alarms.setAlarm(hourNow, minutesNow + i, `Alarm ${i}`, i);
            console.log("Alarm set for", minutesNow + i);
          }
        }}
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