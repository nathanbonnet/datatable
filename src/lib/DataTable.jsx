import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Body from './components/body';
import Research from './components/research';
import DataNumber from './components/dataNumber';
import Length from './components/Length';
import Pagination from './components/pagination';
import Header from "./components/header";
import { order } from "./store/action";
import './styles/App.css';

const DataTable = (props) => {
  //on stocke la data d'origine pour que l'on puisse l'utiliser dans le component research

  useEffect(() => {
    order(props.order, props.columnFilter)
  }, [])

  return (
    <div className="bloc-table">
      <div className="header-table">
        {props.show && <Length />}
        {props.search && <Research />}
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
        {props.dataNumber && <DataNumber /> }
        <div className="page">
          {props.paginationButton && <Pagination /> }
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