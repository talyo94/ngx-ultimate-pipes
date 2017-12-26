# ngx-ultimate-pipes

Collection of useful pipes with **no** dependecies.

## Installation
npm:

`npm install --save ngx-ultimate-pipes`

clone:

`git clone https://github.com/talyo94/ngx-ultimate-pipes.git`


## Features
* No dependecies
* All pipes in the same module - for "built in" filling


## Pipes list
**Example in next section**
* Arrays
	* [EmptyPipe](#emptypipe) - Return true/false if array or object is empty.
	* FilterPipe - Return new array of objects filter that includes a param.
	* JoinPipe - Join array elements with delimiter.
	* ReverseElementsPipe - Return new array with elements reversed.
	* TallyPipe - Returns a summed object of the number of times element exists in array.
* Boolean
	* YesNoPipe - Return yes or no (or costumized value) based on expression.
* Numbers
	* CeilPipe - Ciel a number.
	* FloorPipe - Floor a number.
	* RandomPipe - Return a random number.
	* RoundPipe - Rounding a number
* Text
	* CapfirstPipe - Capitalizing first letter.
	* CountPipe - Counting number of words.
	* CutPipe - Removing value from string.
	* LoremPipe - Generating words/phrases/paragraphs of lorem text.
	* LowerPipe - Lower case.
	* ReversePipe - Return reversed string.
	* ReverseWordsPipe - Return reversed word order.
	* SlugifyPipe - Slugifying a string.
	* TruncateCharsPipe - Truncating the string to certain length.
	* TitlePipe - Capitalizing every word in string and making sure other chars are lowercase.
	* TruncateWordsPipe - Truncate to certain amount of words.
	* UpperPipe - Uppercase a string.
* Time
	* NowPipe - Return the current date.
	* TimesincePipe - Return time since date from now (humanized).
	* TimeuntilPipe  - Return tume until date from now (humanized).
* General
	* DefaultPipe - Set a default value if no value was set
	* DefaultIfFalsePipe - Set a default value if the expression is false.
	* FirstPipe - Returns the first element of array or first char of string.
	* LastPipe - Returns the last element of array or last char of string.


*More To Come :)*

## Examples

### Arrays
#### EmptyPipe ('empty')
Return true/false if array or object is empty.
```
{{ value | empty }}
```
Examples
```
{{ [1, 2, 3] | empty }} // false
{{ [] | empty }} // true
{{ { objects: 'works'} | empty }} // false
{{ { } | empty }} // true

```
#### FilterPipe ('filter')
Gets array of objects and returns new array of objects filter that includes a param.
```

```


#### JoinPipe ('join')
 Join array elements with a delimiter
 ```
 {{ array | join: delimiter }}
 ```
 ```
{{ [1, 2, 3] | join: '@' }} // '1@2@3'
{{ ['first', 'second', 'third'] | join: '' }} // 'firstsecondthird'
 ```

#### ReverseElementsPipe ('reverseelements')
 ```
 {{ array | reverse }}
 ```
 ```
{{ [1, 2, 3] | join: '@' }} // [3, 2, 1]
 ```
#### TallyPipe ('tally')

### Boolean
#### YesNoPipe ('epty')

```

```
















