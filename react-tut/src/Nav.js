import React from 'react';

export class Nav extends React.Component {
    render(){
        const pages = ['Home', 'Photos', 'Bio', 'Jobs', 'About', 'thing', 'Login'];
        const navLinks = pages.map(page => {
            return (
                <li><a href={'/' + page}>
                {page}
                </a></li>
            )
        });
        return <nav>{navLinks}</nav>
    }
}