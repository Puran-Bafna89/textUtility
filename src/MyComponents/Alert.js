import React from 'react'

export default function Alert(props) {
    function toUpper(val){
        val = val.toLowerCase();
        // console.log(val);
        // console.log(val.charAt(0).toLowerCase().concat(val.substring(1)))
        return val.charAt(0).toLowerCase().concat(val.substring(1));
    }
    return (
        props.alert && <div className={`alert alert-${toUpper(props.alert.type)} alert-dismissible fade show`} role="alert">
            {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
