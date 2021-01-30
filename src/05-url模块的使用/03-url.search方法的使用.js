const myURL = new URL('http://localhost:8080/test?name=xiaoming&age=20');
// ?name=xiaoming&age=20
console.log(myURL.search);


const my_url = new URL('http://localhost:8080/test');

my_url.search = 'name=xiaoming&age=20';
console.log(my_url.href);