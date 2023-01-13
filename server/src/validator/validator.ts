import { checkSchema} from "express-validator";

export const validator :any = {
  editAction: checkSchema({
    name: {
      optional: true,
      trim: true,
      isLength: {
        options: { min: 3 },
      },
      errorMessage: "Nome precisa ter pelo menos 3 caracteres.",
    },
    cpf: {
      custom: {
        options: (value, { req }) => {
          
          value = value.replace(/[\s.-]*/gim, "");
    if (
      !value ||
      value.length !== 11 ||
      value === "00000000000" ||
      value === "11111111111" ||
      value === "22222222222" ||
      value === "33333333333" ||
      value === "44444444444" ||
      value === "55555555555" ||
      value === "66666666666" ||
      value === "77777777777" ||
      value === "88888888888" ||
      value === "99999999999"
    ) {
      return false
    }
    let sum = 0;
    let rest;
    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(value.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(value.substring(9, 10))) false
    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(value.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(value.substring(10, 11))) return false
    return true;
        }
    }
    },
    phone:{
      isLength: {
        options: { min: 15, max: 15 },
      },
      errorMessage: "O telefone deve ter o DDD mais 9 números.",
    },
    cep:{
      isLength: {
        options: { min: 9, max: 9 },
      },
      errorMessage: "O CEP deve ter 8 números.",
    },
    street:{
      isLength: {
        options: { min: 1, max:40 },
      },
      errorMessage: "Preencha o campo rua.",
    },
    numberResidence:{
      isLength: {
        options: { min: 0, max:40 },
      }
    },
    complement:{
      isLength: {
        options: { min: 0, max:40 },
      }
    },
    city:{
      isLength: {
        options: { min: 1, max:40 },
      },
      errorMessage: "Preencha o campo cidade."
    },
    neighbourhood:{
      isLength: {
        options: { min: 1, max:40 },
      },
      errorMessage: "Preencha o campo bairro."
    },
    state:{
      isLength: {
        options: { min: 2, max:40 },
      },
      errorMessage: "Preencha o campo estado."
    },
    date: {
      custom: {
          options: (value, { req }) => {
            let limitDate = new Date().getFullYear() - 15
            let initialDate = new Date().getFullYear() - 100
              let validatingLimitDate = value.split('-')[0] > initialDate && limitDate > value.split('-')[0] ?
              true : false
              const dateFormat = /^\d{4}\-\d{2}\-\d{2}$/;
              if (!dateFormat.test(value) || !validatingLimitDate) {
                throw new Error("Invalid date format. Use yyyy/mm/dd");
              }
              return true;
          }
      }
  },
    email: {
      optional: true,
      isEmail: true,
      normalizeEmail: true,
      errorMessage: "E-mail inválido",
    },
    password: {
      optional: true,
      isLength: {
        options: { min: 6 },
      },
      errorMessage: "Senha precia ter pelo menos 6 caracteres",
    },
  }),
};
