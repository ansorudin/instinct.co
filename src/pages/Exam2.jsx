import React from 'react'

export const Exam2 = (props) => {
    return (
        <div style={{backgroundColor : props.color}}>
            <h1>{props.title}</h1>
            <div>
            {props.children}
            </div>
        </div>
    )
}
