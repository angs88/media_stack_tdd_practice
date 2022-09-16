import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity testID='media-item' onPress={onPress}>
            <Image testID='thumbnail-image' source={{uri: item.image}}/>
            <Text testID='title-label'>{item.title}</Text>
            <Text testID='description-label'>{item.description}</Text>
        </TouchableOpacity>
    )
}

export default MediaItem;