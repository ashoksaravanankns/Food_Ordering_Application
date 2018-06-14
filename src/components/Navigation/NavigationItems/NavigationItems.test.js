import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(() => {
	wrapper = shallow(<NavigationItems />);
});

describe('<NavigationItems />', () => {
	// test for non authenticated users
	it('should have to render 2 <NavigationItem /> component if not authenticated', () => {
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});

	it('should have to render 3 <NavigationItem /> component if authenticated', () => {
		// wrapper = shallow(<NavigationItems isAuthenticated />);
		wrapper.setProps({ isAuthenticated: true });
		expect(wrapper.find(NavigationItem)).toHaveLength(3);
	});
});
