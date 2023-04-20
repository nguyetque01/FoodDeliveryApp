import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import { Button, Colors, Text, View, TouchableOpacity } from 'react-native-ui-lib';
import { FoodCard } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
    // Lấy ra danh sách giỏ hàng từ store
    const cartItems = useSelector(state => state.cartItems)

    // Tạo danh sách giỏ hàng mới để thay đổi
    const [newCartItems, setNewCartItems] = useState([])

    // Gán cartItems cho newCartItems mỗi khi tải màn hình
    useEffect(() => {
        setNewCartItems(cartItems);
    }, [cartItems]);

    const dispatch = useDispatch();
    // Cập nhật lên store mỗi khi giỏ hàng thay đổi
    const onQuantityChange = useCallback((foodId, food, quantity) => {
        setNewCartItems(prevCartItems => {
            const newCartItems = [...prevCartItems];
            const index = newCartItems.findIndex(item => item.foodId === foodId);
            if (quantity === 0) {
                if (index !== -1) {
                    newCartItems.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng
                    dispatch({ type: 'DELETE_FROM_CART', foodId: foodId })
                }
            } else {
                if (index === -1) {
                    newCartItems.push({ foodId, quantity, food });
                } else {
                    newCartItems[index].quantity = quantity;
                }
                dispatch({ type: 'UPDATE_CART', cartItems: newCartItems })
            }
            console.log(newCartItems)
            return newCartItems;
        });
    }, [dispatch, newCartItems]);

    return (
        <View flex-1>
            <StatusBar barStyle="light-content"
                backgroundColor={Colors.primary}
                translucent
            />
            {newCartItems?.length !== 0 &&
                <View bg-white flex-1>
                    <ScrollView>
                        <View marginT-12 paddingH-12 flex-1>
                            <FlatList
                                data={newCartItems}
                                keyExtractor={item => item.foodId}
                                renderItem={({ item }) =>
                                    <FoodCard
                                        item={item.food}
                                        navigation={navigation}
                                        showDeleteButton={true}
                                        showQuantity={true}
                                        initialQuantity={item.quantity}
                                        onQuantityChange={value => onQuantityChange(item.foodId, item.food, value)}
                                    />
                                }
                                scrollEnabled={false}
                            />
                        </View>
                        <View flex-1></View>
                    </ScrollView>
                    <View style={styles.bottomBar}>
                        <TouchableOpacity
                            onPress={() => null}
                            backgroundColor={Colors.primary}
                            style={styles.bottomButton}
                        >
                            <MaterialCommunityIcons name='cart' size={20} color={Colors.white} />
                            <Text
                                color={Colors.white}
                                style={styles.bottomButtonTitle}
                            >
                                Thanh Toán
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            {newCartItems?.length === 0 &&
                <View flex-1 center>
                    <Text text60M center marginH-40 marginB-16>Chưa có món ăn nào được thêm vào giỏ hàng!</Text>
                    <Button
                        label="Xem địa điểm và món ăn"
                        onPress={() => navigation.navigate("Xem tất cả")}
                    />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: Colors.white
    },
    bottomButton: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButtonTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 8
    }
});

export default CartScreen;