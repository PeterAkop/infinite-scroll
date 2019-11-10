import React from 'react';
import {render, waitForElement} from '@testing-library/react'

import {createLocation, createMemoryHistory} from 'history';
import {match} from 'react-router';

import Contract from '../Сontract';

const history = createMemoryHistory();
const path = `/contract/:id`;

const mockMatch: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: {id: "1"}
};

const location = createLocation(mockMatch.url);


describe('<Contract/>', () => {
    const contractName = 'test contract Name';
    let fakeFunc: any;

    beforeAll(() => {
        fakeFunc = jest.fn(() => Promise.resolve({data: {name: contractName, message: contractName}}));
    });

    it('Contract should not render <Paragraphs/> component id res has a message', async () => {

        const {getByTestId} = render(
            <Contract history={history}
                      location={location}
                      getContract={fakeFunc}
                      match={mockMatch}/>
        );
        const nameNode = await waitForElement(() => getByTestId('test-id'));
        expect(nameNode.textContent).toBe('');
    });

});
