import React from 'react';
import {ProgressBar} from "react-bootstrap";

class ProgressBars extends React.Component {
    render() {
        const {progressValue} = this.props;
        return(
            <div className="div_custom_progress_bar">
                <ProgressBar
                    striped
                    animated={true}
                    now={progressValue}
                    label={`${progressValue}%`}
                    max={100}
                    variant="info"
                />
            </div>
            
        );
    }
}

export default ProgressBars;