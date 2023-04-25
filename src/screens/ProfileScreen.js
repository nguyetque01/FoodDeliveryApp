import { StyleSheet } from 'react-native'
import { View, Button } from 'react-native-ui-lib';
import React from 'react'
import { useSelector } from 'react-redux';

const ProfileScreen = ({ navigation }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <View center flex-1>
            {isLoggedIn ?
                <View>
                    <Button label="Thông tin cá nhân" onPress={() => navigation.navigate("UserInfo")} />
                </View> :
                <>
                    <View>
                        <Button label="Đăng nhập" onPress={() => navigation.navigate("Login")} />
                    </View>
                    <View marginT-40>
                        <Button label="Đăng ký" onPress={() => navigation.navigate("Register")} />
                    </View>
                </>
            }
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
