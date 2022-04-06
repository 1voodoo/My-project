export interface IValidateCreateSafeCommentFormResult {
    user?: string;
    text?: string;
}
export interface ICreateSafeCommentFormData {
    user: string;
    text: string;
}

const validateCreateSafeCommentForm = (data: ICreateSafeCommentFormData): IValidateCreateSafeCommentFormResult =>  {
    const errors: IValidateCreateSafeCommentFormResult = {};
    if(data.user.length < 1) {
        errors.user = "Поле не может быть пустым"
    }
    if(data.user.length > 7) {
        errors.user = "Поле не может быть больше 7 символов"
    }

    if(data.text.length < 1) {
        errors.text = "Комментарий не может быть меньше 1 символов"
    }
    if(data.text.length > 40) {
        errors.text = "Комментарий не может быть больше 40 символов"
    }
    return errors;
}

export default validateCreateSafeCommentForm;