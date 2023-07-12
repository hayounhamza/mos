import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { SelectList } from '../../components/DropDownSelect';
import { getCities } from '../../api/Trips';
import { colors, fontSize, fontFamily } from '../../style';
function Header(props) {
    const [dep, setDep] = React.useState(null);
    const [dest, setDest] = React.useState(null);
    const [cities, setCites] = React.useState([]);
    const [defaultDep, setDefaultDep] = React.useState({});

    React.useEffect(() => {
        getCities()
            .then(({ data }) => {
                setCites(
                    data.map((el) => {
                        return {
                            key: el.id,
                            value: el.name,
                        };
                    }),
                );
            })
            .catch((err) => {
                // alert(JSON.stringify(err));
                alert('Someting went wrong, Please try again later.');
            });
    }, []);

    // React.useEffect(() => {
    //     // setDep(props.selectedDep);
    //     // setDest(props.selectedDest);
    //     const selectedDep = cities.find((el) => el.key == dep);
    //     setDefaultDep(selectedDep);
    //     alert(JSON.stringify(selectedDep));
    // }, [dep]);

    const submit = () => {
        props.dataChanges(dep, dest);
    };

    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <SelectList
                    defaultOption={defaultDep}
                    setSelected={(val) => setDep(val)}
                    data={cities}
                    boxStyles={{
                        backgroundColor: colors.white,
                        borderWidth: 0,
                        borderRadius: 8,
                    }}
                    dropdownStyles={{ backgroundColor: colors.white }}
                    icon={
                        <Icon
                            name="map-pin"
                            size={16}
                            color={colors['grey-dark']}
                        />
                    }
                    placeholder="Depart"
                />
            </View>
            <View style={{ marginBottom: 20 }}>
                <SelectList
                    setSelected={(val) => setDest(val)}
                    data={cities}
                    boxStyles={{
                        backgroundColor: colors.white,
                        borderWidth: 0,
                        borderRadius: 8,
                    }}
                    dropdownStyles={{ backgroundColor: colors.white }}
                    icon={
                        <Icon
                            name="map-pin"
                            size={16}
                            color={colors['grey-dark']}
                        />
                    }
                    placeholder="Destination"
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                    disabled={!dep || !dest}
                    onPress={submit}
                    style={{
                        backgroundColor: colors.green,
                        paddingVertical: 8,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                    }}>
                    <Text
                        style={{
                            color: '#fff',
                            ...fontSize['base'],
                            ...fontFamily['regular'],
                        }}>
                        Search
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Header;
