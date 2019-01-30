import React, { Component } from 'react';

class Navbar extends Component {
    

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Tareas
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.contador}
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navbar;