import * as Yup from 'yup'

export const filterValidationSchema = Yup.object().shape({
  bedrooms: Yup.number().positive().integer(),
  bathrooms: Yup.number().positive().integer(),
  parking: Yup.number().positive().integer(),
  priceRange: Yup.number().positive(),
})