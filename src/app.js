// console.log("hello");

function makesize(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makesize(12);
const size25 = makesize(25);
const size16 = makesize(16);
size25();
