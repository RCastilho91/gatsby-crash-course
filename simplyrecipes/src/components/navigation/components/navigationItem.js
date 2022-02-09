import React from 'react';
import { Link } from 'gatsby'

export default function NavigationItem(props){
    return (
        <Link to={props.linkTo}>{props.linkName}</Link>
    )
}
