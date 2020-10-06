import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import App from './App';
import Login from './components/views/Login/Login';
import Dashboard from './components/views/Dashboard/Dashboard';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvent from './components/views/TablesEvent/TablesEvent';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import Kitchen from './components/views/Kitchen/Kitchen';

it('renders without crashing', () => {
  shallow(<App />);
});
it('renders correct routes', () => {
  const wrapper = shallow(<App />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap[`${process.env.PUBLIC_URL}/`]).toBe(Dashboard);
  expect(pathMap[`${process.env.PUBLIC_URL}/login`]).toBe(Login);
  expect(pathMap[`${process.env.PUBLIC_URL}/tables`]).toBe(Tables);
  expect(pathMap[`${process.env.PUBLIC_URL}/tables/booking`]).toBe(TablesBooking);
  expect(pathMap[`${process.env.PUBLIC_URL}/tables/event`]).toBe(TablesEvent);
  expect(pathMap[`${process.env.PUBLIC_URL}/waiter`]).toBe(Waiter);
  expect(pathMap[`${process.env.PUBLIC_URL}/waiter/order`]).toBe(WaiterOrder);
  expect(pathMap[`${process.env.PUBLIC_URL}/kitchen`]).toBe(Kitchen);

});