import 'react-native';
import React from 'react';
import {render, RenderAPI, fireEvent} from '@testing-library/react-native'
import MediaItem, {Item} from '../MediaItem'
import {jest} from '@jest/globals';

describe("MediaItem", () => {

    let mediaItem: RenderAPI
    const mockMediaItem: Item = { 
        "title": "Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns",
        "description": "Rafael Nadal is officially OUT of the U.S. Open ... the tennis legend said Tuesday it's just too damn unsafe for him to travel to America during the COVID-19 pandemic. \"The situation is very complicated worldwide,\" Nadal wrote in a statement. \"The…",
        "image": "https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg",
    }
    const onPress = jest.fn()

    beforeEach(() => {
        mediaItem = render(<MediaItem item={mockMediaItem} onPress={onPress}/>)
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

    it('MediaItem `onPress` is called with no arguments when the component is clicked/pressed', async () => {
        const wrapper = mediaItem.getByTestId('media-item')
        fireEvent.press(wrapper)
        expect(onPress).toBeCalledTimes(1)
        expect(onPress).toBeCalledWith()
    })
});