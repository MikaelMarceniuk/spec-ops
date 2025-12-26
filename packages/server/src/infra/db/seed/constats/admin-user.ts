export const adminUser = {
  name: 'John Doe',
  email: 'admin@specops.com',
  password: await Bun.password.hash('12345678'),
}
