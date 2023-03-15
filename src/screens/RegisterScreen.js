import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Colors } from '../contants';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        navigation.navigate('Login')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <Input
                placeholder="Name"
                value={name}
                onChangeText={setName}
                leftIcon={{ type: 'font-awesome', name: 'user' }}
            />
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            />
            <Input
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                leftIcon={{ type: 'font-awesome', name: 'phone' }}
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
            />
            <Input
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
            />
            <Button title="Register" onPress={handleRegister} containerStyle={styles.buttonContainer} buttonStyle={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
