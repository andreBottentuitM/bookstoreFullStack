export const Errors = {
  
    validationName(text:string){
        if (text.length < 3) {
            return 'Deve-se ter no mínimo 3 caracteres.'
        } else {
            return ""
        }
    },  
    validationCpf(text:string){
        if (text.length < 14) {
            return 'O CPF deve conter 11 dígitos.'
        } else {
            return ""
        }
    },
    validationDate(text:string){
        const currentlyDate = new Date()
        const currentlyYear = currentlyDate.getFullYear()
        const inputYear = text.split('-')
        if (text.length < 10 || parseInt(inputYear[0]) > currentlyYear || parseInt(inputYear[0]) < 1910) {
            return 'Data de nascimento incorreta.'
        } else {
            return ""
        }
    },
    validationPhone(text:string){
        if (text.length < 15) {
            return 'O telefone deve ter o DDD mais 9 dígitos.'
        } else {
            return ""
        }
    },
    validationEmail(text:string){
        const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (!emailRegex.test(text)) {
            return 'O email está incorreto.'
        } else {
            return ""
        }
    },
    validationPassword(text:string){
        if (text.length < 6) {
            return 'Sua senha tem que ter no mínimo 6 dígitos.'
        } else {
            return ''
        }
    },
    validationConfirm(text:string, password:string){
        if (password !== text) {
            return 'A confirmação de senha não confere.'
        } else {
            return ""
        }
    }

}

