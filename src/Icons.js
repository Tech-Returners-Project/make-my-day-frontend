import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons'


class Icons extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <FontAwesomeIcon icon={faStar} size="3x"/>
                    </div>
                    <div className="col-4">
                    <FontAwesomeIcon icon={faCalendarAlt} size="3x"/>
                    </div>
                    <div className="col-4">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    </div>
                </div>
            </div>
        )
    }
};


export default Icons;