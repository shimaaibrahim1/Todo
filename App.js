import React ,{ useState } from 'react';
import Form from './components/form';
import Filters from './components/filters';
import { StyleSheet, Text, View , TextInput , Button , TouchableOpacity, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [ todoList , settodoList] = useState([]);
  const [ mode , setMode ] = useState('all')
  let todo = []


  if (mode == 'all'){
    todo = todoList
  }else if(mode == 'active'){
    todo = todoList.filter(item => item.is_active == true)
  }else{
    todo = todoList.filter(item => item.is_active == false)
  }
  
  const submitHandler = (text)=> {
    const key = todoList.length ? todoList.length+1 : 1;
    settodoList((list)=>{
      return [
        {text:text, key: key , is_active: true},...list
      ]})
    }


  const clickHandler = (key)=>{
    settodoList((list)=>{
      return list.map((item)=>{
        if(item.key == key){
          item.is_active = !item.is_active
        }
        return item
      })
    })
  }

  const modeHandler = (mode)=>{
    setMode((mod)=> mod = mode)
  }

  console.log(mode)

  return (
    <View style={styles.container}>
        <Text style={ styles.header}>BABY SHARK</Text>
        <Text style={styles.text}>TODO-dododododododoo</Text>
        <Form submitHandler={submitHandler}/>
        <Filters  modeHandler ={modeHandler}/>
        
        <FlatList
        data={todo}
        keyExtractor={item =>item.key}
        renderItem={({item})=>
          <TouchableOpacity onPress={()=>clickHandler(item.key) }>
             <View style={{flexDirection:'row'}}>
              <AntDesign size={20} name= {item.is_active == true? 'minussquareo':'plussquareo' }  color='red'/>
            <Text style={item.is_active == true? styles.text : styles.textline }>{item.text}</Text>
            </View>
          </TouchableOpacity>
        }
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:200,
    backgroundColor: '#110032',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    color: 'red',
    fontWeight:'bold'
  },
  text: {
    fontSize:20,
    color: 'white',
    margin: 3

  },
  textline: {
    fontSize: 20,
    color: 'red',
    margin: 3,
    textDecorationLine: 'line-through'

  }
  
 
});
