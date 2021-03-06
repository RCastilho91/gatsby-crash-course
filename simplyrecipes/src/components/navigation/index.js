import React from 'react'
import NavigationItem from "./components/navigationItem";

const links = [
    {'linkName': 'Home', 'linkTo': '/'},
    {'linkName': 'About', 'linkTo': '/about'},
    {'linkName': 'Contact', 'linkTo': '/contact'},
    {'linkName': 'Recipes', 'linkTo': '/recipes'},
    {'linkName': 'Tags', 'linkTo': '/tags'}
]

export default function Index(){
    const renderedLinks = links.map((link) =>
        <NavigationItem linkTo={link.linkTo} linkName={link.linkName} />
    )

    return (
        <div className='navigation-bar'>
            { renderedLinks }
        </div>
    )
}
