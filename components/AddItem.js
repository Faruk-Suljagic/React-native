import React, {useCallback, useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


const AddItem = ({title, addItem}) => {
    const [text, setText] = useState("")
    
    const clearInput = () => {
        setText("")
    }
 
    const onChange = (textVal) => setText(textVal)
    
  return (
    <View >
      <TextInput onChangeText={onChange} value={text} placeholder="Add Item..." style={styles.input}>{title}</TextInput>
      <TouchableOpacity onPress={() => {addItem(text), clearInput()}} style={styles.btn}><Text style={styles.btnText}><FontAwesome onPress={clearInput} name='plus' size={20} /> Add</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
 
  input: {
    height: 60,
    fontSize: 16,
    padding: 8,
  },
  btn: {
    backgroundColor: '#c2bad8',
  },
  btnText: {
      color: 'darkslateblue',
      fontSize: 20,
      textAlign: 'center',
      padding: 9,
    margin: 5,
  }
  
  
})

export default AddItem;