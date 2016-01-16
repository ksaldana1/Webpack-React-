export default function() {
  var element = document.createElement('h1');
  function test(x = 1) {
    return x;
  };



  element.innerHTML = test();

  return element;
}
