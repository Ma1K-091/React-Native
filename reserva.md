import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
return (
<SafeAreaProvider>
<SafeAreaView style={styles.safeArea}>
<StatusBar barStyle="default" />
<View style={styles.container}>
<View style={styles.topSection}>
<View style={styles.card}>
<View style={styles.cabecalhocartao}>
<Image
source={{
                    uri: 'https://startse-uploader.s3.us-east-2.amazonaws.com/elon_musk_Getty_Images_1234732042_45ec92133b.jpg',
                  }}
style={styles.imagem}
/>
<Text style={styles.nome}>
{' '}
Elon Musk{' '}
</Text>
</View>
<Text style={styles.descricao}>
empresario, criador da tesla, spacex e dono do x, primeiro
trilionario da historia.
</Text>
</View>
</View>

          <View style={styles.middleSection}> </View>
          <View style={styles.bottomSection}> </View>
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
card: {
width: 360,
backgroundColor: '#D3D3D3',
borderRadius: 15,
padding: 12,
},
cabecalhocartao: {
flexDirection: 'row',
alignItems: 'center',
},
imagem: {
width: 90,
height: 90,
borderRadius: 18,
},
nome: {
fontWeight: 'bold',
fontSize: 20,
},
descricao: {
fontSize: 14,
marginTop: 10,
},
middleSection: {
flex: 2,
backgroundColor: 'white',
},
bottomSection: {
flex: 1,
backgroundColor: 'white',
},
});
