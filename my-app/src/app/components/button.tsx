import React from 'react'


interface GlobalButtonProps {
    text: string; // Explicitly define the type for the text prop
}


export default function GlobalButton({ text }: GlobalButtonProps) { 

    return ( 

        <button className="global-btn">{text}</button>



    )


}