import React, { useState, useEffect, useCallback } from 'react';
import { Alert, StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import { Button, Colors, Text, View, TouchableOpacity, TextField, Image } from 'react-native-ui-lib';
import { VOUCHERS } from '../data';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CheckoutScreen = ({ navigation }) => {
    const cartItems = useSelector(state => state.cartItems)  // Lấy ra danh sách giỏ hàng từ store
    const [voucherCode, setVoucherCode] = useState(""); // voucherCode
    const [discount, setDiscount] = useState(0); // giá trị giảm giá
    const [shippingFee, setShippingFee] = useState(0); // phí vận chuyển
    const dispatch = useDispatch();

    const getSubTotalPrice = () => {
        let subTotalPrice = 0;
        cartItems.forEach(item => {
            subTotalPrice += item.quantity * item.food.price;
        });
        return subTotalPrice;
    };

    const getDiscountPrice = () => {
        return (discount / 100) * getSubTotalPrice();
    };

    const getTotalPrice = () => {
        return getSubTotalPrice() - getDiscountPrice() + shippingFee;
    };


    const applyVoucher = useCallback(() => {
        // Thực hiện kiểm tra mã voucher và tính giá trị giảm giá
        const appliedVoucherItem = VOUCHERS.find(item => item.code === voucherCode);

        if (appliedVoucherItem) {
            setDiscount(appliedVoucherItem.discount);
        } else {
            setDiscount(0);
            // Hiển thị thông báo lỗi nếu mã voucher không đúng
            Alert.alert("Mã voucher không đúng!");
        }
    }, [voucherCode, discount]);


    const onVoucherCodeChange = useCallback((value) => {
        setVoucherCode(value);
    }, []);

    const handleCheckout = () => {
        Alert.alert("Đặt hàng thành công")
        dispatch({ type: 'UPDATE_CART', cartItems: [] })
        navigation.navigate("Orders")
    }

    return (
        <View flex-1 bg-white>
            <StatusBar barStyle="light-content"
                backgroundColor={Colors.primary}
                translucent
            />
            <View flex-1>
                <View marginT-12 paddingH-24 flex-1>
                    <FlatList
                        data={cartItems}
                        keyExtractor={item => item.foodId}
                        renderItem={({ item }) =>
                            <View row spread centerV paddingV-8>
                                <Image source={item.food.image} style={styles.image} />
                                <Text marginL-12 text70M flex-6 numberOfLines={2} ellipsizeMode="tail">{item.food.name}</Text>
                                <Text marginL-16 text70M color={Colors.yellow10}>{item.food.price.toLocaleString()} đ</Text>
                                <Text marginL-8 text70M >x {item.quantity}</Text>
                            </View>
                        }
                        showsVerticalScrollIndicator={false}
                    />
                    <View flex-1></View>
                </View>
                <View paddingH-24 paddingV-12 >
                    <View row center>
                        <View flex-1 marginR-12>
                            <TextField
                                placeholder="Nhập mã voucher"
                                onChangeText={onVoucherCodeChange}
                                value={voucherCode}
                                style={styles.input}
                            />
                        </View>
                        <Button
                            label="Áp dụng"
                            onPress={applyVoucher}
                        />
                    </View>
                    {
                        discount != 0 &&
                        <View paddingT-8>
                            <Text text70M color={Colors.primary}>Áp dụng Voucher thành công giảm giá {discount}%</Text>
                        </View>
                    }
                </View>

                <View paddingH-24>
                    <View row spread>
                        <Text text70M>Tổng:</Text>
                        <Text text70M color={Colors.dark}>{getSubTotalPrice().toLocaleString()}đ</Text>
                    </View>
                    <View row spread>
                        <Text text70M>Giảm giá:</Text>
                        <Text text70M color={Colors.dark}>{discount !== 0 ? '-' : ''} {getDiscountPrice().toLocaleString()}đ</Text>
                    </View>
                    <View row spread>
                        <Text text70M>Phí vận chuyển:</Text>
                        <Text text70M color={Colors.dark}>{shippingFee.toLocaleString()}đ</Text>
                    </View>
                    <View marginT-20 style={{ borderTopWidth: 1, borderTopColor: Colors.grey40 }}>
                        <View row spread marginT-8>
                            <Text text60M color={Colors.primary}>Tổng tiền:</Text>
                            <Text text60M color={Colors.primary}>{getTotalPrice().toLocaleString()}đ</Text>
                        </View>
                    </View>
                </View>

                {/* BOTTOM BAR */}
                <View style={styles.bottomBar}>
                    <TouchableOpacity
                        onPress={() => handleCheckout()}
                        backgroundColor={Colors.primary}
                        style={styles.bottomButton}
                    >
                        <MaterialCommunityIcons name='cart' size={20} color={Colors.white} />
                        <Text
                            color={Colors.white}
                            style={styles.bottomButtonTitle}
                        >
                            Đặt hàng
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    },
    image: {
        top: 0,
        width: 55,
        height: 55,
        resizeMode: 'cover',
        borderRadius: 5
    }
});

export default CheckoutScreen;