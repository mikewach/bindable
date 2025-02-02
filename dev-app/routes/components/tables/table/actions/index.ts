/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

@autoinject()
export class TableActions {
    public tableCols;
    public tableActions;
    public basicCols;
    public basicData;

    public tableActionsSample1 = {
        getRowClass: row => {
            let cls = row._class;
            if (row.name && row.name === 'Fin') {
                cls += ' bgInfo';
            }

            if (row.name && row.name === 'Han Solo') {
                cls += ' notAllowed';
            }

            return cls;
        },

        getColClass: (row, col) => {
            if (col.colHeadName === 'ship') {
                if (row.ship === 'X-Wing') {
                    return 'bgWarning';
                }
            } else if (col.colHeadName === 'name') {
                if (row.name === 'Rey') {
                    return 'bgCritical';
                }
                if (row.name === 'Yoda') {
                    return 'bgProcessing';
                }
                if (row.name === 'Chewbacca') {
                    return 'bgBuilding';
                }
            } else if (col.colHeadName === 'gender') {
                if (row.gender === 'Male') {
                    return 'bgHealthy';
                }
                if (row.gender === 'Null') {
                    return 'bgMajor';
                }
            }
            return col._class;
        },
    };

    public tableActionsSample2 = {
        getColClass: (row, col) => {
            let cls = col._class || '';
            /* istanbul ignore else */
            if (col.colHeadName === 'name') {
                cls += ` ${row._status}`;
            }
            return cls;
        },

        getBarColor: (row, col) => {
            const color = row._barColor || '';
            return color;
        },
    };

    constructor() {
        this.tableCols = [
            {
                _class: 'monospaced',
                colClass: 't215',
                colHeadName: 'name',
                colHeadValue: 'Name',
            },
            {
                _class: 'monospaced',
                colClass: 't270',
                colHeadName: 'value',
                colHeadValue: 'Value',
            },
            {
                colHeadName: 'description',
                colHeadValue: 'Description',
            },
        ];

        this.tableActions = [
            {
                description: 'Bind this to add various css classes to cells and rows.',
                name: 'actions',
                value: 'function',
            },
        ];

        // basic table
        this.basicCols = [
            {
                colClass: 't270',
                colHeadName: 'name',
                colHeadValue: 'Name',
            },
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
            },
            {
                colClass: 't85',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
        ];

        this.basicData = [
            {
                _barColor: 'var(--c_primaryLight)',
                _status: 'bar',
                gender: 'Male',
                name: 'Luke Skywalker',
                ship: 'X-Wing',
            },
            {
                _barColor: 'var(--c_subTwoMain)',
                _status: 'bar',
                gender: 'Male',
                name: 'Han Solo',
                ship: 'M.Falcon',
            },
            {
                _barColor: 'var(--c_secondaryMain)',
                _status: 'bar',
                gender: 'Male',
                name: 'Fin',
                ship: 'M. Falcon',
            },
            {
                _barColor: '#0000FF',
                _status: 'bar',
                gender: 'Female',
                name: 'Rey',
                ship: 'M. Falcon',
            },
            {
                _barColor: 'var(--c_subOneMain)',
                _status: 'bar',
                gender: 'Male',
                name: 'Yoda',
                ship: '',
            },
            {
                _barColor: 'var(--c_subFourLight)',
                _status: 'bar',
                gender: 'Male',
                name: 'Chewbacca',
                ship: 'M.Falcon',
            },
            {
                _barColor: 'var(--c_subFourLighter)',
                _status: 'bar',
                gender: 'Null',
                name: 'Wicket',
                ship: 'Speeder Bike',
            },
            {
                _barColor: 'var(--c_subFourMain)',
                _status: 'bar',
                gender: 'Male',
                name: 'Palpatine',
                ship: '',
            },
        ];
    }
}
