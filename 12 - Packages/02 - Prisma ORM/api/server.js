import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

Create
async function createData() {
  const newUser = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@example.com",
      posts: {
        create: {
          title: "My First Post",
          content: "This is the content of my first post",
        },
      },
    },
  })

  console.log(newUser)
}

createData()


/* Read
async function getUser() {
  const user = await prisma.user.findUnique({
    where: {
      email: "johndoe@example.com",
    },
    include: {
      posts: true,  // Incluir os posts relacionados ao usuário
    },
  })

  console.log(user)
}

// Buscar todos os usuários
async function getAllUsers() {
  const users = await prisma.user.findMany()
  console.log(users)
}

getUser()
getAllUsers()
*/

/* Update
async function updateUser() {
  const updatedUser = await prisma.user.update({
    where: {
      email: "johndoe@example.com",
    },
    data: {
      name: "Johnathan Doe",  // Atualiza o nome do usuário
    },
  })

  console.log(updatedUser)
}

updateUser()
*/

/* Delete
async function deleteUser() {
  const deletedUser = await prisma.user.delete({
    where: {
      email: "johndoe@example.com",
    },
  })

  console.log(deletedUser)
}

deleteUser()
*/

/* 7. Fechando a Conexão

async function main() {
  await createData()
  await getUser()
  await updateUser()
  await deleteUser()
  await prisma.$disconnect()  // Fecha a conexão
}

main()
*/