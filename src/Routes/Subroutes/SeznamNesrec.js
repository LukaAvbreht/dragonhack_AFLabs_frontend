import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {usePagination, useTable} from 'react-table'

import apiClient from '../../api/ApiClient';
import {useQuery} from "react-query";
import {Container, Row, Col} from "react-bootstrap";
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
                width: 50,
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

    const [previousPage,setPreviousPage] = useState();
    const [canPreviousPage,setCanPreviousPage] = useState();
    const [nextPage,setNextPage] = useState();
    const [canNextPage,setCanNextPage] = useState();
    const [count,setCount] = useState();
    const [pageNumber,setPageNumber] = useState();
    // const [allPagesNumber,stAllPagesNumber] = useState();
    const [pageData, setPageData] = useState([])

    async function fetchData(url = '/nesrece') {
        try {
            const response = await apiClient(url,
                // {
                // params: {
                //     ID: 12345
                //     }
                // }
            );
            setPreviousPage(response.data.previous);
            setCanPreviousPage(response.data.previous !== null);
            setNextPage(response.data.next);
            setCanNextPage(response.data.next !== null);
            setPageNumber(response.data.page_number);
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
        <>
            <Container>
                <Row>
                    <AFTable columns={columns}
                     data={pageData}
                     defaultPageSize={20}
                     minRows={20}/>
                </Row>

            <Row>
                <Col xs={4}> </Col>
                <Col xs={1}>
                    <button onClick={() => fetchData(previousPage)} disabled={!canPreviousPage}>
                    {'<<'}
                    </button>
                </Col>
                <Col xs={2}> {'Page number : '} {pageNumber + 1} </Col>
                <Col xs={1}>
                    <button onClick={() => fetchData(nextPage)} disabled={!canNextPage}>
                        {'>>'}
                    </button>
                </Col>
                <Col xs={4}> {'Total of : '} {count} </Col>
            </Row>
            </Container>
            </>
    );
}

export default SeznamNesrec;