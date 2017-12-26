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
 ### Boolean

#### ReverseElementsPipe ('reverseelements')
 ```
 {{ array | reverse }}
 ```
 ```
{{ [1, 2, 3] | join: '@' }} // [3, 2, 1]
 ```
#### TallyPipe ('tally')
```
{{ array | tally }}
```
```
['apple', 'banana', 'orange', 'tomato', 'apple', 'apple', 'apple', 'banana', 'orange', 'banana', 'orange', 'cucumber'] -> {{['apple', 'banana', 'orange', 'tomato', 'apple', 'apple', 'apple', 'banana', 'orange', 'banana', 'orange', 'cucumber'] | tally }}  // { "apple": 4, "banana": 3, "orange": 3, "tomato": 1, "cucumber": 1 }
```

### Boolean
#### YesNoPipe ('yesno')
This will return yes no or maybe according to the values -
If value is true, will return yes (or first arg). If false, will return no (or second arg). If value in none will return maybe (if value exists as third arg) or no (or second arg).

```
{{ value | yesno }}
{{ value | yesno: ['sure', 'nope'] }}
{{ value | yesno: ['sure', 'nope', 'mayhaps'] }}
```
```
{{ true | yesno }} -> 'yes'
{{ false | yesno }} -> 'no'
{{ true | yesno: ['yeah', 'nope'] }} -> 'yeah' (false will return nope)
{{ undified | yesno }} -> 'no'
{{ undified | yesno: ['yeah', 'nope', 'maybe'] }} -> 'maybe'
```


### Time
#### NowPipe ('now')
Return the current date. Use built-in date pipe to format
```
{{ '' | now }}
```
#### TimesincePipe ('timesince')
Return time since date from now (humanized).
This will return as `x days y hours z minutes a seconds` if any is 0, it would'nt be displayed.
```
{{ Date | timesince }}
```
```
{{ Date | timesince }} -> 11 days, 23 hours , 59 minutes, 31 seconds
```

#### TimeuntilPipe ('timeuntil')
Return time until date from now (humanized).
This will return as `x days y hours z minutes a seconds` if any is 0, it would'nt be displayed.
```
{{ Date | timeuntil }}
```
```
{{ Date | timeuntil }} -> 26 days, 28 seconds
```

