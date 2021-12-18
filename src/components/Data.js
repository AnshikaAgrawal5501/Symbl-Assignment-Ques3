import React from "react";
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from './Loader';
import DataItem from "./DataItems";

const Data = () => {

    const [isloading,loading]=React.useState(true);
    const [data,getData]=React.useState([]);


    trackPromise(
        fetch('https://externship-example-api.herokuapp.com/data')
        .then(async (fetchedData) => {

            loading(false);

            const data=await fetchedData.json();
            getData(data);
        })
    )


    return ( 
        <>
            {
                isloading ? <LoadingIndicator /> : 
                data.map((item) => {
                    return <DataItem key={item.id} id={item.id} name={item.name} />
                })
            }
        </>

    );
};

export default Data;