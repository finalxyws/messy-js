export function recursive_func(i) {
  if (i<0) {
    return;
  }

  console.log(`${i}`);
  recursive_func(i-1);
}

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