import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('A username is required!')
        .min(2, 'Username must be at least 2 characters!'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('An email is required!'),
    password: yup
        .string()
        .required('A password is required!')
        .min(6, 'Password must be at least 6 characters!'),
    terms: yup.boolean(),
})

export default formSchema;