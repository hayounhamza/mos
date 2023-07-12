import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors, fontSize, fontFamily } from '../../style';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';

function Header({ title = 'Search' }) {
    const theme = React.useContext(ThemeContext);

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.openDrawer();
    };

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 10,
                paddingHorizontal: 12,
            }}>
            <TouchableOpacity onPress={openDrawer} style={{ width: 30 }}>
                <Icon name="menu" size={30} color={colors.white} />
            </TouchableOpacity>
            <Text
                style={{
                    color: colors.white,
                    ...fontFamily['regular'],
                    ...fontSize['base'],
                }}>
                {title}
            </Text>
            <View style={{ width: 30 }}></View>
        </View>
    );
}

export default Header;
