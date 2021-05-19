import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Input, Button, ListItem } from 'react-native-elements';


const db = SQLite.openDatabase('pelaajaadb.db');

export default function App() {
  const [tapot, setTapot] = useState('');
  const [kuolemat, setKuolemat] = useState('');
  const [kartta, setKartta] = useState('');
  const [pelaajat, setPelaajat] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists pelaajaa (id integer primary key not null, tapot int, kuolemat int, kartta text);');
    });
    updateList();    
  }, []);

  // Save course
  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into pelaajaa (tapot, kuolemat, kartta) values (?, ?, ?);', [parseInt(tapot), parseInt(kuolemat), kartta]);    
      }, null, updateList
    )
  }

  // Update courselist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from pelaajaa;', [], (_, { rows }) =>
        setPelaajat(rows._array)
      ); 
    });
  }

  // Delete course
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from pelaajaa where id = ?;`, [id]);
      }, null, updateList
    )    
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    
    <View style={styles.container}>
      
      <Input placeholder='Kartta'   style={{ height: 5,
    width: '90%',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#00B8D4',
    borderRadius: 7,
    marginTop: 70,}}
        onChangeText={(kartta) => setKartta(kartta)}
        value={kartta}/>  

      <Input placeholder='Tapot' keyboardType="numeric"  style={{ height: 45,
    width: '90%',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#00B8D4',
    borderRadius: 7,
    marginTop: 15,}}
        onChangeText={(tapot) => setTapot(tapot)}
        value={tapot}/>      

      <Input placeholder='Kuolemat' keyboardType="numeric"  style={{ height: 45,
    width: '90%',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#00B8D4',
    borderRadius: 7,
    marginTop: 15,}}
        onChangeText={(kuolemat) => setKuolemat(kuolemat)}
        value={kuolemat}/>      

      <Button onPress={saveItem} title="TALLENNA"/> 
      <Text style={{marginTop: 30, fontSize: 20}}>Päiväkirjan avulla voit tallentaa suorituksesi myöhempää tarkastelua varten!</Text>
      <FlatList 
        data={pelaajat}
        ItemSeparatorComponent={listSeparator} 
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 15, textAlign: 'center', marginLeft: 5, marginRight: 20}}>{item.kartta}, Tapot = {item.tapot}, Kuolemat = {item.kuolemat}, KD = {item.tapot / item.kuolemat}</Text>
        <Button title="Poista" onPress={() => deleteItem(item.id) }></Button>
        </View>
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
 },
 listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  fontSize: 25,
 },
});