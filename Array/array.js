const nationality = ['mexicano', 'argentino', 'argentino', 'venezolano', 'peruano', 'mexicano', 'argentino', 'peruano', 'venezolano'];

const count = {};

nationality.forEach(nationalities =>{
    count[nationalities] = (count[nationalities] || 0) + 1;
});

console.log(count)