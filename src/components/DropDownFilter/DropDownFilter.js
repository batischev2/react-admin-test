import React from "react";

import Dropdown from 'react-bootstrap/Dropdown';

const DropDownFilter = ({title}) => {
    return (
        <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle id="dropdown-button-dark-example" variant="primary">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                    Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropDownFilter;
