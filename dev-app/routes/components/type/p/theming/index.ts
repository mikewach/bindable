/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class PThemeProperties {
    public pThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colHeadName: 'property',
            colHeadValue: 'CSS Property',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Bindable Theme',
        },
    ];

    public pThemeProperties = [
        {
            default: 'var(--s1)',
            name: '--p-font-size-xlarge',
            property: 'font-size',
        },
        {
            default: 'var(--s0)',
            name: '--p-font-size-large',
            property: 'font-size',
        },
        {
            default: 'var(--s-1)',
            name: '--p-font-size-medium',
            property: 'font-size',
        },
        {
            default: 'var(--s-2)',
            name: '--p-font-size-small',
            property: 'font-size',
        },
    ];
}
