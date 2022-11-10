

import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import testData from '../SampleData/row-data.json';
import sum from '../sum'

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

function RtGridView()
{
    const gridRef = useRef();
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState(
        [
            {field: 'make', filter:true},
            {field: 'model', filter:true},
            {field: 'price'}
        ]);
    const defaultColDef = useMemo(() => ({
        sortable: true
    }))

    useEffect(() => 
    {
        fetch("https://www.ag-grid.com/example-assets/row-data.json")
        .then(result => result.json())        
        .then(x => setRowData(x))
        //setRowData(testData);
        console.log(rowData)
    },[])
    
    const cellClickedListener = useCallback((e) => 
    {
        console.log("hello ", e);
        console.log("aaa", rowData)
    }, [])

    const buttonListener = useCallback(e => 
        {
            gridRef.current.api.deselectAll();
        },[])

    return (
        <div> 
            <button onClick={buttonListener}> Push Me </button>
            <span> helllo workd {sum(1,2)}</span>
            <div className="ag-theme-alphine" style={{width: 500, height: 500}}>
                <AgGridReact 
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                    rowSelection='multiple'
                    onCellClicked={cellClickedListener}
                    />                    
            </div>
        </div>
    )

}
export default RtGridView;