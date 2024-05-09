import React from 'react'

import FormField from '../../Global/Props/FormField'
import { Form, getIn, setIn } from "formik"
import { LoginSchema } from './LoginSchema'
import { useFormik } from 'formik'
import { Box } from "@mui/material"
import axios from "axios"
import FormButton from '../../Global/Props/FormButton'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../../state/UserState'

const LoginForm = () => {
    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        console.log(values);
        try {
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(values), {
                headers: {
                    "Content-Type": "application/json"
                },

                withCredentials: "true"
            }
            )
            dispatch(login(response.data));


        } catch (e) {
            return e;
        }

    }

    function yupToFormErrors(yupError) {
        let errors = {};

        for (let err of yupError.inner) {
            let fieldErrors = getIn(errors, err.path);
            if (!fieldErrors) {
                fieldErrors = [];
            }
            if (!fieldErrors.includes(err.message)) {
                fieldErrors.push(err.message);
            }
            errors = setIn(errors, err.path, fieldErrors);
        }
        return errors;
    }


    const ValidateYupSchemaArrErrors = async (
        values
    ) => {
        try {
            await LoginSchema.validate(values, {
                abortEarly: false,
            });
            return {};
        } catch (e) {
            return yupToFormErrors(e);
        }
    };

    const { values, errors, touched, handleBlur, handleSubmit, handleChange, isSubmitting } = useFormik({
        initialValues: {
            login: "",
            senha: "",
        },
        validate: values => ValidateYupSchemaArrErrors(values),
        onSubmit
    })

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit}
            autoComplete='off'
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
            height="100%"
        >
            <Box display="flex" flexDirection="column" rowGap="20px">
                <FormField
                    label="Email ou usuário"
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.login}
                    touched={touched.login}
                    error={errors.login}
                    name="login"
                    column={true}
                />
                <FormField
                    label="Senha"
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.senha}
                    touched={touched.senha}
                    error={errors.senha}
                    name="senha"
                    column={true}
                    type="password"
                />
            </Box>
            <Box display="flex" justifyContent="center">
                <FormButton disabled={isSubmitting} />
            </Box>
        </Box>
    )
}

export default LoginForm