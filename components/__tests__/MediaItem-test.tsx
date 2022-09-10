import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native'
import MediaItem from '../MediaItem'

describe("MediaItem", () => {
    it("MediaItem renders", () => {
        const mediaItem = render(<MediaItem/>)
        expect(mediaItem).toBeDefined()
    })

    it("MediaItem renders title component", () => {
        const mediaItem = render(<MediaItem />)
        const titleComponent = mediaItem.getByTestId('title-label')
        expect(titleComponent).toBeTruthy()
    })

    it('Media render title as "Sample Title"', () => {
        const mediaItem = render(<MediaItem title='Sample Title'/>)
        const title = mediaItem.getByTestId('title-label')
        expect(title.props.children).toBe('Sample Title')
    })
});