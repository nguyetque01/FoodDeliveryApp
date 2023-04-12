import React, { useState } from 'react';
import { StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import { View, Text, TouchableOpacity, Image, Colors, TextField } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FOODS } from '../data';

const FoodScreen = (props) => {
    const { foodId } = props.route.params;
    const food = FOODS.find((item) => item.id == foodId);

    // State for comments
    const [comments, setComments] = useState([]);

    // Function to handle adding comments
    const handleAddComment = (comment) => {
        setComments([...comments, comment]);
    };

    return (
        <View flex-1 bg-white>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <ScrollView>
                <Image source={food.image} style={styles.backgroundImage} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{food.name}</Text>
                    <Text style={styles.price}>{food.price.toLocaleString('vi-VN')} VNĐ</Text>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Mô tả</Text>
                        <Text style={styles.sectionContent}>{food.description}</Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Thành phần</Text>
                        <View style={styles.ingredientsContainer}>
                            {food.ingredients.map((ingredient, index) => (
                                <View key={index} style={styles.ingredientItem}>
                                    <Icon name="check-circle" size={20} color={Colors.green20} />
                                    <Text style={styles.ingredientText}>{ingredient}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Bình luận</Text>
                        {comments.length > 0 ? (
                            <FlatList
                                data={comments}
                                renderItem={({ item }) => (
                                    <View style={styles.commentContainer}>
                                        <Image source={item.avatar} style={styles.commentAvatar} />
                                        <View style={styles.commentContentContainer}>
                                            <Text style={styles.commentName}>{item.name}</Text>
                                            <Text style={styles.commentContent}>{item.comment}</Text>
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                scrollEnabled={false}
                            />
                        ) : (
                            <Text style={styles.noCommentText}>Chưa có bình luận nào.</Text>
                        )}
                        <TouchableOpacity
                            style={styles.addCommentButton}
                            onPress={() => handleAddComment({ name: 'User', comment: 'Thêm bình luận...' })}
                        >
                            <Text style={styles.addCommentText}>Thêm bình luận...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.dark10,
    },
    price: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.yellow,

        marginBottom: 20,
    },
    sectionContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.dark20,
        marginBottom: 10,
    },
    sectionContent: {
        fontSize: 16,
        color: Colors.dark30,
    },
    ingredientsContainer: {
        marginTop: 10,
    },
    ingredientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    ingredientText: {
        fontSize: 16,
        color: Colors.dark30,
        marginLeft: 10,
    },
    commentContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    commentAvatar: {
        // width: 40,
        // height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    commentContentContainer: {
        flex: 1,
        backgroundColor: Colors.grey20,
        borderRadius: 10,
        padding: 10,
    },
    commentName: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.dark20,
    },
    commentContent: {
        fontSize: 14,
        color: Colors.dark30,
        marginTop: 5,
    },
    noCommentText: {
        fontSize: 16,
        color: Colors.dark30,
        marginBottom: 10,
    },
    addCommentButton: {
        backgroundColor: Colors.yellow50,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    addCommentText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.dark10,
    },
});

export default FoodScreen;    