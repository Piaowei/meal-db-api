const person = { total: [{ name: "alwex", id: '100' }, { name: "bella", id: '200' }] };

for (x of person.total) {
	console.log(x.name);
}