
export const SEARCH_CONSTS = {
    SET_EXPRESSION: 'SET_EXPRESSION'
};

export function set_expresion(expression) { return { type: SEARCH_CONSTS.SET_EXPRESSION, expression: expression }; } 