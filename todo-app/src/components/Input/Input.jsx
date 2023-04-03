import React from "react"
import './input.css'

export default function Input(props) {
    return (
        <label htmlFor={props.id} >
            <input
            id={props.id}
            type='text'
            className={props.className}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            />
        </label>
    )
}