/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import { autoinject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { Router } from 'aurelia-router';

@autoinject()
export class Elements {
    public routes = [
        {
            redirect: 'overview',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./overview/index'),
            name: 'overview',
            nav: true,
            route: 'overview',
            title: 'Overview',
        },
        {
            moduleId: PLATFORM.moduleName('./delete-confirm/index'),
            name: 'delete-confirm',
            nav: true,
            route: 'delete-confirm',
            title: 'Delete Confirm',
        },
        {
            moduleId: PLATFORM.moduleName('./media-object/index'),
            name: 'media-object',
            nav: true,
            route: 'media-object',
            title: 'Media Object',
        },

    ];

    constructor(public router: Router) { }

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
