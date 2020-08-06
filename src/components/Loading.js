import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ isLoading }) => {

    return (
        <div className="text-center my-3">
            { isLoading ? 
                <Spinner 
                    animation="grow" 
                    role="status" 
                    variant="success">
                </Spinner>
            : "" }
        </div>
    )

}

export default Loading;