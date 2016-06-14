import React                                        from 'react';
import { Router, Route, Redirect, browserHistory }  from 'react-router';
import TodoContainer                                from 'app/views/todo/todo-container/index.jsx';


export default function renderRoutes(store) {
  return (
    <Router history={browserHistory}>
        <Redirect from="/" to="/todo" />
        <Route path="todo" component={TodoContainer} />
    </Router>
  );
}
