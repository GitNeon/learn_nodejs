const myURL = new URL('http://localhost:8080/test?name=xiaoming&age=20');
console.log(myURL.searchParams.get('name'));
console.log(myURL.searchParams.get('age'));