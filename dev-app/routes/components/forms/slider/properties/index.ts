/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class SliderProperties {
    public vFormSliderOutput = 2;

    public formSliderCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't340',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public formSliderProperties = [
        {
            description: 'Set the text for the error message',
            name: 'error-msg',
            value: '',
        },
        {
            description: 'Set if you need an id on the textarea.',
            name: 'id',
            value: 'string',
        },
        {
            default: '4',
            description: 'Set how many increments you want in the slider. It is zero based.',
            name: 'increments',
            value: 'number',
        },
        {
            default: 'false',
            description: 'Set the label and slider to be side by side.',
            name: 'inline',
            value: 'boolean',
        },
        {
            description: 'Set the text for the label. If left off no label will be placed.',
            name: 'label',
            value: '',
        },
        {
            description: 'Value the input puts out.',
            name: 'slider-value',
            value: 'number',
        },
        {
            description: 'Time before an update bubbles back up.',
            name: 'debounce-time',
            value: 'number',
        },
        {
            description: 'Set the state of the input.',
            name: 'state',
            value: 'error | disabled | hidden',
        },
    ];
}
