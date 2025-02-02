/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class FileSlots {
    public formFileColsSlots = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public formFileOptionsSlots = [
        {
            description: 'Use when you need to put a tip next to the label.',
            name: 'tip',
        },
    ];
}
