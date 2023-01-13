export const Errors = {
  validationName(text: string) {
    if (text.length < 3) {
      return "Deve-se ter no mínimo 3 caracteres.";
    } else {
      return "";
    }
  },
  validationCpf(text: string) {
    text = text.replace(/[\s.-]*/gim, "");
    if (
      !text ||
      text.length !== 11 ||
      text === "00000000000" ||
      text === "11111111111" ||
      text === "22222222222" ||
      text === "33333333333" ||
      text === "44444444444" ||
      text === "55555555555" ||
      text === "66666666666" ||
      text === "77777777777" ||
      text === "88888888888" ||
      text === "99999999999"
    ) {
      return "CPF inválido.";
    }
    let sum = 0;
    let rest;
    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(text.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(text.substring(9, 10))) return "CPF inválido."
    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(text.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(text.substring(10, 11))) return "CPF inválido."
    return "";
  },
  validationDate(text: string) {
    const currentlyDate = new Date();
    const currentlyYear = currentlyDate.getFullYear();
    const inputYear = text.split("-");
    if (
      text.length < 10 ||
      parseInt(inputYear[0]) > currentlyYear ||
      parseInt(inputYear[0]) < 1910
    ) {
      return "Data de nascimento incorreta.";
    } else {
      return "";
    }
  },
  validationPhone(text: string) {
    if (text.length < 15) {
      return "O telefone deve ter o DDD mais 9 dígitos.";
    } else {
      return "";
    }
  },
  validationEmail(text: string) {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailRegex.test(text)) {
      return "O email está incorreto.";
    } else {
      return "";
    }
  },
  validationPassword(text: string) {
    if (text.length < 6) {
      return "Sua senha tem que ter no mínimo 6 dígitos.";
    } else {
      return "";
    }
  },
  validationConfirm(text: string, password: string) {
    if (password !== text) {
      return "A confirmação de senha não confere.";
    } else {
      return "";
    }
  },
};
