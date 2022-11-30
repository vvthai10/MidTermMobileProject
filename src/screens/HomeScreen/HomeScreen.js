import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

import ListCardFilm from '../../components/ListCardFilm';
import CategoryFilm from '../../components/CategoryFilm';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useTopMovies } from '../../hooks/useMovies';
import ListMovies from '../../../assets/data/listMovies';
const HomeScreen = () => {
    // const theme = useTheme();
    const item = {
        name: 'OnePiece Red Film',
        image: 'https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/k/e/keyvisual_for_promotion-01_1_.jpg',
        premiere: '11/10/2022',
    };

    const category = [
        {
            name: 'Phim kinh dị',
            type: 'kinh_di',
            icon: MaterialCommunityIcons,
            iconName: 'ghost',
        },
        {
            name: 'Phim hành động',
            type: 'hanh_dong',
            icon: MaterialCommunityIcons,
            iconName: 'run-fast',
        },
        {
            name: 'Phim hoạt hình',
            type: 'hoat_hinh',
            icon: MaterialCommunityIcons,
            iconName: 'koala',
        },
        {
            name: 'Phim phiêu lưu',
            type: 'phieu_luu',
            icon: MaterialCommunityIcons,
            iconName: 'map-search',
        },
        {
            name: 'Phim hài',
            type: 'hai',
            icon: MaterialIcons,
            iconName: 'theater-comedy',
        },
        {
            name: 'Phim lịch sử',
            type: 'lich_su',
            icon: Entypo,
            iconName: 'back-in-time',
        },
    ];

    const [movies] = useTopMovies();
    // console.log(movies);

    // const movies = ListMovies.filter(GetDateBefore).filter((movie) => movie.category.includes("Phim"));

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text>LOGO CGV</Text>
            <View style={styles.sliderContainer}>
                <Swiper autoplay height={200} activeDotColor="#FF6347">
                    <View style={styles.slide}>
                        <Image
                            source={{
                                uri: item.image,
                            }}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={{
                                uri: item.image,
                            }}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <ScrollView horizontal style={styles.categoryContainer}>
                {category.map((categoryItem, id) => {
                    return <CategoryFilm key={id} item={categoryItem} />;
                })}
            </ScrollView>

            <View style={styles.cardsWrapper}>
                <Text>Phim nổi bật</Text>
                <ListCardFilm movies={movies} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        paddingBottom: 10,
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
});

export default HomeScreen;
