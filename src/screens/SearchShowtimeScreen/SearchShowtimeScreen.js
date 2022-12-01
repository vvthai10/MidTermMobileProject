import react from "react";
import { Text, Button, StyleSheet, TouchableOpacity, ScrollView, View } from "react-native";
import DateFilm from "../../components/DateFilm/DateFilm";

const showtime = [
    {
        name: 'ONE PIECE FILM RED',
        room: 'i4',
        date: '04-02-2022',
        hour: '12:00:00',
    },
];

const SearchShowtimeScreen = (props) => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();

    const getDate = (date) => {
        return (
            <ScrollView>
                <View >
                    {date.map((dateItem, id) => {
                        return <DateFilm key={id} item={dateItem} />;
                    })}
                </View>
            </ScrollView>
        )
    };
    return (
        <ScrollView>
            <ScrollView horizontal style={styles.categoryContainer}>
                {showtime.map((showtimeItem, id) => {
                    return <DateFilm key={id} item={showtimeItem} />;
                })}
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
    },
    svg: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        top: -170,
    },
    bodyContainer: {
        marginTop: 60,
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        flex: 1,
        textAlign: 'center',
        marginEnd: 30,
    },
    getDateContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Constants.textColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
    },
    getDate: {
        color: Constants.textColor,
        fontSize: 16,
    },
});

export default SearchShowtimeScreen;