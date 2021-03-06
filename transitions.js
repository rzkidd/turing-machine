// const factorial = {
//     char_used: {
//         0: ['1', 'B', '0', 'X']
//     },
//     q0: {
//         0: ["q0", "0", "R"],
//         B: ["q1", "1", "S"],
//     },
//     q1: {
//         0: ["q1", "0", "L"],
//         1: ["q1", "1", "L"],
//         B: ["q2", "B", "R"],
//     },
//     q2: {
//         0: ["q3", "X", "R"],
//         1: ["q5", "1", "R"],
//     },
//     q3: {
//         0: ["q3", "0", "R"],
//         1: ["q3", "1", "R"],
//         B: ["q4", "0", "S"],
//     },
//     q4: {
//         0: ["q4", "0", "L"],
//         1: ["q4", "1", "L"],
//         X: ["q2", "X", "R"],
//     },
//     q5: {
//         0: ["q5", "0", "R"],
//         B: ["q6", "1", "L"],
//     },
//     q6: {
//         0: ["q6", "0", "L"],
//         1: ["q6", "1", "L"],
//         X: ["q6", "0", "L"],
//         B: ["q7", "B", "R"],
//     },
//     q7: {
//         0: ["q8", "B", "R"],
//     },
//     q8: {
//         1: ["q9", "1", "L"],
//         0: ["q9", "X", "R"],
//     },
//     q9: {
//         0: ["q9", "0", "L"],
//         1: ["q9", "1", "L"],
//         X: ["q9", "X", "L"],
//         B: ["q16", "B", "R"],
//     },
//     q10: {
//         0: ["q10", "0", "R"],
//         1: ["q11", "1", "R"],
//     },
//     q11: {
//         0: ["q12", "X", "R"],
//         1: ["q14", "1", "L"],
//     },
//     q12: {
//         0: ["q12", "0", "R"],
//         1: ["q12", "1", "R"],
//         B: ["q13", "0", "S"],
//     },
//     q13: {
//         0: ["q13", "0", "L"],
//         1: ["q13", "1", "L"],
//         X: ["q13", "X", "R"],
//     },
//     q14: {
//         X: ["q14", "0", "L"],
//         1: ["q15", "1", "L"],
//     },
//     q15: {
//         0: ["q15", "0", "L"],
//         1: ["q15", "0", "L"],
//         X: ["q8", "X", "R"],
//     },
//     q16: {
//         X: ["q17", "B", "R"],
//         1: ["q21", "B", "R"],
//     },
//     q17: {
//         X: ["q18", "X", "R"],
//         0: ['q22', 'B', 'R'],
//         1: ['q22', 'B', 'R'],
//     },
//     q18: {
//         0: ["q18", "0", "R"],
//         X: ["q18", "X", "R"],
//         1: ["q19", "1", "R"],
//     },
//     q19: {
//         0: ["q19", "0", "R"],
//         X: ["q19", "X", "R"],
//         1: ["q20", "1", "L"],
//     },
//     q20: {
//         X: ["q20", "X", "L"],
//         0: ["q9", "X", "L"],
//         1: ["q9", "X", "L"],
//     },
//     q21: {
//         0: ["q21", "0", "R"],
//         1: ["q21", "B", "R"],
//         B: ["qAccept", "B", "S"],
//     },
//     q22: {
//         0: ["q22", "B", "R"],
//         X: ["q23", "X", "R"],
//         1: ["qAccept", "B", "S"],
//     },
//     q23: {
//         0: ["q23", "0", "R"],
//         1: ["q23", "1", "R"],
//         X: ["q23", "X", "R"],
//         B: ["q24", "1", "L"],
//     },
//     q24: {
//         0: ["q24", "0", "L"],
//         1: ["q24", "1", "L"],
//         X: ["q24", "0", "R"],
//         B: ["q8", "B", "R"],
//     },
//     qAccept:{
        
//     }
// };

const factorial = {
    char_used: {
        0: ['1', 'B', '0', 'X']
    },
    q0: {
        0: ["q0", "0", "R"],
        B: ["q1", "1", "S"],
    },
    q1: {
        0: ["q1", "0", "L"],
        1: ["q1", "1", "L"],
        B: ["q2", "B", "R"],
    },
    q2: {
        0: ["q3", "X", "R"],
        1: ["q5", "1", "R"],
    },
    q3: {
        0: ["q3", "0", "R"],
        1: ["q3", "1", "R"],
        B: ["q4", "0", "S"],
    },
    q4: {
        0: ["q4", "0", "L"],
        1: ["q4", "1", "L"],
        X: ["q2", "X", "R"],
    },
    q5: {
        0: ["q5", "0", "R"],
        B: ["q7", "1", "L"],
    },
    q6: {
        0: ["q6", "0", "L"],
        1: ["q6", "1", "L"],
        X: ["q6", "X", "L"],
        B: ["q16", "B", "R"],
    },
    q7: {
        0: ["q7", "0", "L"],
        1: ["q7", "1", "L"],
        X: ["q7", "0", "L"],
        B: ["q8", "B", "R"],
    },
    q8: {
        0: ["q9", "B", "R"],
    },
    q9: {
        0: ["q10", "X", "R"],
        1: ["q6", "1", "L"],
    },
    q10: {
        0: ["q10", "0", "R"],
        1: ["q11", "1", "R"],
    },
    q11: {
        0: ["q12", "X", "R"],
        1: ["q14", "1", "L"],
    },
    q12: {
        0: ["q12", "0", "R"],
        1: ["q12", "1", "R"],
        B: ["q13", "0", "S"],
    },
    q13: {
        0: ["q13", "0", "L"],
        1: ["q13", "1", "L"],
        X: ["q11", "X", "R"],
    },
    q14: {
        X: ["q14", "0", "L"],
        1: ["q15", "1", "L"],
    },
    q15: {
        0: ["q15", "0", "L"],
        1: ["q15", "0", "L"],
        X: ["q9", "X", "R"],
    },
    q16: {
        X: ["q17", "B", "R"],
        1: ["q21", "B", "R"],
    },
    q17: {
        X: ["q19", "X", "R"],
        1: ["q18", "B", "R"],
        0: ["q18", "B", "R"],
    },
    q18: {
        0: ["q18", "B", "R"],
        1: ["qAccept", "B", "S"],
        X: ["q22", "X", "R"],
    },
    q19: {
        0: ["q19", "0", "R"],
        X: ["q19", "X", "R"],
        1: ["q20", "1", "R"],
    },
    q20: {
        X: ["q20", "X", "R"],
        0: ["q20", "0", "R"],
        1: ["q21", "1", "L"],
    },
    q21: {
        X: ["q21", "X", "L"],
        0: ["q6", "X", "L"],
        1: ["q6", "X", "L"],
    },
    q22: {
        0: ["q22", "0", "R"],
        X: ["q22", "X", "R"],
        1: ["q22", "1", "R"],
        B: ["q23", "1", "L"],
    },
    q23: {
        0: ["q23", "0", "L"],
        1: ["q23", "1", "L"],
        X: ["q23", "0", "R"],
        B: ["q9", "B", "R"],
    },
    q25: {
        0: ["q25", "0", "R"],
        1: ["q25", "B", "R"],
        B: ["qAccept", "B", "S"],
    },
    qAccept:{
        
    }
};

const division = {
    char_used: {
        0: ['0', '1', 'S', 'M', 'P', 'Y', 'X', 'R', 'B']
    },
    q0: {
        0: ['q0', '0', 'R'],
        M: ['q0', 'M', 'R'],
        1: ['q1', '1', 'R']
    },
    q1: {
        M: ['q1', 'M', 'R'],
        0: ['q2', 'X', 'L']
    },
    q2: {
        M: ['q2', 'M', 'L'],
        1: ['q3', '1', 'L']
    },
    q3: {
        M: ['q3', 'M', 'L'],
        0: ['q3', '0', 'L'],
        B: ['q4', 'B', 'R']
    },
    q4: {
        M: ['q4', 'M', 'R'],
        0: ['q5', 'X', 'R'],
        1: ['q12', '1', 'R']
    },
    q5: {
        0: ['q5', '0', 'R'],
        1: ['q6', '1', 'R']
    },
    q6: {
        M: ['q6', 'M', 'R'],
        X: ['q6', 'X', 'R'],
        R: ['q9', 'R', 'R'],
        B: ['q9', 'R', 'R'],
        0: ['q7', 'X', 'L'],
    },
    q7: {
        M: ['q7', 'M', 'L'],
        X: ['q7', 'X', 'L'],
        1: ['q8', '1', 'L'],
    },
    q8: {
        0: ['q8', '0', 'L'],
        X: ['q4', 'X', 'R'],
    },
    q9: {
        0: ['q9', '0', 'R'],
        B: ['q10', '0', 'L'],
    },
    q10: {
        0: ['q10', '0', 'L'],
        R: ['q11', 'R', 'L'],
    }, 
    q11: {
        X: ['q11', '0', 'L'],
        M: ['q11', 'M', 'L'],
        1: ['q6', '1', 'R']
    },
    q12: {
        M: ['q12', 'M', "R"],
        X: ['q12', 'X', "R"],
        0: ['q12', '0', "R"],
        B: ['q25', 'R', "R"],
        R: ['q13', 'R', "R"],
    },
    q13: {
        0: ['q13', '0', 'R'],
        B: ['q14', 'S', 'L'],
    },
    q14: {
        0: ['q14', '0', 'L'],
        R: ['q14', 'R', 'L'],
        X: ['q14', 'X', 'L'],
        M: ['q14', 'M', 'L'],
        1: ['q14', '1', 'L'],
        B: ['q15', 'B', 'R'],
    },
    q15: {
        0: ['q15', '0', 'R'],
        R: ['q15', 'R', 'R'],
        X: ['q15', 'X', 'R'],
        1: ['q15', '1', 'R'],
        M: ['q16', 'Y', 'R'],
        S: ['q23', 'S', 'R'],
    },
    q16: {
        0: ['q16', '0', 'R'],
        R: ['q16', 'R', 'R'],
        X: ['q16', 'X', 'R'],
        M: ['q16', 'M', 'R'],
        1: ['q16', '1', 'R'],
        S: ['q17', 'S', 'R'],
    },
    q17: {
        B: ['q18', 'M', 'L']
    },
    q18: {
        0: ['q18', '0', 'L'],
        R: ['q18', 'R', 'L'],
        X: ['q18', 'X', 'L'],
        Y: ['q18', 'Y', 'L'],
        1: ['q18', '1', 'L'],
        S: ['q18', 'S', 'L'],
        B: ['q22', 'B', 'R'],
        M: ['q19', 'Y', 'R'],
    },
    q19: {
        0: ['q19', '0', 'R'],
        R: ['q19', 'R', 'R'],
        X: ['q19', 'X', 'R'],
        S: ['q20', 'S', 'R'],
    },
    q20: {
        M: ['q21', 'P', 'R']
    },
    q21: {
        B: ['q25', 'B', 'L']
    },
    q22: {
        Y: ['q22', 'B', 'R'],
        X: ['q22', 'B', 'R'],
        1: ['q22', 'B', 'R'],
        0: ['q22', 'B', 'R'],
        R: ['qAccept', 'R', 'R'],
    },
    q23: {
        B: ['q24', 'P', 'R']
    }, 
    q24: {
        B: ['q25', 'B', 'L']
    },
    q25: {
        0: ['q25', '0', 'L'],
        R: ['q25', 'R', 'L'],
        X: ['q25', 'X', 'L'],
        Y: ['q25', 'Y', 'L'],
        1: ['q25', '1', 'L'],
        S: ['q25', 'S', 'L'],
        P: ['q25', 'P', 'L'],
        B: ['q22', 'B', 'R'],
    },
    qAccept: {

    }
};

const multiplication = {
    char_used: {
        0: ['1', '0', 'B', 'Y', 'M', 'X', 'q']
    },
    q0: {
        M: ["q0", "M", "R"],
        0: ["q1", "X", "R"],
        1: ["q10", "B", "R"]
    },
    q1: {
        0: ["q1", "0", "R"],
        1: ["q2", "1", "R"],
    },
    q2:{
        M: ["q2", "M", "R"],
        0: ["q3", "X", "R"],
        1: ["q7", "1", "L"],
    },
    q3: {
        0: ["q3", "0", "R"],
        1: ["q4", "1", "R"],
    },
    q4: {
        0: ["q4", "0", "R"],
        B: ["q5", "0", "L"],
    },
    q5: {
        0: ["q5", "0", "L"],
        1: ["q6", "1", "L"],
    },
    q6: {
        0: ["q6", "0", "L"],
        X: ["q2", "X", "R"],
    },
    q7: {
        X: ["q7", "0", "L"],
        M: ["q8", "M", "L"],
        1: ["q9", "1", "L"]
    },
    q8: {
        1: ["q9", "1", "L"],
    },
    q9: {
        0: ["q9", "0", "L"],
        X: ["q0", "X", "R"],
    },
    q10: {
        M: ["q10", "M", "R"],
        0: ["q11", "B", "R"],
    },
    q11: {
        0: ["q11", "B", "R"],
        1: ["q12", "1", "L"],
    },
    q12: {
        B: ["q12", "B", "L"],
        X: ["q13", "X", "L"],
        M: ["q18", "Y", "R"],
    },
    q13: {
        X: ["q13", "X", "L"],
        M: ["q15", "Y" ,"R"],
        B: ["qAccept", "B" ,"R"],
    },
    q15: {
        X: ["q15", "B", "R"],
        B: ["q16", "B", "R"],
    },
    q16: {
        B: ["q16", "B", "R"],
        1: ["qAccept" ,"M" ,"R"],
    },
    q18: {
        B: ["q18", "B", "R"],
        1: ["q19", "M", "L"],
    },
    q19: {
        B: ["q19", "B", "L"],
        Y: ["q20", "Y", "L"],
    },
    q20: {
        B: ["q20", "B", "L"],
        X: ["q21", "X", "L"],
    },
    q21: {
        X: ["q21", "X", "L"],
        M: ["q23", "B", "R"],
        B: ["qAccept", "B", "R"],
    },
    q23: {
        X: ["q23", "B", "R"],
        B: ["q24", "B", "R"],
    },
    q24: {
        Y: ["q25", "B", "R"],
    },
    q25: {
        B: ["q25", "B", "R"],
        M: ["qAccept", "B", "R"],
    },
    qAccept: {

    }
};

const celcius_kelvin = {
    char_used: {
        0: [ '0', 'B', 'K', 'M']
    },
    q0: {
        B: ["q1", "B", "R"],
        0: ["q2", "K", "R"],
        M: ["q3", "M", "R"]
    },
    q1: {
        B: ["qAccept", "K", "R"],
    },
    q2:{
        0: ["q2", "0", "R"],
        B: ["qAccept", "0", "R"],
    },
    q3: {
        0: ["q3", "0", "R"],
        B: ["q4", "+", "R"],
    },
    q4: {
        B: ["q5", "K", "R"],
    },
    q5: {
        B: ["qAccept", "B", "R"],
    },
    qAccept: {

    }
};

const kelvin_celcius = {
    char_used: {
        0: ['0', 'B', 'K', 'M']
    },
    q0: {
        B: ["q1", "M", "R"],
        K: ["q2", "B", "R"],
        0: ["q3", "0", "R"]
    },
    q1: {
        B: ["qAccept", "K", "R"],
    },
    q2:{
        0: ["q2", "0", "R"],
        B: ["qAccept", "B", "R"],
    },
    q3: {
        0: ["q3", "0", "R"],
        B: ["q4", "M", "R"],
    },
    q4: {
        B: ["q5", "K", "R"],
    },
    q5: {
        B: ["qAccept", "B", "R"],
    },
    q6: {
        0: ["q6", "0", "L"],
        X: ["q2", "X", "R"],
    },
    qAccept: {

    }
};

const celcius_fahrenheit = {
    char_used: {
        0: ['0', '1', 'B', 'Y', 'X', 'R']
    },
    q0: {
        0: ['q0', '0', 'R'],
        1: ['q1', '1', 'R'],
    },
    q1: {
        0: ['q2', 'Y', 'R']
    },
    q2: {
        0: ['q2', '0', 'R'],
        1: ['q3', '1', 'R']
    },
    q3: {
        0: ['q4', 'X', 'R']
    },
    q4: {
        0: ['q4', '0', 'R'],
        B: ['q5', 'R', 'R'],
        R: ['q5', 'R', 'R'],
    },
    q5: {
        0: ['q5', '0', 'R'],
        B: ['q6', '0', 'L'],
    },
    q6: {
        0: ['q6', '0', 'L'],
        R: ['q7', 'R', 'L'],
    },
    q7: {
        0: ['q4', 'X', 'R'],
        X: ['q8', '0', 'L'],
    },
    q8: {
        1: ['q9', '1', 'L'],
        X: ['q8', '0', 'L']
    },
    q9: {
        0: ['q9', '0', 'L'],
        Y: ['q10', 'Y', 'R']
    },
    q10: {
        0: ['q2', 'Y', 'R'],
        1: ['q11', '1', 'L']
    },
    q11: {
        1: ['q12', '1', 'L'],
        Y: ['q11', 'Y', 'L']
    },
    q12: {
        0: ['q13', 'X', 'R'],
        B: ['q16', 'B', 'R'],
        X: ['q12', 'X', 'L']
    },
    q13: {
        0: ['q13', '0', 'R'],
        1: ['q13', '1', 'R'],
        Y: ['q13', 'Y', 'R'],
        X: ['q13', 'X', 'R'],
        R: ['q14', 'R', 'R'],
    }, 
    q14: {
        0: ['q14', '0', 'R'],
        B: ['q15', '0', 'L']
    },
    q15: {
        0: ['q15', '0', 'L'],
        1: ['q15', '1', 'L'],
        R: ['q15', 'R', 'L'],
        Y: ['q11', 'Y', 'L'],
    },
    q16: {
        0: ['q16', 'B', 'R'],
        1: ['q16', 'B', 'R'],
        Y: ['q16', 'B', 'R'],
        X: ['q16', 'B', 'R'],
        R: ['qAccept', 'R', 'R'],
    },
    qAccept: {
        
    }
};

const logaritma_biner = {
    char_used: {
        0: ['0', '1', 'X', 'B']
    },
    q0: {
        0: ["q1", "0", "R"],
        B: ["qAccept", "B", "R"],
    },
    q1: {
        0: ["q4", "0", "R"],
        B: ["q2", "B", "L"],
    },
    q2: {
        0: ["qAccept", "B", "R"],
    },
    q4: {
        0: ["q5", "X", "R"],
        B: ["q2", "B", "L"],
    },
    q5: {
        0: ["q10", "X", "L"],
        X: ["q5", "X", "R"],
        B: ["q6", "B", "L"],
    },
    q6: {
        0: ["q6", "0", "L"],
        1: ["q6", "1", "L"],
        X: ["q6", "B", "L"],
        B: ["q7", "B", "R"],
    },
    q7: {
        0: ["q8", "0", "R"],
        1: ["q7", "0", "R"],
    },
    q8: {
        0: ["q9", "0", "R"],
        1: ["q8", "0", "R"],
        B: ["q2", "B", "L"],
    },
    q9: {
        0: ["q9", "0", "R"],
        1: ["q9", "0", "R"],
        B: ["qAccept", "B", "L"],
    },
    q10: {
        0: ["q10", "0", "L"],
        1: ["q10", "1", "L"],
        X: ["q10", "X", "L"],
        B: ["q11", "B", "R"],
    },
    q11: {
        0: ["q11", "1", "R"],
        1: ["q12", "0", "R"],
        X: ["q12", "0", "R"],
    },
    q12: {
        0: ["q12", "0", "R"],
        1: ["q12", "1", "R"],
        X: ["q5", "X", "R"],
    },
    qAccept: {
        
    }
};

const substraction_min = {
    char_used: {
        0: ['0', 'C', 'X', 'M', 'B']
    },
    q0: {
        0: ["q1", "X", "R"],
        C: ["q8", "X", "R"],
        X: ["q0", "X", "R"],
        M: ["q0", "M", "R"],
    },
    q1: {
        0: ["q1", "0", "R"],
        C: ["q2", "C", "R"],
    },
    q2: {
        0: ["q3", "X", "L"],
        X: ["q2", "X", "R"],
        M: ["q2", "M", "R"],
        B: ["q4", "B", "L"],
    },
    q3: {
        0: ["q3", "0", "L"],
        C: ["q3", "C", "L"],
        X: ["q3", "X", "L"],
        M: ["q3", "M", "L"],
        B: ["q0", "B", "R"],
    },
    q4: {
        C: ["q5", "0", "L"],
        X: ["q4", "B", "L"],
        M: ["q4", "B", "L"],
    },
    q5: {
        0: ["q5", "0", "L"],
        X: ["q5", "B", "L"],
        M: ["q5", "B", "L"],
        B: ["q6", "B", "R"],
    },
    q6: {
        0: ["q7", "0", "L"],
        B: ["q6", "B", "R"],
    },
    q7: {
        B: ["qAccept", "M", "S"],
    },
    q8: {
        0: ["q8", "0", "R"],
        X: ["q8", "X", "R"],
        M: ["q8", "M", "R"],
        B: ["q9", "B", "L"],  
    },
    q9: {
        0: ["q9", "0", "L"],
        X: ["q9", "B", "L"],
        M: ["q9", "B", "L"],
        B: ["q10", "B", "R"],
    },
    q10: {
        0: ["q11", "0", "L"],
        B: ["q10", "B", "R"],
    },
    q11: {
        B: ["qAccept", "M", "S"],
    },
    qAccept: {

    }
};

const substraction = {
    char_used: {
        0: ['0', 'C', 'X', 'M', 'B']
    },
    q0: {
        0: ["q1", "X", "R"],
        C: ["q13", "C", "R"],
        X: ["q0", "X", "R"],
        M: ["q0", "M", "R"],
    },
    q1: {
        0: ["q1", "0", "R"],
        C: ["q2", "C", "R"],
    },
    q2: {
        0: ["q3", "X", "L"],
        X: ["q2", "X", "R"],
        M: ["q2", "M", "R"],
        B: ["q4", "B", "L"],
    },
    q3: {
        0: ["q3", "0", "L"],
        C: ["q3", "C", "L"],
        X: ["q3", "X", "L"],
        M: ["q3", "M", "L"],
        B: ["q0", "B", "R"],
    },
    q4: {
        C: ["q5", "C", "L"],
        X: ["q4", "B", "L"],
        M: ["q4", "B", "L"],
    },
    q5: {
        0: ["q5", "0", "L"],
        X: ["q6", "0", "L"],
    },
    q6: {
        X: ["q6", "B", "L"],
        M: ["q6", "B", "L"],
        B: ["q7", "B", "R"],
    },
    q7: {
        0: ["q11", "0", "R"],
        C: ["q8", "B", "R"],
        B: ["q7", "B", "R"],  
    },
    q8: {
        0: ["q9", "0", "L"],
        X: ["q8", "X", "R"],
    },
    q9: {
        B: ["qAccept", "M", "S"],
    },
    q11: {
        0: ["q11", "0", "R"],
        C: ["qAccept", "B", "S"],
    },
    q13: {
        0: ["q13", "0", "R"],
        X: ["q13", "X", "R"],
        M: ["q13", "M", "R"],
        B: ["q14", "B", "R"],
    },
    q14: {
        0: ["q14", "0", "L"],
        C: ["q18", "B", "R"],
        X: ["q14", "B", "L"],
        M: ["q15", "B", "L"],
    },
    q15: {
        C: ["q16", "B", "L"],
    },
    q16: {
        X: ["q16", "B", "L"],
        M: ["q16", "B", "L"],
        B: ["qAccept", "B", "L"],
    },
    q18: {
        X: ["q18", "B", "L"],
        B: ["q19", "B", "R"],
    },
    q19: {
        0: ["q20", "0", "L"],
        B: ["q19", "B", "R"],
    },
    q20: {
        B: ["qAccept", "M", "R"],
    },
    qAccept: {

    }
}

const fahrenheit_celcius = {
    char_used: {
        0: ['0', '1', 'X', 'B']
    },
    q0: {
        0: ['q0', '0', 'R'],
        1: ['q1', '1', 'R'],
    },
    q1: {
        0: ['q1', '0', 'R'],
        1: ['q2', '1', 'R'],
    },
    q2: {
        0: ['q2', '0', 'R'],
        B: ['q3', 'B', 'L']
    },
    q3: {
        0: ['q4', 'B', 'L']
    },
    q4: {
        0: ['q4', '0', 'L'],
        1: ['q5', '1', 'L'],
    },
    q5: {
        0: ['q6', 'X', 'R'],
        X: ['q5', 'X', 'L'],
    },
    q6: {
        1: ['q7', '1', 'R'],
        X: ['q6', 'X', 'R']
    },
    q7: {
        0: ['q8', '0', 'R'],
        B: ['q9', 'B', 'L']
    },
    q8: {
        0: ['q8', '0', 'R'],
        B: ['q3', 'B', 'L'],
    },
    q9: {
        0: ['q9', '0', 'L'],
        1: ['q9', '1', 'L'],
        X: ['q9', 'X', 'L'],
        B: ['q10', 'B', 'R'],
    },
    q10: {
        0: ['q11', 'X', 'R']
    },
    q11: {
        0: ['q11', '0', 'R'],
        1: ['q12', '1', 'R'],
    },
    q12: {
        0: ['q13', 'X', 'L'],
        1: ['q18', 'B', 'L'],
        X: ['q12', 'X', 'R'],
    },
    q13: {
        1: ['q14', '1', 'L'],
        X: ['q13', 'X', 'L'],
    },
    q14: {
        0: ['q11', 'X', 'R'],
        X: ['q14', '0', 'L'],
        B: ['q15', 'B', 'R'],
    },
    q15: {
        0: ['q15', '0', 'R'],
        1: ['q16', '1', 'R'],
    },
    q16: {
        0: ['q16', '0', 'R'],
        1: ['q17', '1', 'R'],
        X: ['q16', 'X', 'R'],
    },
    q17: {
        0: ['q17', '0', 'R'],
        B: ['q9', '0', 'L']
    },
    q18: {
        0: ['q18', 'B', 'L'],
        1: ['q18', 'B', 'L'],
        X: ['q18', 'B', 'L'],
        B: ['qAccept', 'B', 'S'],
    },
    qAccept: {

    }
};

const kelvin_fahrenheit = {
    char_used: {
        0: ['1', 'B', '0', 'X', "K", "M", "Y", "R"]
    },
    q0: {
        0: ["q2", "K", "R"],
        B: ["q1", "B", "R"],
        M: ["q3", "M", "R"],
    },
    q1: {
        B: ["q6", "K", "R"],
    },
    q2: {
        0: ["q2", "0", "R"],
        B: ["q6", "0", "R"],
    },
    q3: {
        0: ["q3", "0", "R"],
        B: ["q4", "+", "R"],
    },
    q4: {
        B: ["q5", "K", "R"],
    },
    q5: {
        B: ["q6", "B", "R"],
    },
    q6: {
        B: ["q7", "1", "R"],
    },
    q7: {
        B: ["q8", "0", "R"],
    },
    q8: {
        B: ["q9", "0", "L"],
    },
    q9: {
        1: ["q10", "1", "L"],
    },
    q10: {
        0: ["q10", "0", "L"],
        B: ["q11", "1", "L"],
    },
    q11: {
        B: ["q12", "0", "L"],
    },
    q12: {
        0: ["q13", "0", "L"],
    },
    q13: {
        0: ["q14", "0", "L"],
    },
    q14: {
        0: ["q15", "0", "L"],
    },
    q15: {
        0: ["q16", "0", "L"],
    },
    q16: {
        0: ["q17", "0", "L"],
    },
    q17: {
        0: ["q18", "0", "L"],
    },
    q18: {
        0: ["q19", "0", "L"],
    },
    q19: {
        0: ["q20", "0", "L"],
    },
    q20: {
        0: ["q21", "0", "L"],
    },
    q21: {
        0: ["q22", "0", "L"],
    },
    q22: {
        0: ["q23", "0", "L"],
    },
    q23: {
        0: ["q24", "0", "L"],
    },
    q24: {
        0: ["q25", "0", "L"],
    },
    q25: {
        0: ["q26", "0", "L"],
    },
    q26: {
        0: ["q27", "0", "L"],
    },
    q27: {
        0: ["q28", "0", "L"],
    },
    q28: {
        0: ["q29", "0", "L"],
    },
    q29: {
        0: ["q30", "0", "L"],
    },
    q30: {
        0: ["q31", "0", "L"],
    },
    q31: {
        0: ["q32", "0", "L"],
    },
    q32: {
        0: ["q33", "0", "L"],
    },
    q33: {
        0: ["q34", "0", "L"],
    },
    q34: {
        0: ["q35", "0", "L"],
    },
    q35: {
        0: ["q36", "0", "L"],
    },
    q36: {
        0: ["q37", "0", "L"],
    },
    q37: {
        0: ["q38", "0", "L"],
    },
    q38: {
        0: ["q39", "0", "L"],
    },
    q39: {
        0: ["q40", "0", "L"],
    },
    q40: {
        0: ["q41", "0", "L"],
    },
    q41: {
        B: ["q42", "B", "R"],
    },
    q42: {
        0: ["q42", "0", "R"],
        1: ["q43", "1", "R"],
    },
    q43: {
        0: ["q44", "Y", "R"],
    },
    q44: {
        0: ["q44", "0", "R"],
        1: ["q45", "1", "R"],
    },
    q45: {
        0: ["q46", "X", "R"],
    },
    q46: {
        0: ["q46", "0", "R"],
        B: ["q47", "R", "R"],
        R: ["q47", "R", "R"],
    },
    q47: {
        0: ["q47", "0", "R"],
        B: ["q48", "0", "L"],
    },
    q48: {
        0: ["q48", "0", "L"],
        R: ["q49", "R", "L"],
    },
    q49: {
        0: ["q46", "X", "R"],
        X: ["q50", "0", "R"],
    },
    q50: {
        X: ["q50", "0", "L"],
        1: ["q51", "1", "L"],
    },
    q51: {
        0: ["q51", "0", "L"],
        Y: ["q52", "Y", "R"],
    },
    q52: {
        0: ["q44", "Y", "R"],
        R: ["q53", "1", "L"],
    },
    q53: {
        Y: ["q53", "Y", "L"],
        1: ["q54", "1", "L"],
    },
    q54: {
        0: ["q55", "X", "R"],
        B: ["q58", "B", "R"],
        X: ["q54", "X", "L"],
    },
    q55: {
        0: ["q55", "0", "R"],
        Y: ["q55", "Y", "R"],
        R: ["q56", "R", "R"],
        X: ["q55", "X", "R"],
        1: ["q55", "1", "R"],
    },
    q56: {
        0: ["q56", "0", "R"],
        B: ["q57", "0", "L"],
    },
    q57: {
        0: ["q57", "0", "L"],
        Y: ["q53", "Y", "L"],
        R: ["q57", "R", "L"],
        1: ["q57", "1", "L"],
    },
    q58: {
        0: ["q58", "B", "R"],
        Y: ["q58", "B", "R"],
        R: ["qAccept", "R", "R"],
        X: ["q58", "B", "R"],
        1: ["q58", "B", "R"],
    },
    qAccept:{
        
    }
};

// const power = {
//     char_used: {
//         0: ['C', '0', 'B', 'X', 'M']
//     },

//     q0: {
//         0:["q1", "X", "R"],
//         C:["q31", "B", "R"],
//     },

//     q1: {
//         C: ["q1", "C", "R"],
//         0: ["q1", "0", "R"],
//     },

//     q2: {
//         C: ["q2", "C", "L"],
//         0: ["q2", "0", "L"],
//     },

//     q3:{
//         C: ["q13", "B", "L"],
//         0: ["q4", "X", "R"],
//     },

//     q4:{
//         C:["q5", "C", "R"],
//         0: ["q4", "0", "R"],
//     },

//     q5:{
//         C: ["q9", "C", "R"],
//         0: ["q6", "M", "R"],
//         M: ["q5", "M", "R"],
//     },

//     q6:{
//         C:["q7", "C", "R"],
//         0:["q6", "0", "R"],
//     },

//     q7:{
//         C:["q7", "C", "R"],
//         0:["q7", "0", "R"],
//         B:["q8", "0", "L"],
//     },

//     q8:{
//         C:["q8", "C", "L"],
//         0:["q8", "0", "L"],
//         M:["q5", "M", "R"],
//     },

//     q9:{
//         C:["q9", "C", "R"],
//         0:["q9", "0", "R"],
//         B:["q10", "C", "L"],        
//     },

//     q10:{
//         C:["q10", "C", "L"],
//         0:["q10", "0", "L"],
//         M:["q11", "0", "L"],        
//     },

//     q11:{
//         C:["q12", "C", "L"],
//         M: ["q11", "0", "L"],
//     },

//     q12:{
//         0:["q12", "0", "L"],
//         X:["q2", "X", "R"],
//     },

//     q13:{
//         X:["q15", "B", "L"],
//         B:["q14", "B", "R"],
//     },

//     q14:{
//         0:["q15", "X", "R"],
//         B:["q14", "B", "R"],
//     },

//     q15:{
//         C:["q16", "C", "R"],
//         0:["q15", "0", "R"],
//     },
    
//     q16:{
//         C:["q20", "C", "L"],
//         0:["q17", "M", "R"],
//         M:["q16", "M", "R"],
//         B:["q29", "B", "L"],
//     },

//     q17:{
//         C:["q18", "C", "R"],
//         0:["q17", "0", "R"],
//     },
    
//     q18:{
//         C:["q18","C", "R"],
//         0:["q18", "0", "R"],
//         B:["q19", "0", "L"],        
//     },

//     q19:{
//         C:["q19", "C", "L"],
//         0:["q19", "0", "L"],
//         M:["q16", "M", "R"],
//     },

//     q20:{
//         C:["q21", "C", "L"],
//         M:["q20", "0", "L"],
//     },

//     q21:{
//         0:["q22", "0", "L"],
//         X:["q23", "B", "L"],
//     },

//     q22:{
//         0:["q22", "0", "L"],
//         X:["q14", "X", "R"],
//     },

//     q23:{
//         X:["q23", "B", "L"],
//         B:["q24", "B", "R"],
//     },

//     q24:{
//         C:["q25", "B", "R"],
//         B:["q24", "B", "R"],
//     },

//     q25:{
//         C:["q26", "B", "R"],
//         0:["q25", "B", "R"],
//     },

//     q26:{
//         C:["q27", "C", "R"],
//         0:["q26", "0", "R"],
//         B:["qAccept", "B", "L"],
//     },

//     q27:{
//         C:["q27", "C", "R"],
//         0:["q27", "0", "R"],
//         B:["q28", "C", "L"],
//     },

//     q28:{
//         C:["q28", "C", "L"],
//         0:["q28", "0", "L"],
//         B:["q14", "B", "R"],
//     },

//     q29:{
//         C:["q30", "0", "L"],
//     },

//     q30:{
//         0:["q30", "0", "L"],
//         X:["q26", "B", "R"],
//     },

//     q31:{
//         0:["q31", "B", "R"],
//         B:["q26", "0", "R"],
//     },

//     qAccept:{

//     }
// };

const power={
    char_used: {
      0: ['0', 'C', 'B', 'X', 'Y']
    },

    q0: {
        0:["q1", "X", "R"],
        C:["q31", "B", "R"],
    },

    q1: {
        C: ["q1", "C", "R"],
        0: ["q1", "0", "R"],
        B: ["q2", "C", "L"],
    },

    q2: {
        C: ["q2", "C", "L"],
        0: ["q2", "0", "L"],
        X: ["q3", "X", "R"],
    },
    
    q3:{
        C: ["q13", "B", "L"],
        0: ["q4", "X", "R"],
    },

    q4:{
        C: ["q5", "C", "R"],
        0: ["q4", "0", "R"],
    },

    q5:{
        C: ["q9", "C", "R"],
        0: ["q6", "Y", "R"],
        Y: ["q5", "Y", "R"],
    },

    q6:{
        C:["q7", "C", "R"],
        0:["q6", "0", "R"],
    },

    q7:{
        C:["q7", "C", "R"],
        0:["q7", "0", "R"],
        B:["q8", "0", "L"],
    },

    q8:{
        C:["q8", "C", "L"],
        0:["q8", "0", "L"],
        Y:["q5", "Y", "R"],
    },

    q9:{
        C:["q9", "C", "R"],
        0:["q9", "0", "R"],
        B:["q10", "C", "L"],        
    },

    q10:{
        C:["q10", "C", "L"],
        0:["q10", "0", "L"],
        Y:["q11", "0", "L"],        
    },

    q11:{
        C: ["q12", "C", "L"],
        Y: ["q11", "0", "L"],
    },

    q12:{
        0:["q12", "0", "L"],
        X:["q2", "X", "R"],
    },

    q13:{
        X:["q13", "B", "L"],
        B:["q14", "B", "R"],
    },

    q14:{
        0:["q15", "X", "R"],
        B:["q14", "B", "R"],
    },

    q15:{
        C:["q16", "C", "R"],
        0:["q15", "0", "R"],
    },
    
    q16:{
        C:["q20", "C", "L"],
        0:["q17", "Y", "R"],
        Y:["q16", "Y", "R"],
        B:["q29", "B", "L"],
    },

    q17:{
        C:["q18", "C", "R"],
        0:["q17", "0", "R"],
    },
    
    q18:{
        C:["q18","C", "R"],
        0:["q18", "0", "R"],
        B:["q19", "0", "L"],        
    },

    q19:{
        C:["q19", "C", "L"],
        0:["q19", "0", "L"],
        Y:["q16", "Y", "R"],
    },

    q20:{
        C:["q21", "C", "L"],
        Y:["q20", "0", "L"],
    },

    q21:{
        0:["q22", "0", "L"],
        X:["q23", "B", "L"],
    },

    q22:{
        0:["q22", "0", "L"],
        X:["q14", "X", "R"],
    },

    q23:{
        X:["q23", "B", "L"],
        B:["q24", "B", "R"],
    },

    q24:{
        C:["q25", "B", "R"],
        B:["q24", "B", "R"],
    },

    q25:{
        C:["q26", "B", "R"],
        0:["q25", "B", "R"],
    },

    q26:{
        C:["q27", "C", "R"],
        0:["q26", "0", "R"],
        B:["qAccept", "B", "L"],
    },

    q27:{
        C:["q27", "C", "R"],
        0:["q27", "0", "R"],
        B:["q28", "C", "L"],
    },

    q28:{
        C:["q28", "C", "L"],
        0:["q28", "0", "L"],
        B:["q14", "B", "R"],
    },

    q29:{
        C:["q30", "0", "L"],
    },

    q30:{
        0:["q30", "0", "L"],
        X:["q26", "B", "R"],
    },

    q31:{
        0:["q31", "B", "R"],
        B:["q26", "0", "R"],
    },

    qAccept:{

    }
};

const addition={
    char_used: {
      0: ['C', '0', 'B', 'X', 'M']
    },

    q0: {
        0:["q1", "X", "R"],
        C:["qAccept", "B", "R"],
    },

    q1:{
        0:["q1", "0", "R"],
        C:["q2", "C", "R"],
    },

    q2:{
        0:["q2", "0", "R"],
        B:["q3", "0", "L"],
    },

    q3:{
        0:["q3", "0", "L"],
        C:["q4", "C", "L"],
    },

    q4:{
        0:["q4", "0", "L"],
        X:["q0", "X", "R"],
    },

    qAccept:{
        //
    }
};