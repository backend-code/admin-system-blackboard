import React from 'react';
import { SubMenu } from './webview/components/SubMenu';
import MyCourse from './webview/pages/MyCourse';
import Institute from './webview/pages/Institute';
import Course from './webview/pages/Course';
import Profession from './webview/pages/Profession';
import FreelanceTeacher from './webview/pages/FreelanceTeacher';
import Request from './webview/pages/Request';
import KeyAndCoin from './webview/pages/KeyAndCoin';
import TermOfUse from './webview/pages/TermOfUse';
import { LoginLabel } from './admin/pages/Login';
import { Home } from './app/pages/Home';
import { HomeAdmin } from './admin/pages/HomeAdmin';
import { RegisterLabel } from './admin/pages/Register';

export const routes = {
    webview: [
        {
            name: "Subnmenu",
            exact: true,
            type: "component",
            path: '/webview',
            component: LoginLabel
        },
        {
            name: "Subnmenu",
            exact: true,
            type: "component",
            path: '/webview/submenu',
            component: SubMenu
        },
        {
            name: "My Course Page",
            exact: true,
            type: "page",
            path: '/webview/page/my-course',
            component: MyCourse
        },
        {
            name: "Institute Page",
            exact: true,
            type: "page",
            path: '/webview/page/institute',
            component: Institute
        },
        {
            name: "Course Page",
            exact: true,
            type: "page",
            path: '/webview/page/course',
            component: Course
        },
        {
            name: "Profession Page",
            exact: true,
            type: "page",
            path: '/webview/page/profession',
            component: Profession
        },
        {
            name: "Freelance Teacher Page",
            exact: true,
            type: "page",
            path: '/webview/page/freelance-teacher',
            component: FreelanceTeacher
        },
        {
            name: "Request Page",
            exact: true,
            type: "page",
            path: '/webview/page/request',
            component: Request
        },
        {
            name: "Key & Coin Page",
            exact: true,
            type: "page",
            path: '/webview/page/key_&_coin',
            component: KeyAndCoin
        },
        {
            name: "Term of use Page",
            exact: true,
            type: "page",
            path: '/webview/page/term_of_use',
            component: TermOfUse
        }
    ],
    admin: [
        {
            name: "Home Page",
            exact: true,
            type: "page",
            path: '/admin',
            component: HomeAdmin
        },
        {
            name: "Home Page",
            exact: true,
            type: "page",
            path: '/admin/home',
            component: HomeAdmin
        }
    ],
    app: [
        {
            name: "Login Page",
            exact: true,
            type: "page",
            path: '/',
            component: Home
        }
    ]
};


export const publicAdminRoutes = [
    {
        name: "Login Page",
        exact: true,
        type: "page",
        path: '/admin',
        component: LoginLabel
    },
    {
        name: "Login Page",
        exact: true,
        type: "page",
        path: '/admin/login',
        component: LoginLabel
    },
    {
        name: "Register Page",
        exact: true,
        type: "page",
        path: '/admin/register',
        component: RegisterLabel
    }
]