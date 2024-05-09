import * as yup from "yup";

const passwordRules = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const emailRules = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;


export const Schema = yup.object().shape({
    nome: yup.string().required("O nome é um campo obrigatório!"),
    username: yup.string().required("O usuario é um campo obrigatório!"),
    email: yup.string().matches(emailRules , {message:"O e-mail é inválido"}).required("O e-mail é um campo obrigatório!"),
    senha: yup.string()
    .min(8, "A senha deve ter no minímo 8 caracteres")
    .matches(passwordRules, { message: "A senha deve ter no minímo 1 letra maiuscula, 1 minúscula,  1 Símbolo(@#$!) e 1 digíto"})
    .required("A senha é um campo obrigatório!"),
    confirme_senha: yup.string().oneOf([yup.ref('senha'), null], "As senhas não conferem").required("Confirme sua senha é um campo obrigatório!"),
})
