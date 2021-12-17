import React from "react";
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from './Loader';
import DataItem from "./DataItems";
import 'aos/dist/aos.css';

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
                data.map((item, index) => {
                    return <DataItem key={index} name={item.name} />
                })
            }
        </>

    );
};

export default Data;