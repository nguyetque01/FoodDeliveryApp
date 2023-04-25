import React, { useState, useEffect, useCallback } from 'react';
import { Alert, StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import { Button, Colors, Text, View, TouchableOpacity, TextField } from 'react-native-ui-lib';
import { FoodCard } from '../components';
import { VOUCHERCODES } from '../data';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const OrdersScreen = ({ navigation }) => {

    const cartItems = useSelector(state => state.cartItems)  // Lấy ra danh sách giỏ hàng từ store
    const [newCartItems, setNewCartItems] = useState(cartItems) // Tạo danh sách giỏ hàng mới để thay đổi

    const dispatch = useDispatch();

    useEffect(() => {
        // Gán cartItems cho newCartItems
        setNewCartItems(cartItems);
    }, [cartItems]);

    return (
        <View flex-1>
            <StatusBar barStyle="light-content"
                backgroundColor={Colors.primary}
                translucent
            />
            {newCartItems?.length !== 0 &&
                <View>
                    <Text>Đơn hàng</Text>
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
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: Colors.grey20,
        paddingHorizontal: 12,
        borderRadius: 8,
    }
});

export default OrdersScreen;