var person = {
    name: 'sanketh',
    company: 'nspira'
}

var anotherperson = Object.create(person);
anotherperson.location = 'USA';

console.log(anotherperson);