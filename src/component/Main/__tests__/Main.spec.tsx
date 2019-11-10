import React from 'react';
import {shallow} from 'enzyme';

import Main from '../Main';


describe('Main', () => {

    it('should render correctly', () => {
        const component = shallow(<Main/>);

        expect(component).toMatchSnapshot();
    });

    it('text label should be Contract ID', () => {
        const component = shallow(<Main/>);

        expect(component.find('#text-id').props().label).toBe('Contract ID');
        expect(component).toMatchSnapshot();
    });


});
