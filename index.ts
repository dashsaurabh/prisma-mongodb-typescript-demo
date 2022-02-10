import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.$connect()

    await prisma.book.create({
        data: {
            title: 'Way of Kings',
            author: 'Brandon Sanderson'
        }
    })

    const books = await prisma.book.findMany()

    console.log(books)
}

main()
    .catch((error) => {
        throw error
    })
    .finally(async () => {
        await prisma.$disconnect()
    })