import React from "react";

import Dropdown from 'react-bootstrap/Dropdown';

type option = {
    name: string,
    link: string,
    id: number
}

interface DefaultDropDownProps {
    title: string,
    options: option[]
}

export const DefaultDropDown:React.FC<DefaultDropDownProps> = ({title, options}) => {
    return (
        <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle id="dropdown-button-dark-example" variant="primary">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {options.map((option => {
                   return <Dropdown.Item key={option.id} href={option.link}>
                       {option.name}
                   </Dropdown.Item>
                }))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
