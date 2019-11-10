import React from 'react';
import {render, waitForElement} from '@testing-library/react'

import Paragraphs from '../Paragraphs';
import {getNextParam} from '../utilities';

describe('<Paragraphs/>', () => {

    const mockParagraphs = [{id: 1, text: 'text', page: 1}, {id: 2, text: 'text', page: 1}];
    let fakeFunc: any;

    beforeAll(() => {
        fakeFunc = jest.fn(() => Promise.resolve({data: {paragraphs: mockParagraphs}}));
    });

    it('All Paragraphs should be rendered after Api Call ', async () => {
        const {getByTestId} = render(<Paragraphs getParagraphs={fakeFunc} id={'id'}/>);

        const par1 = await waitForElement(() => getByTestId('test-id-1'));
        const par2 = await waitForElement(() => getByTestId('test-id-2'));
        const [first, second] = mockParagraphs;

        expect(par1.textContent).toBe(first.text);
        expect(par2.textContent).toBe(second.text);
    });

    it('getNextParam Should return correct object ', async () => {
        expect(getNextParam({page: 1, from: 50, to: 100})).toMatchObject({page: 2, from: 0, to: 50});
    });


});
