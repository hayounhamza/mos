import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';

import Container from '../../components/Container';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import { colors, fontSize, fontFamily } from '../../style';
import { getDestinations } from '../../api/Trips';
function HomeScreen({ navigation }) {
    const [destinations, setDestinations] = React.useState([]);

    const fetchTrips = (dep, dest) => {
        navigation.navigate('TripDetails', {
            dep,
            dest,
        });
    };

    React.useEffect(() => {
        getDestinations()
            .then(({ data }) => {
                setDestinations(data);
            })
            .catch((err) => {});
    }, []);

    return (
        <Container>
            <Header />
            <ScrollView style={{ paddingHorizontal: 30 }}>
                <Text
                    style={{
                        color: colors.white,
                        ...fontSize['xl'],
                        textAlign: 'center',
                        marginBottom: 30,
                        ...fontFamily['regular'],
                        marginTop: 60,
                    }}>
                    Find your destination over +16000 trip & explore amzing
                    cities for a perfect day.
                </Text>

                <SearchPanel dataChanges={fetchTrips} />
                <Text
                    style={{
                        color: colors.white,
                        ...fontSize['xl'],
                        textAlign: 'center',
                        marginTop: 60,
                        ...fontFamily['bold'],
                    }}>
                    Explore Morocco.
                </Text>
                <Text
                    style={{
                        color: colors.white,
                        ...fontSize['xl'],
                        textAlign: 'center',
                        marginVertical: 10,
                        ...fontFamily['regular'],
                    }}>
                    Many categories are presented, each containing trip relevant
                    to the main category and ready for you to explore.
                </Text>

                <View
                    style={{
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        paddingBottom: 100,
                    }}>
                    {destinations.map((el, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL(
                                    `https://mosafir.ma/destinations/${el.id}`,
                                );
                            }}
                            style={{
                                width: '33%',
                                height: 100,
                                padding: 6,
                            }}
                            key={index}>
                            <ImageBackground
                                source={{ uri: el.image }}
                                imageStyle={{
                                    borderRadius: 6,
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                }}>
                                <View
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',

                                        borderRadius: 6,
                                    }}></View>
                                <Text
                                    style={{
                                        color: colors.white,
                                        ...fontSize['xs'],
                                        ...fontFamily['bold'],
                                        margin: 4,
                                    }}>
                                    {el.name}
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* <FlatList
                    style={{}}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    // numColumns={4}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                padding: 10,
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    height: 100,
                                    width: 100,
                                }}>
                                <Text>Hellow orld {item}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index}
                /> */}
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
});

export default HomeScreen;
