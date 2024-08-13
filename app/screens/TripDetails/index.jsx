import React from 'react';
import {
    ActivityIndicator,
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
import {
    BannerAd,
    BannerAdSize,
    InterstitialAd,
    AdEventType,
} from 'react-native-google-mobile-ads';

function TripDetails({ navigation, route }) {
    const { dep, dest } = route.params;
    const [trips, setTrips] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [selectedDep, setSelectedDep] = React.useState(null);
    const [selectedDest, setSelectedDest] = React.useState(null);

    const interstitial = InterstitialAd.createForAdRequest(
        'ca-app-pub-4543204757787590/2291123397',
    );

    React.useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(
            AdEventType.LOADED,
            () => {
                interstitial.show();
            },
        );

        interstitial.load();

        return unsubscribe;
    }, [dep, dest]);
   
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
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 50,
                    marginBottom: 12,
                }}>
                <BannerAd
                    size={BannerAdSize.BANNER}
                    unitId="ca-app-pub-4543204757787590/5773667867"
                    onAdLoaded={() => {}}
                    onAdFailedToLoad={(error) => {}}
                />
            </View>
             
            <ScrollView
                contentContainerStyle={{ paddingBottom: 150 }}
                style={{ paddingHorizontal: 12 }}>
                <SearchPanel
                    selectedDep={selectedDep}
                    selectedDest={selectedDest}
                    dataChanges={fetchTrips}
                />

                <View
                    style={{
                        marginTop: 20,
                        paddingHorizontal: 80,
                        marginBottom: 20,
                    }}>
                    <Text
                        style={{
                            color: colors.white,
                            ...fontSize['2xs'],
                            textAlign: 'center',
                            marginBottom: 8,
                        }}>
                        Mosafir.ma is not responsible for any delays, changes,
                        or cancelled trips.
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 12,
                    }}>
                    <BannerAd
                        size={BannerAdSize.BANNER}
                        unitId="ca-app-pub-4543204757787590/5773667867"
                        onAdLoaded={() => {}}
                        onAdFailedToLoad={(error) => {}}
                    />
                </View>
                {trips.length == 0 ? (
                    <View style={{ paddingHorizontal: 10, marginTop: 40 }}>
                        <Text
                            style={{
                                color: colors.white,
                                ...fontSize['xl'],
                                textAlign: 'center',
                                ...fontFamily['bold'],
                            }}>
                            Opps..
                        </Text>
                        <Text
                            style={{
                                color: colors.white,
                                ...fontSize['xl'],
                                textAlign: 'center',
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
