export interface IValidateCreateSafeCommentFormResult {
    text?: string;
    user?: string;
}
export interface ICreateSafeCommentFormData {
    text: string;
    user: string;
}

const validateCreateSafeCommentForm = (data: ICreateSafeCommentFormData): IValidateCreateSafeCommentFormResult =>  {
    const errors: IValidateCreateSafeCommentFormResult = {};
    if(data.text.length < 10) {
        errors.text = "Комментарий не может быть меньше 10 символов"
    }
    if(data.text.length > 40) {
        errors.text = "Комментарий не может быть больше 40 символов"
    }
    if(data.user.length === 0) {
        errors.text = "Поле не может быть пустым"
    }
    if(data.user.length > 10) {
        errors.text = "Поле не может быть больше 10 символов"
    }

    return errors;
}

export default validateCreateSafeCommentForm;