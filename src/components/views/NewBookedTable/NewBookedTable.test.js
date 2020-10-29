import React from 'react';
import { shallow } from 'enzyme';
import NewBookedTable from './NewBookedTable';

describe('Component NewBookedTable', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewBookedTable />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<NewBookedTable />);
    expect(component.exists('h2')).toEqual(true);
  });
});
