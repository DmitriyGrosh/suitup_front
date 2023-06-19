import * as yup from 'yup';

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

export const loginSchema = yup
  .object()
  .shape({
    username: yup.string().required(),
    password: yup
      .string()
      .required('Please enter a password')
      .min(8, 'Password must have at least 8 characters')
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
  })
  .required();

export type TLoginSchema = yup.InferType<typeof loginSchema>;
