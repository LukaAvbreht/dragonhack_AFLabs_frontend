import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import './AFTable.css'

function AFTable(props) {
    return (
        <ReactTable
            {...props}
            showPagination={props.showPagination || false}
            nextText={"Naprej"}
            previousText={"Nazaj"}
            pageText={"Stran"}
            sortable={props.sortable || false}
            multiSort={props.multiSort || false}
            minRows={props.minRows || 1}
            className="-striped -highlight"
            getTableProps={() => {
                return {"className": "rounded text-center"}
            }}
            getTheadTrProps={() => {
                return {"className": "font-weight-bold text-center bg-secondary text-white"}
            }}
            getTheadGroupProps ={() =>  {
                if(props.subTable){
                    return { style: { display: "none" } };
                }
            }}
            getTrProps={function (state, rowInfo, column, instance) {
                const errorColor = "bg-lightred"
                let isError = false
                if (props?.isErrorPresent) {
                    if (props?.isErrorPresent(rowInfo)) {

                        return {"className": errorColor}
                    }
                }
                return {}
            }}

        />
    );
}

AFTable.propTypes = {...ReactTable.propTypes};

export default AFTable;

