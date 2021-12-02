/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ExampleLayouts {
    public goToExample(url) {
        // window.location.href = `#/${url}`;
        window.open(`#/${url}`, '_blank');
    }
}
