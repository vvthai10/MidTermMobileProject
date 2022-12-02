import React ,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ShoppingCartScreen = () => {
    // user: token,
    //         filmName: props.filmName,
    //         cinName: props.cinName,
    //         time: props.time,
    //         room: props.room,
    //         idChairs: props.idChairs,
    //         listSeat: props.listSeat,
    //         totalPrice: _total,
    //         date: props.date,
    //         listPickedFood: props.listPickedFood,
    var RNFS = require('react-native-fs');
    var path = RNFS.DownloadDirectoryPath + '/listTicket.json';
    const [listTicket, addListTicket] = useState({})
    RNFS.readFile(path, 'utf8')
        .then((res) => {
            //console.log(res);
            const listTicket = JSON.parse(res);
            addListTicket(listTicket);
            //console.log(listTicket);
        })
        .catch((err) => {
            console.log("Giỏ hàng đang trống!");
        });

    console.log(listTicket[0].user)
    
    return (
        <View>
            <Text>Hello, ShoppingCartScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShoppingCartScreen;
