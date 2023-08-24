import React, { useState } from "react"


const List = ({data, handleClick}) => {



    return (

        <div>
            {data.length && data.map(item =>(
                <div>
                    <div>{item.name}</div>
                    <div onClick={()=>handleClick()}>{item.email}</div>
                    <div>{item.phone}</div>
                    <div>{item.age}</div>
                </div>
            ))}

        </div>
    )
}

export default List;