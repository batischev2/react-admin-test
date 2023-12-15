import React, {ReactElement} from "react";

import Button from 'react-bootstrap/Button';

interface ButtonUiProps {
    title: string,
    type: string,
    img?: ReactElement,
    event?: () => void
}

export const ButtonUi:React.FC<ButtonUiProps> = ({title, img, type, event}) => {
    return (
        <Button onClick={event} variant={type}>
            {img}
            {title}
        </Button>
    )
}
