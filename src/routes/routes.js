import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { history } from '../history';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import baseLogin from '../containers/login/login/index';
import RecuperarSenha from '../pages/RecuperarSenha/index'
import baseDashboard from '../containers/dashboard';
import Perfil from '../pages/perfil';

export default function Routes() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route path="/" exact component={baseLogin(Login)} />
                <Route path="/recuperar-senha"  exact component={baseLogin(RecuperarSenha)} />
                <Route path="/perfil" exact component={baseDashboard(Perfil)} />
                <PrivateRoute path="/dashboard" exact component={baseDashboard(Dashboard)} />
            </Switch>
        </BrowserRouter>
    );
}