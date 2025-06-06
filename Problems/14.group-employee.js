function group(employees) {
    let map = {};
    let root = null;

    for (let employee of employees) {
        map[employee.id] = { ...employee, subcordinates: [] };
    }

    for (let employee of employees) {
        if (employee.managerId === null) {
            root = map[employee.id];
        } else {
            map[employee.managerId].subcordinates.push(map[employee.id]);
        }
    }
    return root;
}

const employees = [
    { id: 1, name: 'Alice', managerId: null },
    { id: 2, name: 'Bob', managerId: 1 },
    { id: 3, name: 'Charlie', managerId: 1 },
    { id: 4, name: 'David', managerId: 2 },
    { id: 5, name: 'Eve', managerId: 2 }
];

console.log(group(employees));