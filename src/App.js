import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Dashboard from './components/views/Dashboard/Dashboard';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvent from './components/views/TablesEvent/TablesEvent';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import Kitchen from './components/views/Kitchen/Kitchen';
import BookedTable from './components/views/BookedTable/BookedTable';
import NewBookedTable from './components/views/NewBookedTable/NewBookedTable';
import NewBookedEvent from './components/views/NewBookedEvent/NewBookedEvent';
import BookedEvent from './components/views/BookedEvent/BookedEvent';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} /> 
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking`} component={TablesBooking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBookedTable} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} render={({match}) => 
            <BookedTable bookingId={match.params.id} />} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/event`} component={TablesEvent} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/event/new`} component={NewBookedEvent} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} render={({match}) => 
            <BookedEvent eventId={match.params.id} />} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order`} component={WaiterOrder} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} render={({match}) => 
            <Order orderId={match.params.id} />} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
   
  );
}

export default App;
