import React, { Component } from 'react';
import firebase from 'firebase';

class Navbar extends Component {

    constructor(){
        super();
        this.state = {
            user: null
        }

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState( {user} );
        })
    }
    
    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then( result => console.log(`${result.user.email} ha iniciado`))
            .catch( error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleLogout(){
        firebase.auth().signOut()
        .then( result => console.log(`${result.user.email} ha cerrado sesion`))
        .catch( error => console.log(`Error ${error.code}: ${error.message}`));
    }

    renderLoginButton() {
        // si el usuario esta logueado
        if(this.state.user){
            return (
                <div>
                    <span className="navbar-text mr-2">
                        {this.state.user.displayName}
                    </span>
                    <button className="btn btn-outline-danger my-2 my-sm-0" onClick={this.handleLogout} >Logout</button>
                </div>
            );
            
        } else {
            // si el usuario no está logueado
            return <button className="btn btn-outline-primary my-2 my-sm-0" onClick={this.handleAuth} >Login</button>
        }
    }

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Tareas
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.contador}
                    </span>
                </a>
                { this.renderLoginButton() }
            </nav>
        )
    }
}

export default Navbar;