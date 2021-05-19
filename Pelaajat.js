import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image,  } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'




 export default function Pelaajat() {

   const [pelaaja, setPelaaja]  = useState([
      {
         name: 'Eetu Leppänen',
         imgUrl: 'https://img-cdn.hltv.org/playerbodyshot/OVhRUsvJAkuLroQLfDdqGb.png?ixlib=java-2.1.0&w=400&s=22c3958846f10065e40447be33cf14eb',
         id: '1',
         rooli: 'Kapteenin oikea käsi'
      },
      {
          name: 'Matti Meikäläinen',
          imgUrl: 'https://img-cdn.hltv.org/playerbodyshot/ZLG0M9-Y1Qh3fpcVlKiPSq.png?ixlib=java-2.1.0&w=400&s=96533ebb271bcf9e923ad3a61574d723',
          id: '2',
          rooli: 'Kapteenin vasen käsi'
       },
       {
          name: 'Jasper Palmu',
          imgUrl: 'https://img-cdn.hltv.org/playerbodyshot/XrOWRACzHSb71Dul1WFXyo.png?ixlib=java-2.1.0&w=400&s=418c18e543618d5c2de30ea34206ed5b',
          id: '3',
          rooli: 'Kapteeni'
       },
       {
          name: 'Teppo Winnipeg',
          imgUrl: 'https://img-cdn.hltv.org/playerbodyshot/MlU-FvS0jxq7tGkQZmuy9F.png?ixlib=java-2.1.0&w=400&s=5a14b8b67ed91d2c3a553d807e724ba4',
          id: '4',
          rooli: 'Tarkka-ampuja'
       },
       {
          name: 'Jari-Matti Terävä',
          imgUrl: 'https://img-cdn.hltv.org/playerbodyshot/wJVcKueX-L0b9lOvKUAiUE.png?ixlib=java-2.1.0&w=400&s=c51f573ba211f35551366c95af4adfaa',
          id: '5',
          rooli: 'Neuvonantaja'
         }
   ]);
  

    return (
      <FlatList
      style={{ flex: 1 }}
      data={pelaaja}
      inverted
      keyExtriactor={(time, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <View>
            <View style={styles.container}>
              <View style={{ backgroundColor: '#529FF3', margin: 0, flex: 1, width: '100%', }}>
                {!!item.name && (
                  <Text
                    style={{
                      paddingVertical: 8,
                      fontSize: 17,
                      paddingStart: 0,
                      paddingEnd: 5,
                      color: 'black',
                    }}>
                    {item.name}                       {item.rooli}
                  </Text>
                )}
                {item.imgUrl && (
                  <Image
                    source={{ uri: item.imgUrl }}
                    style={{ height: 100, width: 100 }}
                  />
                )}
              </View>
            </View>
          </View>
        );
      }}
    />
);
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingHorizontal: 0,
      padding: 5,
      margin: 1,
     

   },
   item: {
      marginTop: 24,
      borderWidth: 5,
      borderColor: '#fff',
      padding: 30,
      backgroundColor: '#fff',
      fontSize: 30
      
   }
})




   


