import React , { useState } from 'react';
import { StyleSheet, Text, View , TextInput , Button , TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Form = function(props){
    const [input , setInput] = useState('');

    
    return (
      <View style={styles.inputContainer}>
          <TextInput style= {styles.Textinput}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={()=> props.submitHandler(input)}>
            <AntDesign size={30} name='pluscircle' color='red'/>
        </TouchableOpacity>
      </View>
    )

}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
   
  Textinput: {
     height: 30,
     width: 200,
     backgroundColor: 'white',
     borderRadius: 15,
     margin:5,
     padding: 5 
    },
    
  
  });
  

export default Form;