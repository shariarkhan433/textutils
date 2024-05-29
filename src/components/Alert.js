import React from 'react'

export default function Alert(props) {
    const Capitilize = (word) =>{
        var lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.tp} alert-dismissible fade show`} role="alert">
            <strong>{Capitilize(props.alert.tp)}</strong> : {props.alert.msg}

            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
