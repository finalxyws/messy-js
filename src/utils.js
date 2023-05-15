// Recusive func
export function recursive_func(i) {
  if (i<0) {
    return;
  }

  console.log(`${i}`);
  recursive_func(i-1);
}

// Nested func
export function nested_func(a,b) {
  function square(x) {
    return x * x;
  }

  return square(a) + square(b);
}

// Closures
export function closures_func() {
  const createPet = function (name) {
    let sex;

    return {
      setName(newNmae) {
        name = newNmae;
      },

      getName() {
        return name;
      },

      getSex() {
        return sex;
      },

      setSex(newSex) {
        if (
          typeof newSex === "string" &&
          (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
        ) {
          sex = newSex;
        }
      },
    };
  }

  const myPet = createPet("Vivie");
  console.log(myPet.getName());

  myPet.setName("Oliver");
  myPet.setSex("male");

  console.log(myPet.getName());
  console.log(myPet.getSex());
}

// Arguments objects
export function arguments_obj_func() {
  function myConcat(seperator) {
    let result = "";

    for (let i=1; i < arguments.length; i++) {
      result += arguments[i] + seperator;
    }

    return result;
  }

  console.log(myConcat(", ", "red", "orange", "blue"));
}

// Write a function to select the largest number from 10 random digits in javascript.
// Sure, here's an example function that will generate 10 random digits (between 0 and 9) and return the largest one:
//
// ```javascript
// function getLargestDigit() {
//   const digits = [];
//   for (let i = 0; i < 10; i++) {
//     digits.push(Math.floor(Math.random() * 10));
//   }
//   return Math.max(...digits);
// }
// ```
//
// This function first initializes an empty array called `digits`.
// It then uses a `for` loop to generate 10 random digits, and pushes each one onto the `digits` array.
// Finally, it returns the maximum value in the `digits` array using the `Math.max` method and the spread operator (`...`).
