import { StyleSheet,View,StatusBar,} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

export default function Index() {
    const [luzAtivaVert, setLuzAtivaVert] = useState(0);
    const [luzAtivaHorz, setLuzAtivaHorz] = useState(0);

    useEffect(() => {
    const intervaloVert = setInterval(() => {
      setLuzAtivaVert((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(intervaloVert);
  }, []);

  useEffect(() => {
    const intervaloHorz = setInterval(() => {
      setLuzAtivaHorz((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(intervaloHorz);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="default" />
        <View style={styles.container}>
          <View style={styles.topSection}></View>

          <View style={styles.middleSection}>
            <View style={styles.semafarovertical}>
              
              <View style={[styles.luzvermelhavert, { opacity: luzAtivaVert === 0 ? 1 : 0.1 }]} />
              <View style={[styles.luzamarelavert, { opacity: luzAtivaVert === 1 ? 1 : 0.1 }]} />
              <View style={[styles.luzverdevert, { opacity: luzAtivaVert === 2 ? 1 : 0.1 }]} />
              
            </View>

            <View style={styles.semafarohorizontal}>
              
              <View style={[styles.luzvermelhahori, { opacity: luzAtivaHorz === 0 ? 1 : 0.1 }]} />
              <View style={[styles.luzamarelahori, { opacity: luzAtivaHorz === 1 ? 1 : 0.1 }]} />
              <View style={[styles.luzverdehori, { opacity: luzAtivaHorz === 2 ? 1 : 0.1 }]} />
              
            </View>
            
          </View>
          <View style={styles.bottomSection}></View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'White',
  },
  container: {
    flex: 1,
  },
  topSection: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  semafarovertical: {
    width: 80,
    height: 250,
    backgroundColor: 'gray',
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'black',
  },
  luzvermelhavert: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'black',
    opacity: 0.1,
    backgroundColor: 'red',

    
  },
  luzamarelavert: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'black',
    opacity: 0.1,
    backgroundColor: 'yellow',
  
    
  },
  luzverdevert: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'black',
    opacity: 0.1,
    backgroundColor: 'green',

    
  },
  semafarohorizontal: {
    width: 250,
    height: 80,
    backgroundColor: 'gray',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 70,
    borderRadius: 12,
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'black',
  },
  luzvermelhahori: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'black',
    opacity: 0.1,
    backgroundColor: 'red',

  },
  luzamarelahori: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'black',
    opacity: 0.1,
    backgroundColor: 'yellow',

    
  },
  luzverdehori: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'black',
    opacity: 0.1,
    backgroundColor: 'green',
    
  },
  bottomSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});
