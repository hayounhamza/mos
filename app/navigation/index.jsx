import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    DrawerContentScrollView,
    DrawerItemList,
    createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';
import TripDetailScreen from '../screens/TripDetails';
import ContactScreen from '../screens/Contact';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { fontSize, colors, fontFamily } from '../style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TripDetails" component={TripDetailScreen} />
        </Stack.Navigator>
    );
}

function CustomDrawerContent(props) {
    const links = [
        {
            label: 'Trips',
            onClick: () => props.navigation.navigate('Root'),
            icon: require(`../assets/bus.png`),
        },
        // {
        //     label: 'Cities',
        //     onClick: () => alert('Cities'),
        //     icon: require(`../assets/cities.png`),
        // },
        {
            label: 'About Us',
            // onClick: () => Linking.openURL('https://mosafir.ma/about-us'),
            onClick: () => Linking.openURL('https://mosafir.ma/about-us'),
            icon: require(`../assets/logo_mini.png`),
        },
        {
            label: 'Contact Us',
            onClick: () => props.navigation.navigate('Contact'),
            icon: require(`../assets/email.png`),
        },
        {
            label: 'Facebook',
            onClick: () =>
                Linking.openURL('https://www.facebook.com/mosafir.ma'),
            icon: require(`../assets/facebook.png`),
        },
        {
            label: 'Terms of Use',
            onClick: () => Linking.openURL('https://mosafir.ma/terms-of-use'),
            icon: require(`../assets/cpp.png`),
        },
        {
            label: 'Privacy Policy',
            onClick: () => Linking.openURL('https://mosafir.ma/privacy-policy'),
            icon: require(`../assets/lock.png`),
        },
    ];

    return (
        <View
            {...props}
            style={{
                paddingHorizontal: 10,
                paddingVertical: 8,
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
            }}>
            <View style={{}}>
                <Image
                    source={require('../assets/logo_dark.png')}
                    style={{ width: '40%', height: 60, resizeMode: 'contain' }}
                />

                {links.map((el, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={el.onClick}
                        style={{
                            borderRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 10,
                            height: 40,
                            marginBottom: 5,
                        }}>
                        <Image
                            source={el.icon}
                            style={{
                                marginEnd: 6,
                                marginTop: -3,
                                width: 20,
                                resizeMode: 'contain',
                            }}
                        />
                        <Text
                            style={{
                                ...fontSize['sm'],
                                ...fontFamily['regular'],
                                marginStart: 15,
                                color: colors.black
                            }}>
                            {el.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 40,
                    borderTopWidth: 0.2,
                    borderTopColor: colors['grey-lighter'],
                }}>
                <Image
                    source={require('../assets/logo_gray.png')}
                    style={{
                        marginEnd: 6,
                        marginTop: -3,
                        width: 60,
                        resizeMode: 'contain',
                    }}
                />
                <Text
                    style={{
                        ...fontSize['2xs'],
                        textAlign: 'center',
                        color: colors['grey-light'],
                    }}>
                    ©2023 Mosafir.ma
                </Text>
            </View>

            {/* <View style={{ padding: 4 }}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Root')}
                    style={{
                        padding: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <Icon
                        name="directions-bus"
                        size={20}
                        color={colors['grey-darker']}
                    />
                    <Text style={{ ...fontSize['lg'], marginStart: 4 }}>
                        Trips
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Contact')}
                    style={{
                        padding: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <Icon
                        name="email"
                        size={20}
                        color={colors['grey-darker']}
                    />
                    <Text style={{ ...fontSize['lg'], marginStart: 4 }}>
                        Contact
                    </Text>
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    ...fontSize['xs'],
                    textAlign: 'center',
                    color: colors['grey-dark'],
                }}>
                ©2023 Mosafir.ma
            </Text> */}
        </View>
    );
}

function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Root"
                    component={Root}
                    options={{ headerShown: false }}
                />
                <Drawer.Screen name="Contact" component={ContactScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
