import React from 'react';

const FormStudent = (props) => {
    return (
        <input
            className={props.className}
            type={props.type}
            onClick = {props.onClick}
        />
    )
}

export default FormStudent;