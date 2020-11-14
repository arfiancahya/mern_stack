import React, { Fragment } from 'react';

const Button = ({title, ...rest}) => {
    return (
        <Fragment>
            <div>
                <button {...rest}>{title}</button>
            </div>
        </Fragment>
    );
}

export default Button;
