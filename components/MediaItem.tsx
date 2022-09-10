import React from 'react';
import { Text } from 'react-native';

interface Props {
    title: string
    description: string
}

const MediaItem = ({title, description}: Props) => {
    return (
        <>
            <Text testID='title-label'>{title}</Text>
            <Text testID='description-label'>{description}</Text>
        </>
    )
}

export default MediaItem;