import React from 'react';
import { Text } from 'react-native';

interface Props {
    title: string
}

const MediaItem = ({title}: Props) => {
    return (
        <Text testID='title-label'>{title}</Text>
    )
}

export default MediaItem;