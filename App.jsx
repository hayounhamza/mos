import React from 'react';
import Navigation from './app/navigation';
import SideMenu from '@chakrahq/react-native-side-menu';
import { Text, View } from 'react-native';
import { ThemeContext } from './app/context/ThemeContext';
import Toast from 'react-native-toast-message';

function menu() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

function App() {
    const [theme, setTheme] = React.useState({ menuOpen: false });

    return (
        // <ThemeContext.Provider value={theme}>
        // <SideMenu isOpen={false} menu={menu}>
        <>
            <Navigation />
            <Toast />
        </>
        // </SideMenu>
        // </ThemeContext.Provider>
    );
}

export default App;
