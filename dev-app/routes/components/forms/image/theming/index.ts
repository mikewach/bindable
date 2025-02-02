/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
 */

export class FormImageThemeProperties {
    public formImageThemeCols = [
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
            colClass: 't350',
            colHeadName: 'default',
            colHeadValue: 'Bindable Theme',
        },
    ];

    public formImageThemeProperties = [
        {
            default: '#3C3C3C',
            name: '--form-image-hover-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--form-image-description-color',
            property: 'color',
        },
        {
            default: 'var(--ff_primary-bold)',
            name: '--form-image-description-font-family',
            property: 'font-family',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--form-image-active-background',
            property: 'background-color',
        },
    ];
}
