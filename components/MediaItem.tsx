import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';

export interface Item {
    title: string
    description: string
    image: string
}

interface Props {
    item: Item,
    onPress?: () => void
}

const MediaItem = ({item, onPress}: Props) => {
    return (
        <TouchableOpacity testID='media-item' style={styles.container} activeOpacity={0.8} onPress={onPress}>
            <Image testID='thumbnail-image' style={styles.image} source={{uri: item.image}}/>
            <View style={styles.textContainer}>
                <Text testID='title-label' numberOfLines={2} style={styles.title}>{item.title}</Text>
                <Text numberOfLines={3} testID='description-label'>{item.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        paddingBottom: '1%',
        width: '100%'
    },
    image: {
        aspectRatio: 1.33,
    },
    textContainer: {
        marginLeft: '2.5%',
        flex: 1,
        alignItems: 'flex-start',
    },
    title: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 13
    },
    description: {
        fontSize: 11,
    }
})

export default MediaItem;