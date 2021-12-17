import React from "react";
import Zoom from '@mui/material/Zoom';

const DataItem = (props) => {

    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        setChecked(true)
    });

    return (
        <>
            <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                <div className="items">
                    <p>{props.name}</p>
                </div>
            </Zoom>
        </>
    );
};

export default DataItem;