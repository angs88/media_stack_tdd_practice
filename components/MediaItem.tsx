import React from 'react';
import { Text, Image } from 'react-native';

export interface Item {
    title: string
    description: string
    image: string
}

interface Props {
    item: Item
}

const MediaItem = ({item}: Props) => {
    return (
        <>
            <Image testID='thumbnail-image' source={{uri: item.image}}/>
            <Text testID='title-label'>{item.title}</Text>
            <Text testID='description-label'>{item.description}</Text>
        </>
    )
}

export default MediaItem;