import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { Colors } from '../contants';

const LoginScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home')
    };

    return (
        <View style={styles.container}>
            <Icon name="food" type="material-community" size={50} color="#000" />
            <Input
                placeholder="Phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                leftIcon={{ type: 'material', name: 'phone' }}
                containerStyle={styles.inputContainer}
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                leftIcon={{ type: 'material', name: 'lock' }}
                containerStyle={styles.inputContainer}
            />

            <Button title="Login" onPress={handleLogin} containerStyle={styles.buttonContainer} buttonStyle={styles.button} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    inputContainer: {
        marginVertical: 10,
        width: '100%',
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
    button: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 5,
    },
});

export default LoginScreen;
