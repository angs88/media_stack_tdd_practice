import React from 'react';
import { Text, Image } from 'react-native';

interface Props {
    title: string
    description: string
    image: string
}

const MediaItem = ({title, description, image}: Props) => {
    return (
        <>
            <Image testID='thumbnail-image' source={{uri: image}}/>
            <Text testID='title-label'>{title}</Text>
            <Text testID='description-label'>{description}</Text>
        </>
    )
}

export default MediaItem;