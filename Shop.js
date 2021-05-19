import { PricingCard } from 'react-native-elements';
import React from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import { Tooltip, Text } from 'react-native-elements';




export default function Shop() {
    return (
        <View style={styles.container}>
        <React.Fragment>
        <PricingCard
  color="#4f9deb"
  title="Ilmainen kokeilu"
  price="NYT 0 €"
  info={['7 päivän kokeilu, jonka jälkeen 12.99 € /kk', 'Ottelut suoratoistona 480p laadulla!', 'Vain rajoitetun ajan ja uusille asiakkaille' ]}
  button={{ title: 'ALOITA ILMAINEN KOKEILU' }}
/>
<Text>{"\n"}{"\n"}</Text>
  <PricingCard
  color="#9532a8"
  title="Jäsenyys"
  price="12.99 € /kk"
  info={['Kaikki yllä mainitut', 'Ottelut suoratoistona 1080p laadulla!', 'Ottelua seuranneiden kesken arvotaan palkintoja!', 'Pelaajien kirjoittama kiitoskirje']}
  button={{ title: 'ALOITA JÄSENYYS' }}
  />

  
  

  </React.Fragment>
  
  </View>


);
    
    
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  

 },
 listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  alignItems: 'center',
  fontSize: 25,
 },
});
