// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const subjectsData = [
  {
    name: 'B.SC. PHYSICS',
    description:
      'The Bachelor of Science in Physics is a 3-year undergraduate program that provides students with a strong foundation in classical and modern physics, mathematics, and experimental techniques. This program aims to develop analytical thinking, problem-solving abilities, and a deep understanding of the physical laws governing the universe.',
  },
  {
    name: 'B.SC. CHEMISTRY',
    description:
      'This program focuses on the study of matter, its properties, how and why substances combine or separate to form other substances, and how substances interact with energy. Students learn about organic, inorganic, and physical chemistry through rigorous coursework and lab experience.',
  },
  {
    name: 'B.SC. MATHEMATICS',
    description:
      'B.Sc. in Mathematics is an undergraduate degree that provides a deep understanding of mathematical principles, theories, and their applications. The curriculum covers a wide range of topics including calculus, algebra, geometry, differential equations, and statistics, fostering logical and analytical skills.',
  },
  {
    name: 'B.SC. BOTANY',
    description:
      'Botany is the scientific study of plant life. This course covers the structure, growth, reproduction, metabolism, development, diseases, and chemical properties of plants. It is essential for understanding ecosystems and developing new medicines and agricultural products.',
  },
  {
    name: 'B.SC. STATISTICS',
    description:
      'Statistics is the science of collecting, analyzing, interpreting, and presenting data. This program equips students with the skills to work with data in various fields, from business and economics to biology and social sciences, making sense of trends and making informed predictions.',
  },
  {
    name: 'B.SC. GEOLOGY',
    description:
      'Geology is the study of the Earth, the materials of which it is made, the structure of those materials, and the processes acting upon them. It includes the study of organisms that have inhabited our planet and is crucial for resource exploration and understanding natural hazards.',
  },
  {
    name: 'B.SC. ZOOLOGY',
    description:
      'Zoology, or animal biology, is the branch of biology that relates to the animal kingdom, including the structure, embryology, evolution, classification, habits, and distribution of all animals, both living and extinct, and how they interact with their ecosystems.',
  },
  {
    name: 'B.SC. EVS',
    description:
      'Environmental Science (EVS) is an interdisciplinary academic field that integrates physical, biological and information sciences to the study of the environment, and the solution of environmental problems. It provides a comprehensive view of the natural world and our impact on it.',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const s of subjectsData) {
    const subject = await prisma.subject.upsert({
      where: { name: s.name },
      update: {},
      create: {
        name: s.name,
        description: s.description,
      },
    });
    console.log(`Created subject with id: ${subject.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });