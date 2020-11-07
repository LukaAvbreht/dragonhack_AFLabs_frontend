import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {usePagination, useTable} from 'react-table'

import apiClient from '../../api/ApiClient';
import {useQuery} from "react-query";
import {Button} from "react-bootstrap";
import AFTable from "../../Components/utils/AFTable";

// "zaporedna_stevilka", "klasifikacija", "datum", "ura", "v_naselju",
//     "lokacija", "vrsta_ceste", "sifra_ceste", "sifra_odseka_ulice", "vzrok_nesrece",
//     "tip_nesrece", "vremenske_okoliscine", "stanje_prometa", "stanje_vozisca", "vrsta_vozisca",
//     "geo_x", "geo_y", "udelezenci"


function SeznamNesrec() {
    const columns = [
            {
                Header: 'ID',
                accessor: 'zaporedna_stevilka',
            },
            {
                Header: 'Datum',
                accessor: 'datum',
            },
            {
                Header: 'Ura',
                accessor: 'ura',
            },
            {
                Header: 'Tip',
                accessor: 'tip_nesrece.ime',
            },
            {
                Header: 'Vzrok nesreče',
                accessor: 'vzrok_nesrece.ime',
            },
            {
                Header: 'Vreme',
                accessor: 'vremenske_okoliscine.ime',
            },
        ]

    const [previosPage,setPreviousPage] = useState();
    const [nextPage,setNextPage] = useState();
    const [count,setCount] = useState();
    const [pageData, setPageData] = useState([])

    async function fetchData() {
        try {
            const response = await apiClient('/nesrece',
                // {
                // params: {
                //     ID: 12345
                //     }
                // }
            );
            console.log(response);
            console.log(response.data);
            setPreviousPage(response.data.previous);
            setNextPage(response.data.next);
            setCount(response.data.count);
            const data = response.data.results.map(value => ({...value}) )
            await setPageData(data)
            // // setPageData(response.data.results)
            // for(let i = 0; i< response.data.results.length; i++){
            //     console.log(response.data.results[i]);
            //     let newElement = response.data.results[i];
            //     setPageData(oldArray => [...oldArray, newElement]);
            // }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {fetchData()}, [])

    return (
        <AFTable columns={columns}
                 data={pageData}
                 defaultPageSize={20}
                 minRows={20}/>
    );
}

export default SeznamNesrec;