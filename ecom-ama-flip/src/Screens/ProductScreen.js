import React from 'react'

export default function ProductScreen(props) {
     const prd=props.location.path;
    return (
        <div className="h-screen">
            <div>prodcuct Screen {prd}</div>
        </div>
    )
}
