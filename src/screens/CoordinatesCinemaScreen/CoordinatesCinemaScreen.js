import React from 'react';
import { View, Text, StyleSheet, Image, Linking, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo.png';
const CoordinatesCinemaScreen = () => {
    const listCinema = [
        {
            city: 'Hồ Chí Minh',
            cinemas: [
                {
                    name: 'CGV Vincom Center Landmark 81',
                    address:
                        'Tầng B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình P.22, Q, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam',
                    coordinate: 'https://goo.gl/maps/qhV4Dwn4MCcsxVAy5',
                },
                {
                    name: 'CGV Sư Vạn Hạnh',
                    address:
                        'Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh 700000, Việt Nam',
                    coordinate: 'https://goo.gl/maps/NmYqdSHJZWNyhB1F9',
                },
                {
                    name: 'CGV Hùng Vương Plaza',
                    address:
                        'Parkson Hung Vuong Plaza, 126 Hồng Bàng, Phường 12, Quận 5, Thành phố Hồ Chí Minh, Việt Nam',
                    coordinate: 'https://goo.gl/maps/MDrQgU71Jcw6vsN47',
                },
            ],
        },
        {
            city: 'Hà Nội',
            cinemas: [
                {
                    name: 'CGV Vincom Nguyễn Chí Thanh',
                    address: 'Vincom Center, L6, số 54A Đ. Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội, Việt Nam',
                    coordinate: 'https://goo.gl/maps/35q5g3nW8J5VVux18',
                },
                {
                    name: 'CGV Vincom Center Bà Triệu',
                    address: 'Vincom Center, Tầng 6, 191 P. Bà Triệu, Lê Đại Hành, Hai Bà Trưng, Hà Nội, Việt Nam',
                    coordinate: 'https://goo.gl/maps/HP9Sb1XL3AHVyqSU7',
                },
                {
                    name: 'CGV Vincom Royal City',
                    address:
                        'TTTM Vincom Mega Mall Royal City, 72A Đ. Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội, Việt Nam',
                    coordinate: 'https://goo.gl/maps/gRFngefje6cEDZ6NA',
                },
            ],
        },
        {
            city: 'Đà Nẵng',
            cinemas: [
                {
                    name: 'CGV Vincom Đà Nẵng',
                    address:
                        'Tầng 4 Trung tâm Thương Mại Vincom Đà Nẵng, Q, Ng. Quyền, An Hải Bắc, Sơn Trà, Đà Nẵng, Việt Nam',
                    coordinate: 'https://goo.gl/maps/ySybPMcncagcQp5Y6',
                },
                {
                    name: 'CGV Vĩnh Trung Plaza',
                    address: 'Vĩnh Trung Plaza, Vĩnh Trung, Thanh Khê, Đà Nẵng, Việt Nam',
                    coordinate: 'https://goo.gl/maps/zEaaR9nH3h9ppqfh7',
                },
            ],
        },
        {
            city: 'Quảng Ngãi',
            cinemas: [
                {
                    name: 'CGV Vincom Quảng Ngãi',
                    address: 'Nghĩa Chánh Nam, Quảng Ngãi, Việt Nam',
                    coordinate: 'https://goo.gl/maps/jNCyV6ES2AGub8J39',
                },
            ],
        },
    ];
    return (
        <ScrollView style={styles.container}>
            <View
                style={[
                    styles.logo,
                    { maxHeight: 60, borderBottomWidth: 1 },
                    { alignItems: 'center', justifyContent: 'center', padding: 20 },
                ]}
            >
                <Image
                    style={[styles.logo, { height: 30 }, { alignItems: 'center', justifyContent: 'center' }]}
                    source={Logo}
                    resizeMode="contain"
                />
                <Text>Kênh đặt vé lớn nhất Việt Nam</Text>
            </View>
            <Text style={styles.title}>Danh sách rạp chiếu phim</Text>
            {listCinema.map((itemCity, index) => {
                return (
                    <View key={index} style={styles.containerCity}>
                        <Text style={styles.textCity}>{itemCity.city}</Text>
                        <View horizontal>
                            {itemCity.cinemas.map((cinema, i) => {
                                return (
                                    <View key={i} style={styles.containercinema}>
                                        <Text style={styles.namecinema}>{cinema.name}</Text>

                                        <Text
                                            style={styles.addresscinema}
                                            onPress={() => Linking.openURL(cinema.coordinate)}
                                        >
                                            {cinema.address}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: '#e71a0f',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    containerCity: {
        paddingLeft: 10,
        borderTopWidth: 1,
        borderColor: '#333',
        borderRadius: 5,
        paddingVertical: 10,
    },
    textCity: {
        color: 'gray',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    containercinema: {
        borderLeftWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginBottom: 15,
        marginHorizontal: 5,
    },
    namecinema: {
        color: '#e71a0f',
        fontWeight: 'bold',
    },
    addresscinema: {
        color: 'rgb(110,100,255)',
    },
});

export default CoordinatesCinemaScreen;
