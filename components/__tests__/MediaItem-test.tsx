import 'react-native';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native'
import MediaItem from '../MediaItem'
import { ReactTestInstance } from 'react-test-renderer';

describe("MediaItem", () => {

    let mediaItem: RenderAPI

    beforeEach(() => {
        mediaItem = render(<MediaItem title='Sample Title'/>)
    })

    it("MediaItem renders", () => {
        expect(mediaItem).toBeDefined()
    })

    it('MediaItem renders title component and display "Sample Title"', () => {
        const title = mediaItem.getByTestId('title-label')
        expect(title).toBeTruthy()
        expect(title.props.children).toBe('Sample Title')
    })

    it('MediaItem renders description component', () => {
        const description = mediaItem.getByTestId('description-label')
        expect(description).toBeTruthy()
    })
});