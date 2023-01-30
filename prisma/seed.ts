import prisma from "../src/database/database.js";
import dayjs from "dayjs";

async function main() {
  await prisma.employees.createMany({
    data: [
      {
        "username": "Lorenzo Augusto",
        "email": "lorenzo@augusto.com",
        "role": "techlead",
        "created_at": dayjs().toDate(),
      },
      {
        "username": "Angela Anine",
        "email": "angela@anine.com",
        "role": "webdeveloper",
        "created_at": dayjs().toDate(),
      },
      {
        "username": "Renan Sertoni",
        "email": "renan@sertoni.com",
        "role": "webdeveloper",
        "created_at": dayjs().toDate(),
      },
      {
        "username": "Sandra Mattus",
        "email": "sandra@mattus.com",
        "role": "techlead",
        "created_at": dayjs().toDate(),
      },
    ],
  });
  await prisma.projects.createMany({
    data: [
      {
        "name": "My Wallet",
        "description": "Projeto FullStack-Carteira Digital",
        "employee_email": "lorenzo@augusto.com",
        "created_at": dayjs().toDate(),
      },
      {
        "name": "Tweetero",
        "description": "Projeto Clone do Twitter",
        "employee_email": "sandra@mattus.com",
        "created_at": dayjs().toDate(),
      },
      {
        "name": "Bate Papo Uol",
        "description": "Projeto Clone do Bate Papo Uol",
        "employee_email": "lorenzo@augusto.com",
        "created_at": dayjs().toDate(),
      },
      {
        "name": "Parrots",
        "description": "Projeto Periquitos do inferno",
        "employee_email": "sandra@mattus.com",
        "created_at": dayjs().toDate(),
      },
    ],
  });
  await prisma.tasks.createMany({
    data: [
      {
        "name": "Login",
        "description": "Implementar rota de login de usuário",
        "project_id": 12,
        "created_at": dayjs().toDate(),
        "done": false,
      },
      {
        "name": "Apagar Post",
        "description":
          "Ao clicar, deve-se abrir uma modal (também chamada de dialog)confirmando a deleção",
        "project_id": 11,
        "created_at": dayjs().toDate(),
        "done": false,
      },
      {
        "name": "Excluir session",
        "description":
          "Ao clicar em Logout ser excluido da tabela sessions, a sessão do usuario",
        "project_id": 10,
        "created_at": dayjs().toDate(),
        "done": false,
      },
      {
        "name": "Curtir um post",
        "description": "Ao clicar novamente no like, o post deve ser descurtido",
        "project_id": 9,
        "created_at": dayjs().toDate(),
        "done": false,
      },
    ],
  });
}main()
.then(() => {
  console.log("Registro feito com sucesso");
})
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect;
});



 