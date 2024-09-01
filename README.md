<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isCircular

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if an object-like value contains a circular reference.



<section class="usage">

## Usage

To use in Observable,

```javascript
isCircular = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-circular@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isCircular = require( 'path/to/vendor/umd/assert-is-circular/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-circular@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isCircular;
})();
</script>
```

#### isCircular( value )

Test if an object-like `value` contains a circular reference.

```javascript
var obj = {
    'beep': 'boop'
};
var bool = isCircular( obj );
// returns false

obj.self = obj;
bool = isCircular( obj );
// returns true
```

</section>

<!-- /.usage -->

<!-- /.usage -->

<section class="notes">

## Notes

-   Object-like values include `objects` (except for `null`), `arrays`, `functions`, regular expressions, `Date` objects, and any other JavaScript object to which properties may be bound.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-circular@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var obj1 = {
    'a': 'beep',
    'b': {
        'c': 'boop'
    }
};
obj1.b.self = obj1;
var bool = isCircular( obj1 );
// returns true

var obj2 = {
    'a': {},
    'b': obj1
};
bool = isCircular( obj2 );
// returns true

var arr = [ 1, 2, 3 ];
arr.push( arr );
bool = isCircular( arr );
// returns true

function circ() {}
circ.self = circ;
bool = isCircular( circ );
// returns true

var obj3 = {
    'beep': 'boop'
};
bool = isCircular({
    'a': obj3,
    'b': obj3
});
// returns false

bool = isCircular( {} );
// returns false

bool = isCircular( null );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-circular-array`][@stdlib/assert/is-circular-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array containing a circular reference.</span>
-   <span class="package-name">[`@stdlib/assert-is-circular-plain-object`][@stdlib/assert/is-circular-plain-object]</span><span class="delimiter">: </span><span class="description">test if a value is a plain object containing a circular reference.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-circular.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-circular

[test-image]: https://github.com/stdlib-js/assert-is-circular/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-circular/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-circular/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-circular?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-circular.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-circular/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-circular/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-circular/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-circular/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-circular/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-circular/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-circular/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-circular/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-circular/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-circular-array]: https://github.com/stdlib-js/assert-is-circular-array/tree/umd

[@stdlib/assert/is-circular-plain-object]: https://github.com/stdlib-js/assert-is-circular-plain-object/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
