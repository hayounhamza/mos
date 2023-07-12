import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';

import { colors, fontSize, fontFamily } from '../../style';
import { contactForm } from '../../api/Trips';

function HomeScreen({ navigation }) {
    const [name, onChangeName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [message, onChangeMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const submit = () => {
        setLoading(true);
        contactForm({
            name,
            email,
            message,
        })
            .then((data) => {
                Toast.show({
                    type: 'success',
                    text1: 'Thank Youn!',
                    text2: 'You message has been sent.',
                });
            })
            .catch((err) => {})
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Container>
            <Header />
            <ScrollView>
                <View style={{ paddingHorizontal: 30, marginTop: 50 }}>
                    <View style={{ paddingHorizontal: 0, marginBottom: 30 }}>
                        <Text
                            style={{
                                color: colors.white,
                                ...fontSize['3xl'],
                                textAlign: 'left',
                                ...fontFamily['regular'],
                                marginTop: 10,
                            }}>
                            You Have Any Question ? Feel Free To Contact Us.
                        </Text>
                    </View>

                    {/* <KeyboardAvoidingView> */}
                    <KeyboardAwareScrollView>
                        <View
                            style={{
                                backgroundColor: colors.white,
                                height: 50,
                                borderRadius: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                                marginBottom: 20,
                            }}>
                            <Icon
                                name="person"
                                size={20}
                                color={colors['grey-darker']}
                            />
                            <TextInput
                                style={{
                                    flex: 1,
                                    height: 50,
                                    backgroundColor: colors.white,
                                    paddingLeft: 10,
                                }}
                                onChangeText={onChangeName}
                                value={name}
                                placeholder="Full Name"
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: colors.white,
                                height: 50,
                                borderRadius: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                                marginBottom: 20,
                            }}>
                            <Icon
                                name="email"
                                size={20}
                                color={colors['grey-darker']}
                            />
                            <TextInput
                                style={{
                                    flex: 1,
                                    height: 50,
                                    backgroundColor: colors.white,
                                    paddingLeft: 10,
                                }}
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder="Email"
                            />
                        </View>
                        <View
                            style={{
                                padding: 5,
                                borderRadius: 0,
                                backgroundColor: colors.white,
                                borderRadius: 5,
                                marginBottom: 20,
                            }}>
                            <TextInput
                                onChangeText={onChangeMessage}
                                style={{
                                    height: 130,
                                    textAlignVertical: 'top',
                                }}
                                underlineColorAndroid="transparent"
                                placeholder="Message"
                                placeholderTextColor="grey"
                                numberOfLines={10}
                                multiline={true}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'start',
                            }}>
                            <TouchableOpacity
                                onPress={submit}
                                style={{
                                    backgroundColor: colors.green,
                                    paddingVertical: 8,
                                    paddingHorizontal: 20,
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                }}>
                                {loading && (
                                    <ActivityIndicator
                                        style={{ marginEnd: 10 }}
                                        color={colors.white}
                                    />
                                )}

                                <Text
                                    style={{
                                        color: '#fff',
                                        ...fontSize['base'],
                                        ...fontFamily['regular'],
                                    }}>
                                    Send Message
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                    {/* </KeyboardAvoidingView> */}

                    {/*  */}
                </View>
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
