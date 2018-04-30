function validator228(x, y) {
  for (var i = 0; i < x.length; i++) {
    var key = x[i];
    if (!(y.hasOwnProperty(key))) {
      throw new Error(key + " wasn't passed on object");
    }
  }
  return true;
}

try {
  console.log(validator228(["name", "surname"], {
    name: "Artem",
    surname: "Chepeliuk"
  }));
  console.log(validator228(["name", "surname", "age"], {
    name: "Artem",
    surname: "Chepeliuk"
  }));
} catch (error) {
  console.log(error.message);
}