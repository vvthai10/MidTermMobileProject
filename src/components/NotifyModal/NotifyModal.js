/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const HEIGHT_MODAL = 150;
const WIDTH = Dimensions.get('window').width;
const NotifyModal = (props) => {
    const CloseModal = (bool) => {
        props.changeErrorType(bool);
    };
    return (
        <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.text}>{props.info.title}</Text>
                    <Text style={styles.text}>{props.info.description}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => CloseModal(false)} styles={styles.touchableOpacity}>
                        <Text style={[styles.text, { color: 'blue' }]}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f8f8f8',
    },
    textView: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        borderTopWidth: 1,
        borderTopColor: 'gray',
    },
    touchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderColor: '#e71a0f',
    },
});

export default NotifyModal;
