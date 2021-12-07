import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
export default function LoadingBox() {
    return (
        <div className="m-5 h-screen flex items-center flex-col">
           <span><RefreshIcon className="animate-spin text-xl"/> Loading...</span>
        </div>
    )
}
