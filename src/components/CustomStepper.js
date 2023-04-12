import React from 'react';
import { StyleSheet, } from 'react-native';
import { TouchableOpacity, Text, Colors, Badge, View } from 'react-native-ui-lib';

const CustomStepper = ({ value, minValue, maxValue, onValueChange }) => {
    const decrement = () => {
        if (value > minValue) {
            onValueChange(value - 1);
        }
    }

    const increment = () => {
        if (value < maxValue) {
            onValueChange(value + 1);
        }
    }

    return (
        <TouchableOpacity marginL-64 row style={{ width: 90 }}>
            <TouchableOpacity onPress={decrement}>
                <Badge
                    label="-"
                    size={25}
                    labelStyle={[styles.labelStyle, { color: Colors.grey40 }]}
                    borderWidth={1}
                    backgroundColor={Colors.white}
                    borderColor={Colors.grey40}
                />
            </TouchableOpacity>
            <View center flex-1>
                <Text style={styles.value}>{value}</Text>
            </View>
            <TouchableOpacity onPress={increment}>
                <Badge
                    label="+"
                    size={25}
                    labelStyle={styles.labelStyle}
                    backgroundColor={Colors.yellow20}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default CustomStepper;

const styles = StyleSheet.create({
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.grey10,
        textAlign: 'center'
    },
    labelStyle: {
        marginTop: 5,
        fontSize: 20
    }
});
