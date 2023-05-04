export enum Button {
    INCREASE = 'inc',
    DECREASE = 'dec',
    RESET = '↻',
    SET = 'set',
}

export enum Default {
    MAX_VALUE = 5,
    MIN_VALUE = 1,
    STEP = 1,
}

export enum StorageKey {
    MAX_VALUE = 'MaxValue',
    MIN_VALUE = 'MinValue',
    COUNTER_STEP = 'CounterStep',
}

export enum Notice {
    DEFAULT = '',
    INCORRECT_VALUE = 'INCORRECT VALUE',
    PRESS_SET = `ENTER VALUES AND PRESS 'SET'`,
}

export enum InputId {
    MAX = 'max_value',
    MIN = 'min_value',
    STEP = 'value_step',
    NONE= '',
}
