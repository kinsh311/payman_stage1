import React from 'react';
import { BrowserRouter ,Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import Header from './../components/Header';
import EditExpensePage from './../components/EditExpensePage';
import AddExpensePage from './../components/AddExpensePage';
import NotFoundPage from './../components/NotFoundPage';
import HelpPage from './../components/HelpPage';

const AppRouter = () => ( /*switch stops searching whenever it finds the match ..here whenever the error page is asked for ..it wont match for any other component and lastly it will render ErrorPage component*/
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Header} exact={true} />
                <Route path="/home" component={ExpenseDashboardPage} exact={true}/> {/*only these components are having access to router props , not those which are deifined outside the router*/}
                <Route path="/create" component={AddExpensePage} exact={true} />
                <Route path="/edit/:id" component={EditExpensePage} exact={false}/>
                <Route path="/help" component={HelpPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;