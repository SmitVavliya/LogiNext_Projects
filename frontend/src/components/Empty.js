import React from "react";
import CommonModal from "./CommonModal";

const Empty = ({setUpdatedData, data, setTotalElements}) => {
    return (
        <div style={{flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h3>No Records Found.</h3>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <CommonModal setTotalElements={setTotalElements} setUpdatedData={setUpdatedData} data={data} />
            </div>
        </div>
    )
}

export default Empty;