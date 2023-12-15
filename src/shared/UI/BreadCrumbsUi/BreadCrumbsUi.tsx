import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

type link = {
    name: string,
    link: string,
}

interface BreadCrumbsUiProps {
    links: link[]
}

export const BreadCrumbsUi:React.FC<BreadCrumbsUiProps> = ({links}) => {
    return (
        <Breadcrumb>
            {links.map((link) => {
                return (
                    <Breadcrumb.Item active key={link.name}>
                        {link.name}
                    </Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    );
};
