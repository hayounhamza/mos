import React from 'react';

import {
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    KeyboardAvoidingView,
} from 'react-native';

export default class Container extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('./images/background.jpg')}
                style={styles.container}>
                <SafeAreaView>
                    {/* <KeyboardAvoidingView> */}
                    {this.props.children}
                    {/* </KeyboardAvoidingView> */}
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
});
