import React from 'react'

function ChildComponents(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button>            
            
        </div>
    )
}

export default ChildComponents
