import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function App(){
  const [name, setName] = useState('');
  const [members, setMembers] = useState<string[]>([]);
  function handleSubmit() {
    setMembers(m => [name, ...m]);
    setName('');
  }
  return (
    <View style={styled.container}>
      <Text key={1} style={styled.title}>
        Nome do evento
      </Text>
      <Text key={2} style={styled.subtitle}>
        Sexta, 4 de Novembro de 2022.
      </Text>
      <View style={styled.containerinput}>
        <TextInput placeholder='Nome do participante' placeholderTextColor={'#6B6B6B'} style={styled.input} onChangeText={setName} value={name}/>
        <TouchableOpacity style={styled.buttonadd} onPress={handleSubmit}>
          <Text style={styled.labelButton}>
            +
          </Text>
        </TouchableOpacity>
      </View>
        {members.map((name, index) => {
          console.log(name + index);
          return (
            <Text key={name + index} style={styled.subtitle}>
              {name}
            </Text>
          );
        })}
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    backgroundColor: '#131016', flex: 1, paddingHorizontal: 24, paddingVertical: 25
  },
  title: {
    color: '#FDFCFE', fontSize: 24, lineHeight: 28.13, fontWeight: '700'
  },
  subtitle: {
    color: '#6B6B6B', fontSize: 16, lineHeight: 18.75, fontWeight: '400'
  },
  input: {
    flex: 1, height: 56, borderRadius: 4, backgroundColor: '#1F1E25', color: '#FDFCFE', alignItems: 'center',paddingHorizontal: 16, fontSize: 14,
  },
  containerinput: {
    flexDirection: 'row', alignItems: 'center', marginTop: 34, gap: 7
  },
  buttonadd: {
    alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 4, backgroundColor: '#31CF67'
  },
  labelButton: {
    color: '#fff', fontSize: 24, lineHeight: 24, fontWeight: '400'
  },
})