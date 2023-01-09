import React from 'react';
import ReactDOM from 'react-dom/client';
import './lib/styles/index.css';
import DataTable from './lib/DataTable';
import { Provider } from 'react-redux';
import { store } from './lib/store/index';
import { useSelector } from 'react-redux';

const Data = () => {
  const donnees = useSelector(state => state.sources);

  return (
    <DataTable
        sources={donnees}
        dataOrigine={donnees}
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
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Data />
    </Provider>
  </React.StrictMode>
);