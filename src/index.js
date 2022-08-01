import React from 'react';
import ReactDOM from 'react-dom/client';
import './lib/styles/index.css';
import DataTable from './lib/DataTable';
import { Provider } from 'react-redux';
import { store } from './lib/store/index';

const dataStorage = JSON.parse(localStorage.getItem('employees'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DataTable
        sources={dataStorage}
        show={true}
        search={true}
        columns={{
          firstName: 'First Name',
          lastName: 'Last Name',
          startDate: 'Start Date',
          department: 'Département',
          birthDate: 'Birth Date',
          street: 'Street',
          city: 'City',
          state: 'State',
          zipCode: 'Zip Code'
        }}
        columnFilter={'firstName'}
        order={'asc'}
        dataNumber={true}
        paginationButton={true}
      />
    </Provider>
  </React.StrictMode>
);