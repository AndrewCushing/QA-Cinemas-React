import React from 'react';
import { PushSpinner } from "react-spinners-kit";

export default class Loading extends React.Component {
    render() {
        return (
            <div>
                <PushSpinner
                    size={30}
                    color="#686769"
                    loading={true}
                />
                <h3>Loading...</h3>
            </div>

        );
    }
}