import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCrumbs = ({links}) => {
    return (
        <Breadcrumb>
            {links.map((link, index) => {
              return (
                  <Breadcrumb.Item active key={index}>
                      {link.name}
                  </Breadcrumb.Item>
              )
            })}
        </Breadcrumb>
    );
};

export default BreadCrumbs;
