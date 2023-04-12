import React, { useState } from 'react';
import { StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import { View, Text, TouchableOpacity, Image, Colors } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FOODS } from '../data';

const FoodScreen = (props) => {
    const { foodId } = props.route.params;
    const food = FOODS.find((item) => item.id == foodId);

    const [activeTab, setActiveTab] = useState(0);
    const handleTabPress = (index) => {
        setActiveTab(index);
    };
    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.tabContentText}>{food.description}</Text>
                        <Text style={styles.tabContentText}>{food.ingredients.join(', ')}</Text>
                    </View>
                );
            case 1:
                return (
                    <View style={styles.tabContent}>
                        <FlatList
                            data={food.ingredients}
                            renderItem={({ item }) => (
                                <View row centerV paddingV-8>
                                    <Icon name="circle" size={12} color="#666" />
                                    <Text marginL-8 text70>{item}</Text>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            scrollEnabled={false}
                        />
                    </View>
                );
            case 2:
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.tabContentText}>Đánh giá</Text>
                    </View>
                );
            default:
                return null;
        }
    };


    return (
        <View flex-1 bg-white>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ScrollView>
                <Image source={food.image} style={styles.backgroundImage} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{food.name}</Text>
                    <Text style={styles.price}>{food.price.toLocaleString('vi-VN')} VNĐ</Text>
                </View>
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tabItem, activeTab === 0 && styles.activeTabItem]}
                        onPress={() => handleTabPress(0)}
                    >
                        <Text style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>Chi tiết</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabItem, activeTab === 1 && styles.activeTabItem]}
                        onPress={() => handleTabPress(1)}
                    >
                        <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>Thành phần</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabItem, activeTab === 2 && styles.activeTabItem]}
                        onPress={() => handleTabPress(2)}
                    >
                        <Text style={[styles.tabText, activeTab === 2 && styles.activeTabText]}>Đánh giá</Text>
                    </TouchableOpacity>
                </View>
                {renderTabContent()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        top: 0,
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    infoContainer: {
        backgroundColor: Colors.white,
        padding: 20
    },
    name: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.dark10
    },
    price: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.yellow
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.grey50
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
    },
    activeTabItem: {
        borderBottomWidth: 2,
        borderColor: Colors.dark
    },
    tabText: {
        fontSize: 16,
        color: Colors.dark,
        opacity: 0.3
    },
    activeTabText: {
        opacity: 1
    },
    tabContent: {
        padding: 20,
    },
    tabContentText: {
        fontSize: 16,
        color: Colors.dark10,
        marginBottom: 12
    }
});

export default FoodScreen;
