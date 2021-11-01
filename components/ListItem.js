import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listitem}>
      <View style={styles.listitemview}>
          <Text style={styles.listitemtext}>{item.text}</Text>
          <FontAwesome name="remove" size={20} color="firebrick" style={styles.remove} onPress={() => deleteItem(item.id)} />
      </View>
      
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  listitem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#ddd'
  },
  listitemview: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  listitemtext: {
      fontSize: 18,
  },
  remove: {
      paddingTop: 4,
      paddingBottom: 4,
      paddingRight: 10,
      paddingLeft: 10,
  }

})

export default ListItem;