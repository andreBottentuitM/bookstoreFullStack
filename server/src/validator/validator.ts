import { checkSchema} from "express-validator";

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
let cA = new Date(year - 1, month, day).toDateString();
let cB = new Date(year - 100, month, day).toDateString();

export const validator :any = {
  editAction: checkSchema({
    name: {
      optional: true,
      trim: true,
      isLength: {
        options: { min: 2 },
      },
      errorMessage: "Nome precisa ter pelo menos 2 caracteres",
    },
    cpf: {
      optional: true,
      isLength: {
        options: { min: 11, max: 11 },
      },
    },
    date: {
        isISO8601: {
            errorMessage: `date of birth is not a valid iso date`
        },
      isBefore: {
        date: '01-01-2008',
        errorMessage: 'should be less than 01-01-2008'
    }as any,
    isAfter: {
        date: '01-01-1920',
        errorMessage: 'should be less than 01-01-1920'
    }as any
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
