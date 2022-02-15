# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: function asserts that two arrays are equal.
* `assertEqual(actual, expected)`: function asserts if two values are equal.
* `assertObjectsEqual(Object1, object 2)`: function asserts if two objects are equal.
* `countLetters`: function counts letters in a phrase.
* `countOnly(array, itemstoCount)`: function counts items in an array based on their      existence in the object itemsToCount.
* `eqArrays(Array, Array2)`: function compares two arrays.
* `eqObjects(Object1, Object2)`: function compares two objects.
* `findKey(object, callBack)`: function accepts object and callBack returns first occurrence that satisfies callback.
* `findKeyByValue(Object, value)`: function accepts an object and a value to search for within the  object, and returns key if the  value is found.
* `head(array)`: function accepts an array and returns first element.
* `tail(array)`: function accepts an array and returns shallow copy starting at index 1.
* `letterPositions(string)`: function accepts string and returns an object with letters and their number of occurences as key:value pairs.
* `map(array)`: function accepts an array and a callBack; returns a new array with results of calling Callback on every element in the array.
* `middle(array)`: function accepts array and returns mid two elements if even or single mid element if odd.
* `takeUntil(array)`: function accepts an array and a callBack. Returns array until call back condition is met.
* `withOut(array)`: function accepts an array and itemsToRemove. Returns filtered array.

