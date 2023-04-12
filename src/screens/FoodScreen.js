import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import { View, Text, TouchableOpacity, Image, Colors, Badge } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { FOODS, RESTAURANTS } from '../data';

const FoodScreen = (props) => {
    const { foodId } = props.route.params;
    const food = FOODS.find((item) => item.id == foodId);
    const restaurant = RESTAURANTS.find(restaurant => restaurant.id === food.restaurantId);
    const [isFav, setIsFav] = useState(food.isFav);
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
                    <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setIsFav(!isFav)}>
                        <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={30} color={Colors.red30} style={styles.icon} />
                    </TouchableOpacity>
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
        <View flex-1 bg-white>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ScrollView>
                <Image source={food.image} style={styles.backgroundImage} />
                <View style={styles.infoContainer}>
                    <View row spread>
                        <Text style={styles.name}>{food.name}</Text>
                        <Text marginT-4 style={styles.price}>{food.price.toLocaleString()} VNĐ</Text>
                    </View>
                    <View row centerV spread marginV-12>
                        <View row centerV>
                            <Icon name="star" size={20} color={Colors.yellow20} />
                            <Text dark10 marginL-6 style={{ fontSize: 18, fontWeight: 600 }}>{food.rating}</Text>
                            <Text style={styles.infoText}>({food.reviewCount})</Text>
                        </View>
                        <View row centerV>
                            <Icon name="clock-o" size={20} color={Colors.blue40} style={styles.infoIcon} />
                            <Text style={styles.infoText}>{restaurant.deliveryTime} phút</Text>
                        </View>
                        <View row centerV>
                            <Badge label="$" backgroundColor={Colors.green}></Badge>
                            <Text style={[styles.infoText, { marginLeft: 3 }]}> Free Delivery</Text>
                        </View>
                    </View>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionTitleContainer}>
                            <Text style={styles.sectionTitle}>Mô tả</Text>
                        </View>
                        <Text style={styles.sectionContent}>{food.description}</Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionTitleContainer}>
                            <Text style={styles.sectionTitle}>Thành phần</Text>
                        </View>
                        <FlatList
                            data={food.ingredients}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.ingredientItem}>
                                    <Icon name="check-circle" size={20} color={Colors.primary} />
                                    <Text style={styles.ingredientText}>{item}</Text>
                                </View>
                            )}
                            scrollEnabled={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        shadowColor: Colors.dark10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    backgroundImage: {
        top: 0,
        width: '100%',
        height: 320,
        resizeMode: 'cover',
    },
    infoContainer: {
        backgroundColor: Colors.white,
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.dark10,
    },
    price: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.yellow10
    },
    infoText: {
        marginLeft: 6,
        fontSize: 16,
        color: Colors.grey20,
    },
    sectionContainer: {
        marginBottom: 20,
    },
    sectionTitleContainer: {
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: Colors.grey50,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.dark20,

    },
    sectionContent: {
        fontSize: 16,
        color: Colors.dark30,
    },
    ingredientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    ingredientText: {
        fontSize: 16,
        color: Colors.dark30,
        marginLeft: 10,
    }
});

export default FoodScreen;    