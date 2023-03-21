import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Colors, Constants, Text, View, TextField, Badge, TouchableOpacity } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeHeader = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <View bg-green20 style={styles.header}>
            <View row centerV spread paddingH-20>
                <TouchableOpacity row centerV>
                    <Icon name="map-marker" size={18} color={Colors.white} />
                    <Text white text70M marginL-3>
                        Biên Hòa, Đồng Nai
                    </Text>
                    <Icon name="chevron-right" size={18} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="bell" size={24} color={Colors.white} />
                    <Badge label="2" backgroundColor="#FFC107" containerStyle={{ marginRight: 16, position: 'absolute', top: -6, right: -24 }} />
                </TouchableOpacity>
            </View>
            <View row centerV style={styles.searchContainer}>
                <View style={styles.searchIcon}>
                    <Icon name="magnify" size={24} color={Colors.grey10} />
                </View>
                <TextField placeholder="Tìm kiếm món ăn, quán ăn, địa điểm" placeholderTextColor={Colors.grey30} text70M style={styles.searchInput} />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            // contentContainerStyle
            >
                <View row centerV spread paddingH-20>
                    <TouchableOpacity centerH onPress={() => setSelectedIndex(0)}>
                        <Icon name="food" size={20} color={selectedIndex === 0 ? Colors.white : Colors.green50} />
                        <Text text80M marginH-6 marginT-3 color={selectedIndex === 0 ? Colors.white : Colors.green50}>
                            Tất cả
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity centerH onPress={() => setSelectedIndex(1)}>
                        <Icon name="noodles" size={20} color={selectedIndex === 1 ? Colors.white : Colors.green50} />
                        <Text text80M marginH-6 marginT-3 color={selectedIndex === 1 ? Colors.white : Colors.green50}>
                            Món nóng
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity centerH onPress={() => setSelectedIndex(2)}>
                        <Icon name="food" size={20} color={selectedIndex === 2 ? Colors.white : Colors.green50} />
                        <Text text80M marginH-6 marginT-3 color={selectedIndex === 2 ? Colors.white : Colors.green50}>
                            Thức ăn nhanh
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity centerH onPress={() => setSelectedIndex(3)}>
                        <Icon name="cupcake" size={20} color={selectedIndex === 3 ? Colors.white : Colors.green50} />
                        <Text text80M marginH-6 marginT-3 color={selectedIndex === 3 ? Colors.white : Colors.green50}>
                            Bánh ngọt
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity centerH onPress={() => setSelectedIndex(4)}>
                        <Icon name="cup" size={20} color={selectedIndex === 4 ? Colors.white : Colors.green50} />
                        <Text text80M marginH-6 marginT-3 color={selectedIndex === 4 ? Colors.white : Colors.green50}>
                            Nước uống
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity centerH onPress={() => setSelectedIndex(5)}>
                        <Icon name="coffee" size={20} color={selectedIndex === 5 ? Colors.white : Colors.green50} />
                        <Text text80M marginH-6 marginT-3 color={selectedIndex === 5 ? Colors.white : Colors.green50}>
                            Cà phê
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity centerH onPress={() => setSelectedIndex(6)}>
                        <Icon name="food-apple" size={20} color={selectedIndex === 6 ? Colors.white : Colors.green50} />
                        <Text text80M marginH-6 marginT-3 color={selectedIndex === 6 ? Colors.white : Colors.green50}>
                            Trái cây
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
export default HomeHeader

const styles = StyleSheet.create({
    header: {
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        justifyContent: 'space-evenly',
    },
    searchContainer: {
        backgroundColor: Colors.white,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        overflow: 'hidden'
    },
    searchIcon: {
        borderRadius: 5,
        marginRight: 10,
    },
    searchInput: {
        color: Colors.grey10,
    },
});