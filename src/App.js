import React from 'react';
import DataTable from './DataTable';
import './App.css';

const App = (props) => {
  return (
    <div className="container mt-3">
      <DataTable initialRows={props.rows} locale="da" rowsPerPage={5} />
    </div>
  )
}

export default App;
