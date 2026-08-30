import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="default" />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 360,
                backgroundColor: '#D3D3D3',
                borderRadius: 15,
                padding: 12,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{
                    uri: 'https://startse-uploader.s3.us-east-2.amazonaws.com/elon_musk_Getty_Images_1234732042_45ec92133b.jpg',
                  }}
                  style={{ width: 90, height: 90, borderRadius: 18 }}
                />
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {'      '}
                  Elon Musk{' '}
                </Text>
              </View>
              <Text style={{ fontSize: 14, marginTop: 10 }}>
                empresario, criador da tesla, spacex e dono do x, primeiro
                trilionario da historia.
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, backgroundColor: 'white' }}></View>
          <View style={{ flex: 1, backgroundColor: 'white' }}></View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}