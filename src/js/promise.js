function greet() {
  console.log('hello world');
}
greet();

new Promise(resolve => {
  setTimeout(() => resolve('hello world'), 2000);
}).then(response => console.log(response));
