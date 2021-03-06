import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem
}  from 'reactstrap';

// CSS
import './app.css'

const App = () => {

    // Module Federation
    const HomePage = React.lazy(() => import("HomeApp/HomePage"));
    const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));


    return(
        <Router>
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mrAuto" navbar>
                        <NavItem>
                            <Link to="/"> Home </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact"> Contato </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Suspense fallback={ <div> Loading... </div>}>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-6">
                                        <HomePage/>
                                    </div>
                                </div>
                            </div>
                        </Suspense>
                    </Route>
                    <Route exact path="/contact">
                        <Suspense fallback={ <div> Loading... </div>}>
                            <ContactPage/>
                        </Suspense>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;