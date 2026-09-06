import { StyleSheet,View,StatusBar,TouchableOpacity,} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function Index() {
  const [corVermelhaVert, setCorVermelhaVert] = useState('black');
  const [corAmarelaVert, setCorAmarelaVert] = useState('black');
  const [corVerdeVert, setCorVerdeVert] = useState('black');

  const [corVermelhaHorz, setCorVermelhaHorz] = useState('black');
  const [corAmarelaHorz, setCorAmarelaHorz] = useState('black');
  const [corVerdeHorz, setCorVerdeHorz] = useState('black');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="default" />
        <View style={styles.container}>
          <View style={styles.topSection}></View>

          <View style={styles.middleSection}>
            <View style={styles.semafarovertical}>
              <TouchableOpacity onPress={() => setCorVermelhaVert('red')}>
                <View style={[styles.luzvermelhavert, { backgroundColor: corVermelhaVert }]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCorAmarelaVert('yellow')}>
                <View style={[styles.luzamarelavert, { backgroundColor: corAmarelaVert }]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCorVerdeVert('green')}>
                <View style={[styles.luzverdevert, { backgroundColor: corVerdeVert }]} />
              </TouchableOpacity>
            </View>

            <View style={styles.semafarohorizontal}>
              <TouchableOpacity onPress={() => setCorVermelhaHorz('red')}>
                <View style={[styles.luzvermelhahori, { backgroundColor: corVermelhaHorz }]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCorAmarelaHorz('yellow')}>
                <View style={[styles.luzamarelahori, { backgroundColor: corAmarelaHorz }]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCorVerdeHorz('green')}>
                <View style={[styles.luzverdehori, { backgroundColor: corVerdeHorz }]} />
              </TouchableOpacity>
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
    borderColor: '#4d4d4d',
  },
  luzvermelhavert: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4d4d4d',
  },
  luzamarelavert: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4d4d4d',
  },
  luzverdevert: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4d4d4d',
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
    borderColor: '#4d4d4d',
  },
  luzvermelhahori: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4d4d4d',
  },
  luzamarelahori: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4d4d4d',
  },
  luzverdehori: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4d4d4d',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});
