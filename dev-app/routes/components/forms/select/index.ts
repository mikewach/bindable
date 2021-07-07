/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Select {
    public routes = [
        {
            redirect: 'properties',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./properties/index'),
            name: 'properties',
            nav: true,
            route: 'properties',
            title: 'Properties',
        },
        {
            moduleId: PLATFORM.moduleName('./actions/index'),
            name: 'actions',
            nav: true,
            route: 'actions',
            title: 'Actions',
        },
        {
            moduleId: PLATFORM.moduleName('./slots/index'),
            name: 'slots',
            nav: true,
            route: 'slots',
            title: 'Slots',
        },
        {
            moduleId: PLATFORM.moduleName('./theming/index'),
            name: 'theming',
            nav: true,
            route: 'theming',
            title: 'Theming',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
