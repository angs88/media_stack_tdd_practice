import 'react-native';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native'
import MediaItem from '../MediaItem'
import { ReactTestInstance } from 'react-test-renderer';

describe("MediaItem", () => {

    let mediaItem: RenderAPI

    beforeEach(() => {
        mediaItem = render(<MediaItem title='Sample Title' description="Description goes here!!!" image='https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg'/>)
    })

    it("MediaItem renders", () => {
        expect(mediaItem).toBeDefined()
    })

    it('MediaItem renders title component and display "Sample Title"', () => {
        const title = mediaItem.getByTestId('title-label')
        expect(title).toBeTruthy()
        expect(title.props.children).toBe('Sample Title')
    })

    it('MediaItem renders description component that display "Description goes here!!!"', () => {
        const description = mediaItem.getByTestId('description-label')
        expect(description).toBeTruthy()
        expect(description.props.children).toBe("Description goes here!!!")
    })

    it('MediaItem renders image component and has the source.uri as "https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg"', () => {
        const thumbnailImage = mediaItem.getByTestId('thumbnail-image')
        expect(thumbnailImage).toBeTruthy()
        expect(thumbnailImage.props).toHaveProperty('source.uri', 'https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg')
    }) 
});