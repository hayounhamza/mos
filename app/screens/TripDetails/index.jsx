import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import Container from '../../components/Container';
import Header from '../../components/Header';
import TripRow from '../../components/TripRow';
import SearchPanel from '../../components/SearchPanel';
import { colors, fontSize, fontFamily } from '../../style';
import { getTrips } from '../../api/Trips';

function TripDetails({ navigation, route }) {
    const { dep, dest } = route.params;
    const [trips, setTrips] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [selectedDep, setSelectedDep] = React.useState(null);
    const [selectedDest, setSelectedDest] = React.useState(null);
    React.useEffect(() => {
        setSelectedDep(dep);
        setSelectedDest(dest);

        getTrips(dep, dest)
            .then(({ data }) => {
                let trips = data.trips;
                trips.sort(function (a, b) {
                    return a.d_time.localeCompare(b.d_time);
                });
                setTrips(trips);
            })
            .catch((err) => {
                alert('Someting went wrong, Please try again later.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [dep, dest]);

    const fetchTrips = (dep, dest) => {
        navigation.navigate('TripDetails', {
            dep,
            dest,
        });
    };

    if (loading) {
        return (
            <Container>
                <Header />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        paddingBottom: 120,
                    }}>
                    <ActivityIndicator color={colors.white} size="large" />
                </View>
            </Container>
        );
    }

    return (
        <Container>
            <Header />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 150 }}
                style={{ paddingHorizontal: 12, paddingTop: 50 }}>
                <SearchPanel
                    selectedDep={selectedDep}
                    selectedDest={selectedDest}
                    dataChanges={fetchTrips}
                />

                <View style={{ marginTop: 50 }}></View>
                <Text
                    style={{
                        color: colors.white,
                        ...fontSize['2xs'],
                        textAlign: 'center',
                        marginBottom: 8,
                    }}>
                    Mosafir.ma is not responsible for any delays, changes, or
                    cancelled trips.
                </Text>
                {trips.length == 0 ? (
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text
                            style={{
                                color: colors.white,
                                ...fontSize['xl'],
                                textAlign: 'left',
                                ...fontFamily['bold'],
                            }}>
                            Opps..
                        </Text>
                        <Text
                            style={{
                                color: colors.white,
                                ...fontSize['xl'],
                                textAlign: 'left',
                                marginBottom: 30,
                                ...fontFamily['regular'],
                            }}>
                            No trips found, please try again later.
                        </Text>
                    </View>
                ) : (
                    trips.map((trip, index) => (
                        <View style={{ marginBottom: 10 }} key={trip.id}>
                            <TripRow trip={trip} />
                        </View>
                    ))
                )}
            </ScrollView>
        </Container>
    );
}

export default TripDetails;
