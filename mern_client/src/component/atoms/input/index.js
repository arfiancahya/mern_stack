import React, { Fragment } from 'react';

const Input = ({...rest}) => {
    return (
        <Fragment>
            <input {...rest} />
        </Fragment>
    );
}

export default Input;
