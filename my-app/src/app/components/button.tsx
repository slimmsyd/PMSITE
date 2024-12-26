import React from 'react'
import Link from 'next/link';

 
interface GlobalButtonProps {
    text: string; // Explicitly define the type for the text prop
    link?: string;
}


export default function GlobalButton({ text, link }: GlobalButtonProps) { 

    return ( 


        <Link  href = {link ? link : '#'}>
        <button className="global-btn">{text}</button>

        </Link>



    )


}