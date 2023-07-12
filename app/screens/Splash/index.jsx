import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import Container from '../../components/Container';

function App() {
    return (
        <Container>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: '50%', resizeMode: 'contain' }}
                />
            </View>
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

export default App;
