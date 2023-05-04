import {InputId, Notice} from "../const";

export type ErrorType = {
    [InputId.MAX]: boolean
    [InputId.MIN]: boolean
    [InputId.STEP]: boolean
    message: Notice
}
