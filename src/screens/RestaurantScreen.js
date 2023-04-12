import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, StatusBar, ScrollView } from 'react-native';
import { View, Text, Image, Colors, Badge, TouchableOpacity } from 'react-native-ui-lib';
import { FoodCard } from '../components'
import { RESTAURANTS, FOODS, CATEGORIES } from '../data'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

const RestaurantScreen = (props) => {
    const { restaurantId } = props.route.params;
    const restaurant = RESTAURANTS.find(item => item.id == restaurantId)
    const foods = FOODS.filter(item => item.restaurantId == restaurantId)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isFav, setIsFav] = useState(false);
    useEffect(() => {
        props.navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerStyle: {
                backgroundColor: 'transparent',
                borderBottomWidth: 0,
                elevation: 0,
            },
            headerTintColor: Colors.white,
            headerTitle: '',
            headerRight: () => (
                <View row centerV>
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <Ionicons name='search' size={30} color={Colors.white} style={styles.icon} />
                    </TouchableOpacity >
                    <TouchableOpacity>
                        <Ionicons name='share-outline' size={30} color={Colors.white} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [props.navigation, isFav]);

    return (
        <View flex-1>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ScrollView>
                <Image
                    source={restaurant.image}
                    style={styles.backgroundImage}
                />
                <View style={styles.infoContainer}>
                    <View row spread centerV>
                        <Text style={styles.name}>{restaurant.name}</Text>
                        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setIsFav(!isFav)}>
                            <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={35} color={Colors.red30} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <Text marginT-10 grey30 text70 >{restaurant.tags.join('  •  ')}</Text>
                    <View row centerV marginT-10>
                        <View row centerV marginR-10>
                            <Icon name="star" size={18} color={Colors.yellow20} />
                            <Text style={[styles.infoText, { fontWeight: 600 }]}>{restaurant.rating}</Text>
                        </View>
                        <Text grey10 text70>{Math.floor(restaurant.reviewCount / 100) * 100}+ đánh giá</Text>
                    </View>
                    <View row spread centerV marginT-6>
                        <View row centerV>
                            <Badge label="$" backgroundColor={Colors.green}></Badge>
                            <Text style={styles.infoText}> Free Delivery</Text>
                        </View>
                        <View row centerV>
                            <Icon name="clock-o" size={20} color={Colors.blue40} style={styles.infoIcon} />
                            <Text style={styles.infoText}>{restaurant.deliveryTime} phút</Text>
                        </View>
                        <TouchableOpacity style={styles.phoneBtn}>
                            <Icon name="phone" size={20} color={Colors.yellow20} />
                            <Text style={[styles.infoText, styles.phoneText]}>Liên Hệ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View flex-1 bg-white paddingH-10>
                    <View style={styles.filterContainer}>
                        <FlatList
                            data={[{ id: 0, name: 'Tất cả' }, ...CATEGORIES]}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.categoriesContainer}
                            renderItem={({ item }) => (
                                <TouchableOpacity padding-14 onPress={() => setSelectedIndex(`${item.id}`)}>
                                    <Text style={styles.filterTitle} opacity={selectedIndex == item.id ? 1 : 0.3}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <FlatList
                        data={foods}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <FoodCard key={item.id} item={item} navigation={props.navigation} />
                        }
                        scrollEnabled={false}
                    />

                </View>
            </ScrollView>
        </View>
    );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        top: 0,
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    infoContainer: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 16,
        paddingTop: 20,
        marginTop: -24,
        flex: 1,
        elevation: 5
    },
    name: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.dark10
    },
    infoText: {
        marginLeft: 6,
        fontSize: 16,
        color: Colors.dark10,
    },
    tagText: {
        fontSize: 15,
        color: Colors.grey20
    },
    phoneBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: Colors.yellow80,
        borderColor: Colors.yellow40,
    },
    phoneText: {
        color: Colors.yellow20,
        fontWeight: '600',
        marginTop: -2
    },
    filterContainer: {
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: Colors.yellow60,
        marginTop: 20,
        marginBottom: 12,
        marginRight: -20,
        marginLeft: 6
    },
    filterTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.dark
    }
});    