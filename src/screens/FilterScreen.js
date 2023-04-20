import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, FlatList, ScrollView, StatusBar } from 'react-native'
import { Colors, Text, View, TouchableOpacity, Constants, Switch } from 'react-native-ui-lib';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CATEGORIES } from '../data';
import { useDispatch, useSelector } from 'react-redux';

const priceRange = [
    { id: 1, price: '< 50K' },
    { id: 2, price: '50K - 100K' },
    { id: 3, price: '100K - 200K' },
    { id: 4, price: '200K- 500K' },
    { id: 5, price: '> 500K' }
]

const FilterScreen = ({ navigation }) => {
    const [isBrandOn, setIsBrandOn] = useState(false);
    const [isSaleOn, setIsSaleOn] = useState(false);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(1);
    const [selectedRatingIndex, setSelectedRatingIndex] = useState(1);
    const [selectedPriceIndex, setSelectedPriceIndex] = useState(1);

    const dispatch = useDispatch();
    const saveFilter = useCallback(() => {
        const filters = {
            isBrandOn: isBrandOn,
            isSaleOn: isSaleOn,
            categoryIndex: selectedCategoryIndex,
            ratingIndex: selectedRatingIndex,
            priceIndex: selectedPriceIndex
        };
        dispatch({ type: 'SET_FILTER', filters: filters });
    }, [dispatch, isBrandOn, isSaleOn, selectedCategoryIndex, selectedRatingIndex, selectedPriceIndex]);


    const handleSave = () => {
        saveFilter()
        navigation.navigate('FilteredItems')
    }
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View row spread>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <MaterialCommunityIcons name="menu" color={Colors.white} size={32} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => handleSave()} center>
                    <FontAwesome name="save" color={Colors.white} size={32} />
                </TouchableOpacity>
            )
        })
    }, [navigation, isBrandOn, isSaleOn])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"
                backgroundColor={Colors.primary}
                translucent
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.title}>Hiển thị món ăn</Text>
                    <View row marginT-20>
                        <View row>
                            <Text text60M marginR-10>Mới nhất</Text>
                            <Switch
                                value={isBrandOn}
                                onValueChange={value => setIsBrandOn(value)}
                                onColor={Colors.primary}
                            />
                        </View>
                        <View row marginL-48>
                            <Text text60M marginR-10>Khuyến mãi</Text>
                            <Switch
                                value={isSaleOn}
                                onValueChange={value => setIsSaleOn(value)}
                                onColor={Colors.primary}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Danh mục</Text>
                    <View marginT-12>
                        <FlatList
                            data={CATEGORIES}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            scrollEnabled={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setSelectedCategoryIndex(item.id)}
                                    backgroundColor={selectedCategoryIndex == item.id ? Colors.primary : Colors.white}
                                    style={styles.button}
                                >
                                    <Text
                                        color={selectedCategoryIndex == item.id ? Colors.white : Colors.dark}
                                        style={styles.buttonTitle}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>Đánh giá</Text>
                    <View marginT-12>
                        <FlatList
                            data={[1, 2, 3, 4, 5]}
                            keyExtractor={(item) => item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setSelectedRatingIndex(item)}
                                    backgroundColor={selectedRatingIndex == item ? Colors.primary : Colors.grey70}
                                    style={styles.ratingButton}
                                >
                                    <Text
                                        marginR-6
                                        color={selectedRatingIndex == item ? Colors.white : Colors.dark}
                                        style={styles.buttonTitle}
                                    >
                                        {item}
                                    </Text>
                                    <FontAwesome name="star" size={20} color={selectedRatingIndex == item ? Colors.white : Colors.yellow20} />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.title}>Mức giá</Text>
                    <View marginT-12>
                        <FlatList
                            data={priceRange}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => setSelectedPriceIndex(item.id)}
                                    backgroundColor={selectedPriceIndex == item.id ? Colors.primary : Colors.grey70}
                                    style={styles.priceButton}
                                >
                                    <Text
                                        color={selectedPriceIndex == item.id ? Colors.white : Colors.dark}
                                        style={styles.buttonTitle}
                                    >
                                        {item.price}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        backgroundColor: Colors.white,
        flex: 1
    },
    title: {
        marginTop: 24,
        color: Colors.dark,
        fontSize: 24,
        fontWeight: '500'
    },
    button: {
        marginRight: 16,
        marginVertical: 8,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: '500'
    },
    ratingButton: {
        flexDirection: 'row',
        marginRight: 16,
        marginVertical: 8,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceButton: {
        flexDirection: 'row',
        marginRight: 16,
        marginVertical: 8,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});