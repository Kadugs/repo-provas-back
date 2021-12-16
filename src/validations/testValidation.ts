import Joi from 'joi';

export default function testValidation(object: object) {
  const testSchema = Joi.object({
    link: Joi.string().min(5).max(765).required(),
    semesterId: Joi.number().min(1).required(),
    categoryId: Joi.number().min(1).required(),
    subjectId: Joi.number().min(1).required(),
    teacherId: Joi.number().min(1).required(),
  });
  const { error } = testSchema.validate(object);
  return !Joi.isError(error);
}
