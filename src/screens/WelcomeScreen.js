import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors, General } from '../contants'
import { WelcomeCard, Separator } from '../components'
import { Display } from '../utils'

const Pagination = () => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
        </View>
    );
};

export default function WelcomeScreen({ navigation }) {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0);
    const welcomeList = useRef();
    const onViewRef = useRef(({ changed }) => {
        setWelcomeListIndex(changed[0].index);
    });
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dart-content"
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <Separator height={StatusBar.currentHeight}></Separator>
            <Separator height={Display.setHeight(8)}></Separator>
            <View style={styles.welcomeListContainer}>
                <FlatList
                    ref={welcomeList}
                    data={General.WELCOME_CONTENTS}
                    keyExtractor={item => item.title}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    overScrollMode="never"
                    viewabilityConfig={viewConfigRef.current}
                    onViewableItemsChanged={onViewRef.current}
                    renderItem={({ item }) => <WelcomeCard {...item} />}
                />
            </View>
            <Separator height={Display.setHeight(8)}></Separator>
            <Pagination />
            <Separator height={Display.setHeight(8)}></Separator>
            {welcomeListIndex === 2 ? (
                <TouchableOpacity
                    style={styles.gettingStartedButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.gettingStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ marginLeft: 10 }}
                        onPress={() => welcomeList.current.scrollToEnd()}>
                        <Text style={styles.buttonText}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={() => pageScroll()}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE
    },
    welcomeListContainer: {
        height: Display.setHeight(60),
    },
    pageContainer: {
        flexDirection: 'row',
    },
    page: {
        height: 8,
        width: 15,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 32,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Display.setWidth(90),
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '800',
        // fontFamily: Fonts.POPPINS_BOLD,
        lineHeight: 16 * 1.4,
    },
    button: {
        backgroundColor: Colors.LIGHT_GREEN,
        paddingVertical: 20,
        paddingHorizontal: 11,
        borderRadius: 32,
    },
    gettingStartedButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    gettingStartedButtonText: {
        fontSize: 20,
        color: Colors.DEFAULT_WHITE,
        lineHeight: 20 * 1.4,
        // fontFamily: Fonts.POPPINS_MEDIUM,
    },
})