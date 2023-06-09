import logo from './logo.svg';
import './App.css';
function App() {
  let myWeakMap = new WeakMap();
  let myElement = {};

  myWeakMap.set(myElement, {timesClicked:0});

  // Set func
  function setFunc() {
    // Set
    const mySet = new Set();
    mySet.add(11);
    mySet.add("some text");
    mySet.add("foo");

    console.log(`Is there 11 in the set? ${mySet.has(11)}`);

    for (const item of mySet) {
      console.log(`There're ${item} in the Set.`);
    }
  }

  // Array func
  function array_func() {
    let cats = ["Dusty", "Minsky", "Twiggy"];
    cats = cats.concat("Winner", "Lesley");

    cats.forEach((cat) => console.log(cat));

    cats.push("Joker");
    console.log(cats);

    cats.shift();
    console.log(cats);

    cats.pop();
    console.log(cats);

    cats.unshift("Wound", "Pickle");
    console.log(cats);

    cats = cats.slice(1, 4);
    console.log(cats);

    console.log(cats.reverse());

    console.log(cats.sort());

    let upperCats = cats.map((cat) => cat.toUpperCase());
    console.log(upperCats);

    cats = cats.join("-");
    console.log(cats);

    let a1 = ["a", 10, "b", 20, "c", 30];
    let a2 = a1.filter((item) => typeof item === "number");
    console.log(a2);

    console.log(a1.every((item) => {
      return typeof item === "number";
    })); // false

    console.log(a2.every((item) => {
      return typeof item === "number";
    })); // true

    console.log(a1.some((item) => {
      return typeof item === "number";
    })); // true, at least one number

    console.log(a2.some((item) => {
      return typeof item === "number";
    })); // true, at least one number
  }

  /*
  * Write a function to select the largest number from 10 random digits in javascript.
  * Sure, here's an example function that will generate 10 random digits (between 0 and 9) and return the largest one:
  */
  /*
   ```javascript
   function getLargestDigit() {
     const digits = [];
     for (let i = 0; i < 10; i++) {
       digits.push(Math.floor(Math.random() * 10));
     }
     return Math.max(...digits);
   }
   ```

   This function first initializes an empty array called `digits`.
   It then uses a `for` loop to generate 10 random digits, and pushes each one onto the `digits` array.
   Finally, it returns the maximum value in the `digits` array using the `Math.max` method and the spread operator (`...`).
  */

  /*
  * Write a regular expression to judge whether it is a legal URL
  * Here is a regular expression to match a legal URL:
  */
  /*
   ```
   ^(http|https)://[a-zA-Z0-9-\.]+\.[a-zA-Z]{2,}(?:/?|[/?]\S+)$
   ```

   This regular expression matches URLs that start with either `http` or `https`, followed by `://`
   and contain a domain name consisting of alphanumeric characters, hyphens, and dots, followed by a top-level domain (such as `.com`, `.net`, or `.edu`).

   The regular expression allows for optional path and query parameters, which can be specified using `/` and `?` characters, respectively.
  */

  /*
  * Listen to the clipboard event on MacOS 13.4. If there's a new copied item, save it to database.
  * There should no more than 255 items in database. Please implement it in JavaScript.
  */
  /*
  * To accomplish this task in JavaScript, you can use the `clipboard` and `localStorage` APIs.
  * Here is some sample code:
  * /
  /*
  ```
  const MAX_ITEMS = 255;

  // listen for clipboard changes
  document.addEventListener('paste', function(event) {
    // get the new clipboard item
    const newItem = event.clipboardData.getData('text');

    // get the current list of items from local storage
    let items = JSON.parse(localStorage.getItem('items') || '[]');

    // add the new item to the list
    items.unshift(newItem);

    // limit the list to MAX_ITEMS
    items = items.slice(0, MAX_ITEMS);

    // save the updated list to local storage
    localStorage.setItem('items', JSON.stringify(items));
  });
  ```

  This code listens for the `paste` event, which is fired whenever something is copied to the clipboard.
  It then gets the new item from the clipboard data and retrieves the current list of items from local storage.
  It adds the new item to the top of the list, limits the list to 255 items, and saves the updated list back to local storage.
  */

  // Closures
  function closures_func() {
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

  function handleClick() {
    let logoData = myWeakMap.get(myElement);
    logoData.timesClicked++;

    console.log(`You've pressed the log for ${logoData.timesClicked} times.`);

    // Set func
    // setFunc();

    // Array func
    // array_func();

    // Closure func
    closures_func();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
