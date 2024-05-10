function createStudent({ id, name }: { id: number; name: string }): {
  id: number;
  name: string;
} {
  return { id, name };
}

const hanzalas = createStudent({ id: 5, name: "hanzala" });
const wosqa = createStudent({ id: 6, name: "wosqa" });

// console.log(hanzalas);
// console.log(wosqa);

function createEmployee(student: { id: number; name: "hanzala" }): {
  id: number;
  name: string;
} {
  return { id: student.id, name: student.name };
}

const docHanzala = createEmployee({ id: 5, name: "hanzala" });
const docwosqa = createEmployee({ id: 5, name: "hanzala" });
console.log(docHanzala);
console.log(docwosqa);
