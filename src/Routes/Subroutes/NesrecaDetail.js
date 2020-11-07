import React from "react";
import { useParams } from 'react-router-dom';

function NesrecaDetail() {

    let { id } = useParams();

    return (
        <div>
            Nesreča detail id:  {id}
        </div>

    );
}

export default NesrecaDetail;