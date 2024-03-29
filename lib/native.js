/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var Boolean = require( '@stdlib/boolean-ctor' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Tests if a finite double-precision floating-point number is a positive integer.
*
* @private
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is a positive integer
*
* @example
* var bool = isPositiveInteger( 3.0 );
* // returns true
*
* @example
* var bool = isPositiveInteger( -4.0 );
* // returns false
*/
function isPositiveInteger( x ) {
	return Boolean( addon( x ) );
}


// EXPORTS //

module.exports = isPositiveInteger;
