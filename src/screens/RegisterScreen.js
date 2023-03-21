import React, { useState } from 'react';
import { View, TextField, Button, Text, TouchableOpacity, Colors, Checkbox } from 'react-native-ui-lib';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [isAgreeLicience, setAgreeLicience] = useState(false);


    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };


    const handleLogin = () => {
        navigation.navigate('Login')
    };

    const handleRegister = () => {
    };

    return (
        <View flex paddingH-25 paddingT-20>
            <Text text60 marginB-20 centerV >
                Đăng ký tài khoản
            </Text>
            <View row marginB-20 centerV>
                <FontAwesomeIcon name="user" size={20} color={Colors.grey30} style={{ marginRight: 10, width: 20 }} />
                <TextField
                    placeholder="Họ và tên"
                    keyboardType="default"
                    onChangeText={(value) => setFullName(value)}
                />
            </View>
            <View row marginB-20 centerV>
                <FontAwesomeIcon name="phone" size={20} color={Colors.grey30} style={{ marginRight: 10, width: 20 }} />
                <TextField
                    placeholder="Số điện thoại"
                    keyboardType="phone-pad"
                    onChangeText={(value) => setPhoneNumber(value)}
                />
            </View>
            <View row marginB-20 centerV>
                <FontAwesomeIcon name="envelope" size={20} color={Colors.grey30} style={{ marginRight: 10, width: 20 }} />
                <TextField
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={(value) => setEmail(value)}
                />
            </View>
            <View row marginB-20 centerV>
                <FontAwesomeIcon name="map-marker" size={20} color={Colors.grey30} style={{ marginRight: 10, width: 20 }} />
                <TextField
                    placeholder="Địa chỉ"
                    keyboardType="default"
                    onChangeText={(value) => setAddress(value)}
                />
            </View>
            <View row marginB-20 centerV spread>
                <View row centerV >
                    <FontAwesomeIcon name="lock" size={20} color={Colors.grey30} style={{ marginRight: 10, width: 20 }} />
                    <TextField
                        placeholder="Mật khẩu"
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={(value) => setPassword(value)}
                    />
                </View>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <FontAwesomeIcon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} color={Colors.grey30} />
                </TouchableOpacity>
            </View>
            <View row marginB-20 centerV spread>
                <View row centerV >
                    <FontAwesomeIcon name="lock" size={20} color={Colors.grey30} style={{ marginRight: 10, width: 20 }} />
                    <TextField
                        placeholder="Xác nhận mật khẩu"
                        secureTextEntry={!isConfirmPasswordVisible}
                        onChangeText={(value) => setConfirmPassword(value)}
                    />
                </View>
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                    <FontAwesomeIcon name={isConfirmPasswordVisible ? 'eye' : 'eye-slash'} size={20} color={Colors.grey30} />
                </TouchableOpacity>
            </View>
            <View row centerV marginB-20>
                <Checkbox
                    marginR-10
                    value={isAgreeLicience}
                    onValueChange={setAgreeLicience}
                />
                <Text text80 grey20>Tôi đồng ý với các </Text>
                <TouchableOpacity>
                    <Text text80 green20>
                        Chính sách và Điều khoản
                    </Text>
                </TouchableOpacity>
            </View>
            <Button label="Đăng ký" onPress={handleRegister} />
            <View row marginT-20 centerV>
                <Text text80>
                    Bạn đã có tài khoản?
                </Text>
                <TouchableOpacity onPress={handleLogin}>
                    <Text text80 green20 marginL-5>
                        Đăng nhập
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterScreen;