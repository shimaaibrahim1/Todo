import React , { useState } from 'react';
import { StyleSheet, Text, View , TextInput , Button , TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Filters = function(props){

    return (
        <View style={styles.fcontainer}>
        <TouchableOpacity style= {styles.btn} onPress={()=>props.modeHandler('all')}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.btn} onPress={()=>props.modeHandler('active')}>
          <Text>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.btn} onPress={()=>props.modeHandler('done')}>
          <Text>Done</Text>
        </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    fcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    btn: {
        color: 'red',
        backgroundColor: 'white',
        margin: 8,
        padding:6,
        width:55,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center'
    
    
      }
    
   
  
  });
  

export default Filters;