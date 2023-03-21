import React, { useState } from 'react';
import {
    Switch,
    View,
    TextField,
    Button,
    Text,
    Checkbox,
    TouchableOpacity,
    Modal,
    Colors
} from 'react-native-ui-lib';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const LoginScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpOrPassword, setOtpOrPassword] = useState('');
    const [isOtpLogin, setIsOtpLogin] = useState(true);
    const [showOtpField, setShowOtpField] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleLogin = () => {
        navigation.navigate('MainTabs')
    };

    const handleForgotPassword = () => {
        setShowModal(true);
    };

    const handleResetPassword = () => {
        setShowModal(false);
    };

    const handleSignup = () => {
        navigation.navigate('Register')
    };

    const handleSendOTP = () => {
        setShowOtpField(true);
    };

    const handleSwitchLoginMethod = () => {
        setIsOtpLogin(!isOtpLogin);
        setShowOtpField(false);
        setOtpOrPassword('');
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View flex paddingH-25 paddingT-20 >
            <Text text60 marginB-20>
                Đăng nhập
            </Text>
            <View row marginB-20 centerV>
                <Text marginR-10>Đăng nhập bằng:</Text>
                <Switch value={isOtpLogin} onValueChange={handleSwitchLoginMethod} />
                <Text marginL-10>{isOtpLogin ? 'OTP' : 'Mật khẩu'}</Text>
            </View>
            <View row marginB-20 centerV>
                <FontAwesomeIcon name="phone" size={20} color={Colors.grey30} style={{ marginRight: 10, width: 20 }} />
                <TextField
                    placeholder="Nhập số điện thoại"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>
            {showOtpField && (
                <View row marginB-20 centerV>
                    <FontAwesomeIcon name="key" size={20} color={Colors.grey30} style={{ marginRight: 10, width: 20 }} />
                    <TextField
                        placeholder="Nhập OTP"
                        keyboardType="numeric"
                        value={otpOrPassword}
                        onChangeText={setOtpOrPassword}
                    />
                </View>
            )}

            {!isOtpLogin && (
                <View>
                    <View row marginB-20 centerV spread>
                        <View row centerV>
                            <FontAwesomeIcon name="lock" size={20} color={Colors.grey30} style={{ marginRight: 10, width: 20 }} />
                            <TextField
                                placeholder="Nhập mật khẩu"
                                secureTextEntry={!isPasswordVisible}
                                value={otpOrPassword}
                                onChangeText={setOtpOrPassword}
                            />
                        </View>
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <FontAwesomeIcon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} color={Colors.grey30} />
                        </TouchableOpacity>
                    </View>
                    <View row marginB-10 centerV spread>
                        <View row centerV>
                            <Checkbox
                                value={rememberPassword}
                                onValueChange={setRememberPassword}
                                marginR-10
                            />
                            <Text>Nhớ mật khẩu</Text>
                        </View>
                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text text80 green20 marginL-10>
                                Quên mật khẩu?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Button label="Đăng nhập" onPress={handleLogin} />
                    <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
                        <View padding-25>
                            <Text text60 marginB-20>
                                Đặt lại mặt khẩu
                            </Text>
                            <TextField
                                placeholder="Nhập địa chỉ email"
                                marginB-20
                            />
                            <Button label="Gửi mã" onPress={handleResetPassword} />
                        </View>
                    </Modal>
                </View>
            )}
            {isOtpLogin && (
                <Button
                    label={!showOtpField ? 'Gửi OTP' : 'Đăng nhập'}
                    onPress={!showOtpField ? handleSendOTP : handleLogin}
                />
            )}
            <View row marginT-20 centerV>
                <Text text80>
                    Bạn chưa có tài khoản?
                </Text>
                <TouchableOpacity onPress={handleSignup}>
                    <Text text80 green20 marginL-5>
                        Đăng ký
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;