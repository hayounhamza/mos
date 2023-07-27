import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, fontSize, fontFamily } from '../../style';

function TripRow({ trip }) {
    const [expanded, setExpanded] = React.useState(false);

    const toggleDetails = () => {
        setExpanded((v) => {
            return !v;
        });
    };

    return (
        <>
            <View
                style={{
                    minHeight: 60,
                    paddingVertical: 4,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                }}>
                <TouchableOpacity
                    onPress={toggleDetails}
                    style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 8,
                        }}>
                        <Text
                            style={{
                                textTransform: 'uppercase',
                                color: colors['grey-dark'],
                                ...fontSize['sm'],
                            }}>
                            {trip.bus}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                        }}>
                        <Text
                            style={{
                                color: colors['grey-dark'],
                                ...fontSize['2xs'],
                                ...fontFamily['regular'],
                            }}>
                            Departure
                        </Text>
                        <Text
                            style={{
                                color: colors.green,
                                ...fontSize['xs'],
                                ...fontFamily['medium'],
                            }}>
                            {trip.d_time}
                        </Text>
                        <Text
                            style={{
                                color: colors['grey-dark'],
                                ...fontSize['2xs'],
                                ...fontFamily['regular'],
                                textTransform: 'uppercase',
                            }}>
                            {trip.d_city}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                        }}>
                        <Text
                            style={{
                                color: colors['grey-dark'],
                                ...fontSize['xs'],
                                ...fontFamily['regular'],
                            }}>
                            {trip.duration}
                        </Text>
                        <Text
                            style={{
                                color: colors['grey-dark'],
                                ...fontSize['xs'],
                                ...fontFamily['regular'],
                            }}>
                            {trip.stations_nb} Stops
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                        }}>
                        <Text
                            style={{
                                color: colors['grey-dark'],
                                ...fontSize['2xs'],
                                ...fontFamily['regular'],
                            }}>
                            Arrival
                        </Text>
                        <Text
                            style={{
                                color: colors.green,
                                ...fontSize['xs'],
                                ...fontFamily['medium'],
                            }}>
                            {trip.a_time}
                        </Text>
                        <Text
                            style={{
                                color: colors['grey-dark'],
                                ...fontSize['2xs'],
                                ...fontFamily['regular'],
                                textTransform: 'uppercase',
                            }}>
                            {trip.a_city}
                        </Text>
                    </View>
                </TouchableOpacity>
                {/*  */}
                {expanded && (
                    <View
                        style={{
                            paddingHorizontal: 12,
                            marginTop: 16,
                            flexDirection: 'row',
                        }}>
                        <View style={{ flex: 1 }}>
                            {trip.stations.map((station, index) => (
                                <View
                                    key={index}
                                    style={{
                                        borderStartWidth: 1,
                                        borderStyle: 'dotted',
                                        borderStartColor: colors.green,
                                        height: 40,
                                        position: 'relative',
                                        padding: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={{
                                            width: 8,
                                            height: 8,
                                            backgroundColor: colors.green,
                                            borderRadius: 1000,
                                            position: 'absolute',
                                            left: -5,
                                        }}></View>
                                    <Text
                                        style={{
                                            color: colors['grey-dark'],
                                            ...fontSize['xs'],
                                            ...fontFamily['regular'],
                                            marginEnd: 10,
                                        }}>
                                        {station.time}
                                    </Text>
                                    <Text
                                        style={{
                                            color: colors['grey-dark'],
                                            ...fontSize['xs'],
                                            ...fontFamily['regular'],
                                            textTransform: 'uppercase',
                                        }}>
                                        {station.city}
                                    </Text>
                                </View>
                            ))}
                        </View>

                        <View style={{ paddingTop: 10 }}>
                            {/*  */}
                            {trip.services.highway && (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginBottom: 6,
                                    }}>
                                    <Icon
                                        name="highway"
                                        size={18}
                                        color={colors.green}
                                    />
                                    <Text
                                        style={{
                                            color: colors['grey-dark'],
                                            ...fontSize['xs'],
                                            ...fontFamily['regular'],
                                            marginTop: 1,
                                            marginStart: 6,
                                        }}>
                                        Highway
                                    </Text>
                                </View>
                            )}
                            {/*  */}
                            {trip.services.climate && (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginBottom: 6,
                                    }}>
                                    <Icon
                                        name="air-conditioner"
                                        size={18}
                                        color={colors.green}
                                    />
                                    <Text
                                        style={{
                                            color: colors['grey-dark'],
                                            ...fontSize['xs'],
                                            ...fontFamily['regular'],
                                            marginTop: 1,
                                            marginStart: 6,
                                        }}>
                                        Air Conditioner
                                    </Text>
                                </View>
                            )}
                            {/*  */}
                            {trip.services.wifi && (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginBottom: 6,
                                    }}>
                                    <Icon
                                        name="wifi"
                                        size={18}
                                        color={colors.green}
                                    />
                                    <Text
                                        style={{
                                            color: colors['grey-dark'],
                                            ...fontSize['xs'],
                                            ...fontFamily['regular'],
                                            marginTop: 1,
                                            marginStart: 6,
                                        }}>
                                        Free WIFI
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                )}
            </View>
        </>
    );
}

export default TripRow;
