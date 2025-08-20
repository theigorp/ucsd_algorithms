/*
  *MEDIUM

  LOGIC:
  Sort people in desc. order - the greedy choice is to choose the heaviest person and try to match it with a skinny person if possible.
  Use 2P with l<=r condition (as sometimes there'll be a single person left) and if p[l] + p[r] <= limit, l++; r--; and increment boats
  as we put 2 people in 1 boat. Else, increment boats and l++ as that person is too heavy (or has remained single).


  OPTIMIZATION:
  The runtime is O(nlogn). No optimization can be made.
*/
function boatsToSavePeople(people, limit) {
  //* O(nlogn)
  people.sort((a, b) => b - a);
  let boats = 0;
  let l = 0;
  let r = people.length - 1;
  //* O(n)
  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      boats++;
      l++;
      r--;
    } else {
      boats++;
      l++;
    }
  }

  return boats;
}

// console.log(boatsToSavePeople([5,6,7,8], 9))
// console.log(boatsToSavePeople([5,1,4,2], 6))
// console.log(boatsToSavePeople([5,1,4,2,6,2], 6))
// console.log(boatsToSavePeople([1,1,1,1], 2))
// console.log(boatsToSavePeople([1,1,1,2], 4))
// console.log(boatsToSavePeople([7, 3, 2], 8));
console.log(boatsToSavePeople([1,2,2,3], 3));
