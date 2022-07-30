import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Body from './components/body';
import Research from './components/research';
import DataNumber from './components/dataNumber';
import Length from './components/Length';
import Pagination from './components/pagination';
import Header from "./components/header";
import { body, dataNumber, order } from "./store/action";
import './styles/App.css';
import { useSelector } from 'react-redux';

const DataTable = (props) => {
  body(props.sources);
  dataNumber(props.sources.length);
  order(props.order, props.columnFilter)
  let numberOfResult = useSelector((state) => state.result);
  return (
    <div className="bloc-table">
      <div className="header-table">
        {props.show && <Length />}
        {props.search && <Research data={props.sources} />}
      </div>
      <table>
        <thead>
          <tr>
            {props.columns && Object.entries(props.columns).map(([name, label]) => {
              return (
                <Header label={label} name={name} />
              )
            })}
          </tr>
        </thead>
        <tbody id="t-body">
          <Body columns={props.columns} />
        </tbody>
      </table>
      <div className="footer-table">
        {props.dataNumber && <DataNumber numberEntries={numberOfResult} /> }
        <div className="page">
          {props.paginationButton && <Pagination numberResults={numberOfResult} /> }
        </div>
      </div>
    </div>
  )
}

DataTable.prototype = {
    columns: PropTypes.object,
    dataNumber: PropTypes.bool,
    paginationButton: PropTypes.bool,
    search: PropTypes.bool,
    show: PropTypes.bool,
    sources: PropTypes.array,
};

export default DataTable;