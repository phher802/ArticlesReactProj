import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import ArticleAdd from './articles/ArticleAdd';
import ArticleEdit from './articles/ArticleEdit';
import ArticleInfo from './articles/ArticleInfo';
import ArticleList from './articles/ArticleList';


function Navigation(){
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dar mb-4'>
            <div className='container'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <NavLink exact className='nav-link' activeClassName='active' to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact className='nav-link' activeClassName='active' to='/articles'>
                            Articles
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function Main(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={ArticleList} />
            <Route exact path="/articles/new" component={ArticleAdd} />
            <Route exact path="/articles/:_id" component={ArticleInfo} />
            <Route exact path="/articles/:_id/edit" component={ArticleEdit} />
        </Switch>
    );
}

function App(){
    return (<div>
    <div>
    <Header />
        <Footer />
    </div>
    <div className="App">
        <Router>
            <Navigation />
            <div className="container">
                <Main />
            </div>
        </Router>
    </div>
    </div>
    );
}

export default App;