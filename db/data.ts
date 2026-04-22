export interface Guest {
  id: number;
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  table: string;
  status: "Pendente" | "Confirmada" | "Cancelada";
}

export const guests: Guest[] = [
  {
    id: 1,
    fullName: "Ana Beatriz Souza",
    cpf: "123.456.789-00",
    email: "ana@email.com",
    phone: "(54) 99999-1111",
    table: "Mesa 01",
    status: "Confirmada",
  },
  {
    id: 2,
    fullName: "Carlos Henrique Lima",
    cpf: "987.654.321-00",
    email: "carlos@email.com",
    phone: "(54) 99999-2222",
    table: "Mesa 02",
    status: "Pendente",
  },
  {
    id: 3,
    fullName: "Fernanda Alves",
    cpf: "456.123.789-00",
    email: "fernanda@email.com",
    phone: "(54) 99999-3333",
    table: "Mesa 03",
    status: "Confirmada",
  },
  {
    id: 4,
    fullName: "João Pedro Martins",
    cpf: "321.654.987-10",
    email: "joaopedro@email.com",
    phone: "(54) 99888-1111",
    table: "Mesa 01",
    status: "Pendente",
  },
  {
    id: 5,
    fullName: "Mariana Oliveira",
    cpf: "159.753.486-20",
    email: "mariana@email.com",
    phone: "(54) 99777-2222",
    table: "Mesa 04",
    status: "Confirmada",
  },
  {
    id: 6,
    fullName: "Lucas Carvalho",
    cpf: "258.147.369-30",
    email: "lucas@email.com",
    phone: "(54) 99666-3333",
    table: "Mesa 02",
    status: "Cancelada",
  },
  {
    id: 7,
    fullName: "Bianca Ferreira",
    cpf: "369.258.147-40",
    email: "bianca@email.com",
    phone: "(54) 99555-4444",
    table: "Mesa 05",
    status: "Confirmada",
  },
  {
    id: 8,
    fullName: "Rafael Monteiro",
    cpf: "741.852.963-50",
    email: "rafael@email.com",
    phone: "(54) 99444-5555",
    table: "Mesa 03",
    status: "Cancelada",
  },
  {
    id: 9,
    fullName: "Patrícia Santos",
    cpf: "852.963.741-60",
    email: "patricia@email.com",
    phone: "(54) 99333-6666",
    table: "Mesa 06",
    status: "Confirmada",
  },
  {
    id: 10,
    fullName: "Gabriel Nunes",
    cpf: "963.741.852-70",
    email: "gabriel@email.com",
    phone: "(54) 99222-7777",
    table: "Mesa 02",
    status: "Pendente",
  },
  {
    id: 11,
    fullName: "Juliana Ramos",
    cpf: "147.258.369-80",
    email: "juliana@email.com",
    phone: "(54) 99111-8888",
    table: "Mesa 01",
    status: "Confirmada",
  },
  {
    id: 12,
    fullName: "Eduardo Costa",
    cpf: "258.369.147-90",
    email: "eduardo@email.com",
    phone: "(54) 99000-9999",
    table: "Mesa 04",
    status: "Pendente",
  },
  {
    id: 13,
    fullName: "Amanda Pires",
    cpf: "111.222.333-44",
    email: "amanda@email.com",
    phone: "(54) 98989-1212",
    table: "Mesa 05",
    status: "Confirmada",
  },
  {
    id: 14,
    fullName: "Vinicius Camargo",
    cpf: "222.333.444-55",
    email: "vinicius@email.com",
    phone: "(54) 98888-1313",
    table: "Mesa 07",
    status: "Confirmada",
  },
  {
    id: 15,
    fullName: "Larissa Tavares",
    cpf: "333.444.555-66",
    email: "larissa@email.com",
    phone: "(54) 98787-1414",
    table: "Mesa 06",
    status: "Pendente",
  },
  {
    id: 16,
    fullName: "Felipe Rocha",
    cpf: "444.555.666-77",
    email: "felipe@email.com",
    phone: "(54) 98686-1515",
    table: "Mesa 03",
    status: "Confirmada",
  },
  {
    id: 17,
    fullName: "Sofia Almeida",
    cpf: "555.666.777-88",
    email: "sofia@email.com",
    phone: "(54) 98585-1616",
    table: "Mesa 07",
    status: "Pendente",
  },
  {
    id: 18,
    fullName: "Henrique Barbosa",
    cpf: "666.777.888-99",
    email: "henrique@email.com",
    phone: "(54) 98484-1717",
    table: "Mesa 05",
    status: "Confirmada",
  },
  {
    id: 19,
    fullName: "Camila Dias",
    cpf: "777.888.999-00",
    email: "camila@email.com",
    phone: "(54) 98383-1818",
    table: "Mesa 04",
    status: "Pendente",
  },
  {
    id: 20,
    fullName: "Marcelo Figueiredo",
    cpf: "888.999.000-11",
    email: "marcelo@email.com",
    phone: "(54) 98282-1919",
    table: "Mesa 08",
    status: "Confirmada",
  },
]




export function getGuestById(id: string ) {
  return (guests.find((guest) => guest.id === Number(id)))
}