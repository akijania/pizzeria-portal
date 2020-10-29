import React from 'react';
import { shallow } from 'enzyme';
import BookedTable from './BookedTable';

describe('Component BookedTable', () => {
  it('should render without crashing', () => {
    const component = shallow(<BookedTable />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<BookedTable />);
    expect(component.exists('h2')).toEqual(true);
  });
});
