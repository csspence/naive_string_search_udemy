/*
JavaScript Algorithms and Data Structures Masterclass - Naive String Search

Create a function naiveSearch that accepts two strings.  It should loop over the first string and return the occurrences of the second string.
*/

const naiveSearch = (str1, str2) => {
  let count = 0;
  for(let i = 0; i < str1.length; i++) {
    if(str1[i] === str2[0]) {
      let index = i + 1;
      for(let h = 1; h < str2.length; h++) {
        if(str2[h] === str1[index] && h < str2.length - 1) {
          index++;
          continue;
        } else if(str2[h] === str1[index] && h === str2.length - 1) {
          count++;
        } else {
          break;
        }
      }
    }
  }

  return count;
}

// naiveSearch('jkjakdjiekmkjomgaijdkjjjenndomguujdjomgomg', 'omg'); // 4
// naiveSearch('jakdjfkjakjk4ejkjkemckjukjdkjuuujk', 'omg'); // 0
