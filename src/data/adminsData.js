const adminsData = [
  {
    name: 'Sebastian Meneses',
    username: 'sebasmen',
    password: '1234567',
    role: 'admin',
    pemissions: ['fullAccess']
  },
  {
    name: 'Juan David Castro',
    username: 'juandc',
    password: '1234567',
    role: 'editor',
    pemissions: ['edit', 'create', 'view']
  },
  {
    name: 'Freddy Vega',
    username: 'freddier',
    password: '1234567',
    role: 'reader',
    pemissions: ['view']
  }
]

export { adminsData }