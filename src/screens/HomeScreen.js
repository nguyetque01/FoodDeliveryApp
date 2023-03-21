import React, { useState } from 'react';
import { StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import { Colors, Text, View, SegmentedControl, TouchableOpacity } from 'react-native-ui-lib';
import { HomeHeader, RestaurantCard, RestaurantItem } from '../components';
import restaurants from '../fake-data/restaurants';

const HomeScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleIndexChange = (index) => {
        setSelectedIndex(index);
    };

    return (
        <View>
            <StatusBar barStyle="light-content"
                backgroundColor={Colors.green20}
                translucent
            />
            <HomeHeader />

            <ScrollView>
                <View paddingH-12>
                    <View marginT-3>
                        <View row flex spread marginV-10>
                            <Text text60 grey10 >Các quán nổi bật</Text>
                            <TouchableOpacity>
                                <Text text80 green10>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={restaurants}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.popularRestaurantsContainer}
                            renderItem={({ item }) => (
                                <RestaurantCard key={item.id} item={item} />
                            )}
                        />
                    </View>

                    <View marginT-16>
                        <SegmentedControl
                            segments={[
                                { label: 'Gần tôi', value: 0 },
                                { label: 'Mới nhất', value: 1 },
                                { label: 'Bán chạy', value: 2 },
                                { label: 'Giảm giá', value: 3 },
                                { label: 'Đánh giá', value: 4 },
                            ]}
                            selectedIndex={selectedIndex}
                            onValueChange={handleIndexChange}
                            activeColor={Colors.green20}
                            borderRadius={10}
                            containerStyle={styles.segmentedControlContainer}
                            textStyle={styles.segmentedControlText}
                            activeTextStyle={styles.segmentedControlActiveText}
                        />
                        {restaurants.map((item) => (
                            <RestaurantItem key={item.id} item={item} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    segmentedControlContainer: {
        marginBottom: 8
    },
    segmentedControlText: {
        color: Colors.grey40,
        fontWeight: 'bold',
        fontSize: 16,
    },
    segmentedControlActiveText: {
        color: Colors.green20,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default HomeScreen;