import {Text, View} from 'react-native';

export default function App() {
  // comentários
  return (
    <View style={{backgroundColor: '#131016', flex: 1, paddingHorizontal:24, paddingVertical:25,}}>
      <Text key={1} style={{color: '#FDFCFE', fontSize: 24, lineHeight: 28.13, fontWeight: '700'}}>
        Nome do evento
      </Text>
      <Text key={2} style={{color: '#6B6B6B', fontSize: 16, lineHeight: 18.75, fontWeight: '400'}}>
        Sexta, 4 de Novembro de 2022.
      </Text>
    </View>
  );
}