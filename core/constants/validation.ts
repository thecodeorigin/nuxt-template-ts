export enum VALIDATION_TYPE {
  REQUIRED,
  EMAIL,
  PHONE,
  ALPHA,
  NUMBER,
}

// Wrap with i18n
export const VALIDATION_MESSAGE = Object.freeze({
  [VALIDATION_TYPE.REQUIRED]: 'validate.required',
  [VALIDATION_TYPE.EMAIL]: 'validate.email',
  [VALIDATION_TYPE.PHONE]: 'validate.phone',
  [VALIDATION_TYPE.ALPHA]: 'validate.alpha',
  [VALIDATION_TYPE.NUMBER]: 'validate.number',
});
