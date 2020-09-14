import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {

    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
<<<<<<< HEAD
      alert('Você está abaixo do peso! \n' + 'IMC ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc< 24.9) {
      alert('Peso ideal! \n' + ' IMC ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Levemente acima do peso! \n' + 'IMC ' + imc.toFixed(2));
=======
      alert('Você está abaixo do peso! ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      alert('Peso ideal! ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Levemente acima do peso! ' + imc.toFixed(2));
>>>>>>> 7fe3d1cc601b67edde88a26086ec2eb51e0bec00
    }


  }


  return (
    <View style={sytles.container}>
      <Text style={sytles.titulo}>Calcule seu IMC</Text>

      <TextInput style={sytles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (kg)"
        keyboardType="numeric"
      />

      <TextInput style={sytles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity style={sytles.button}
        onPress={handleSubmit}


      >



        <Text style={sytles.buttonText} >Calcular</Text>


      </TouchableOpacity>



    </View>
  );

}

const sytles = StyleSheet.create({

  container: {
    flex: 1

  },
  titulo: {

    textAlign: 'center',
    marginTop: 40,
    fontSize: 30
  },

  input: {
    backgroundColor: '#d8d8d8',
    borderRadius: 10,
    margin: 9,
    padding: 10,
    color: '#151515',
    fontSize: 23,

  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    backgroundColor: '#88889b',
    padding: 10,

  },

  buttonText: {

    color: '#FFF',
    fontSize: 25,


  }





});
