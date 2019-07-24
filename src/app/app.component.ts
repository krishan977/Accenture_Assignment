import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   keyObj: any = {
    "a": 12345,
    "b": "Name",
    "c": "hh",
    "d": {
      "e": false,
      "f": {
        "g": true,
        "h": null,
      }
    }
  };


  strArray: Array<string> = ['hello world ', 'hello world']

  constructor() {
    let allKey = this.getAllKeys(this.keyObj);
    console.log('-----All Key--------')
    console.log(allKey)
    console.log('-------------')

    let countOfRepeatinCharInArray = this.countOfRepeatingChar(this.strArray)
    console.log('-----countOfRepeatinCharInArray--------')
    console.log(countOfRepeatinCharInArray)
     console.log('-------------')

    let reverseStringUsingBuiltFN = this.reverseStringInBuiltFN('KRISHAN')
    console.log('-----reverseStringUsingBuiltFN--------')
    console.log(reverseStringUsingBuiltFN)
     console.log('-------------')

    let reverseStringArray = ['a', 'b', 'c']
    let reverseStr = this.reverseString(reverseStringArray)
    console.log('-----reverseStr--------')
    console.log(reverseStr)
    console.log('-------------')

    let removeDuplicateStrArray = ['abc', 'bbbd', 'ccc','abc', 'ccc']
   let removeDuplicateStrA= this.removeDuplicateStr(removeDuplicateStrArray)
   console.log('-----removeDuplicateStrA--------')
   console.log(removeDuplicateStrA)
   console.log('-------------')

  }

  //To Return all keys of the object
  getAllKeys(obj: Object): Array<string> {
    return Object.keys(obj).reduce((res, currentKey) => {
      if (Array.isArray(obj[currentKey])) { // checking if any array exist inside object and reutning empty
        return [...res];
      } else if (typeof obj[currentKey] === 'object' && obj[currentKey] !== null) {
        return [...res, currentKey, ...this.getAllKeys(obj[currentKey])];
      } else {
        return [...res, currentKey];
      }
    }, []);
  }

  //To Return Object with Char as key and there repeating count as Value
  countOfRepeatingChar(stringArray: Array<string>): Object {
    let obj: Object = new Object;
    stringArray.forEach(currnetString => {
      currnetString.split('').forEach(currentChar => {
        let l = currentChar
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
      });
    });
    return obj;
  }

  // Reversing the string using the split and reverse fn
  reverseStringInBuiltFN(str: string) {
    return str.split('').reverse().join('')
  }

  //Resversing String without Split and Reverse
  reverseString(str: Array<string>) {
    let revStr: String = new String(''); // Here I have used String object Capital 'S' in string to make it Mutable. 'string' is immutable.
    for (let x = str.length - 1; x >= 0; x--) {
      revStr = revStr.concat(str[x]);
    }
    return revStr
  }

  //Remove Duplicate String form the array and returning back the string.
  removeDuplicateStr(arrayObj: Array<string>): Array<string> {
    var uniqueStringArray: Array<string> = new Array<string>();
    arrayObj.forEach(currentObj => {
      if (uniqueStringArray.indexOf(currentObj) === -1) {
        uniqueStringArray.push(currentObj);
      }
    })
    return uniqueStringArray;
  }


}
