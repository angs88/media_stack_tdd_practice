import 'react-native';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native'
import MediaItem, {Item} from '../MediaItem'

describe("MediaItem", () => {

    let mediaItem: RenderAPI
    const mockMediaItem: Item = { title: 'title', description: "description", image: 'any-url'}

    beforeEach(() => {
        mediaItem = render(<MediaItem item={mockMediaItem}/>)
    })

    it("MediaItem renders", () => {
        expect(mediaItem).toBeDefined()
    })

    it(`MediaItem renders title component and display ${mockMediaItem.title}`, () => {
        const title = mediaItem.getByTestId('title-label')
        expect(title).toBeTruthy()
        expect(title.props.children).toBe(mockMediaItem.title)
    })

    it(`MediaItem renders description component that display ${mockMediaItem.description}`, () => {
        const description = mediaItem.getByTestId('description-label')
        expect(description).toBeTruthy()
        expect(description.props.children).toBe(mockMediaItem.description)
    })

    it(`MediaItem renders image component and has the source.uri as ${mockMediaItem.image}`, () => {
        const thumbnailImage = mediaItem.getByTestId('thumbnail-image')
        expect(thumbnailImage).toBeTruthy()
        expect(thumbnailImage.props).toHaveProperty('source.uri', mockMediaItem.image)
    }) 
});