import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native'
import MediaItem from '../MediaItem'

describe("MediaItem", () => {
    it("MediaItem renders", () => {
        const mediaItem = render(<MediaItem/>)
        expect(mediaItem).toBeDefined()
    })
})