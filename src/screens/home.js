import * as React from 'react';
import { StyleSheet, Text, View,  Image, TouchableOpacity, ScrollView } from 'react-native';


let items=[{name: "Apple Watch" , description: "Series 6. Red", price :"$ 359,00" },
            {name: "Apple Watch" , description: "Series 6. Red", price :"$ 359,00" },
            {name: "Apple Watch" , description: "Series 6. Red", price :"$ 359,00" },
            {name: "Apple Watch" , description: "Series 6. Red", price :"$ 359,00" }];
let itemList=[];
items.forEach((item,index)=>{   
  itemList.push(
  <View style={styles.card}>
    <Image style={styles.image} source={require('../images/apple_watch.png')} />
    <View style={styles.infoProduct}>
        <Text style={{fontWeight: 'bolder',  fontSize: 20,}}>item.name</Text>
        <Text style={{color: '#868686'}}>item.description</Text>
        <Text style={{fontWeight: 'bolder', color: '#5956E9'}}>item.price</Text>
    </View>
</View>)
})


export function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <View>

                <TouchableOpacity onPress={() => navigation.navigate('History')}>
                    <Image style={styles.hamburger} source={require('../images/hamburger.png')} />
                </TouchableOpacity>

                <Text style={styles.homeFont}>Order online choose the product</Text>

                <Text style={{ color: '#9A9A9D', fontSize: 15, marginTop: 10 }}>Phones</Text>
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
               {itemList}
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Raleway",
        marginTop: 50,
        margin: 6
    },
    homeFont: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 45,
    },
    hamburger: {
        width: '7%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    card: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    image: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    infoProduct:{
        margin: 10,
        color: '#000000',
        fontWeight: 'bold',
        justifyContent: 'center',
    }
    
});

