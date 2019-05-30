import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import '../src/components/styles/filters.css';

function Filters ( props ){
    return(
        <div className="menu">
            <ToggleButtonGroup className="toggle" >
                <ToggleButton
                value="All">
                    All
                </ToggleButton>
                <ToggleButton
                value="Travel">
                    Travel
                </ToggleButton>
                <ToggleButton
                value="Lifestyle">
                    Lifestyle
                </ToggleButton>
                <ToggleButton
                value="Business">
                    Business
                </ToggleButton>
                <ToggleButton
                value="Food">
                    Food
                </ToggleButton>
                <ToggleButton
                value="Work">
                    Work
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default Filters;