
function Run(transitions, rule_name){
    function replace(to_replace, replacer, index) {
        var temp = to_replace.slice(0, index) + replacer + to_replace.slice(index + 1);
        return temp;
    }

    function deleteBlank(string){
        var noBStart = string.slice(string.search(/[^B]/)-1);
        if(noBStart.indexOf('BB', 1) !== -1){
            var noBEnd = noBStart.slice(0, noBStart.indexOf('B', 1)+1);
            console.log(noBEnd);
            return noBEnd;
        }
        console.log(noBStart);
        return noBStart;
    }

    var input = $('#input').val();
    
    var str_input = input;
    var index = 0;
    var state = 'q0';
    var result = [];
    // console.log(str_input);

    var isStop = false;
    while(!isStop){
        result.push({
            cur_string: 
                (str_input.match('BB') && rule_name !== 'multiplication') ? 
                    (rule_name == 'substraction') ? 
                        str_input 
                        : deleteBlank(str_input) 
                    : str_input,
            cur_index: index,
            state: state
        });
        
        if(!transitions[state][str_input[index]]){
            isStop = true;
            break;
        }
        var [nextState, replacer, direction] = transitions[state][str_input[index]];
        str_input = replace(str_input, replacer, index);
        
        if(direction === 'R'){
            index++;
            state = nextState;
        } else if (direction === 'L'){
            index--;
            state = nextState;
        } else {
            state = nextState;
        }

        if (index === -1) {
			str_input = "B" + str_input;
			index = 0;
		} else if (index === str_input.length) {
			str_input = str_input + "B";
		}

        var test = transitions.char_used[0].find(char => char == str_input[index] );
        console.log([str_input, index, state]);
        test ? isStop = false : isStop = true;
    }

    console.log(result);
    return result;
}

function show_output(val){
    var counter = 0;
    val.every(e => {
        var string;
        if(counter > 1000){
            $('#result').append("<tr><td>.....</td><td></td></tr>");
            return false;
        }
        for(let char in e.cur_string){
            (!string) ? string = e.cur_string[char] + " " : string += e.cur_string[char] + " "; 
        }
        var output = "<tr><td>" + string + "</td><td>" + e.state + "</td></tr>";
        $('#result').append(output);
        counter++;
        return true;
    });
    var string, zero_count = 0;
        for(let char in val[val.length - 1].cur_string){
            (!string) ? string = val[val.length - 1].cur_string[char] + " " : string += val[val.length - 1].cur_string[char] + " ";
            if(val[val.length - 1].cur_string[char] == 0){
                zero_count++;
            } 
        }
    var lastOutput = "<tr><td>" + string + "</td><td>" + zero_count + "</td><td>" + val[val.length - 1].state + "</td></tr>";
    $('#last_result').append(lastOutput);
}

function EgInput(){
    var operasi = $('#operasi').val();
    var addition = "0<sup>n</sup>C0<sup>m</sup>";
    var substraction = "0<sup>n</sup>C0<sup>m</sup>";
    var multiplication = "(M)0<sup>n</sup>1(M)0<sup>m</sup>1";
    var division = "(M)0<sup>n</sup>1(M)0<sup>m</sup>";
    var factorial = "0<sup>n</sup>";
    var power = "0<sup>n</sup>C0<sup>m</sup>";
    var logaritma_biner = "0<sup>n</sup>";
    var celcius_fahrenheit = "0<sup>30</sup>10<sup>n</sup>100";
    var celcius_kelvin = "0<sup>n</sup>";
    var fahrenheit_celcius = "0010<sup>n</sup>10<sup>30</sup>";
    var fahrenheit_kelvin = "";
    var kelvin_celcius = "(K)0<sup>n</sup>";
    var kelvin_fahrenheit = "";

    switch (operasi) {
        case 'addition': Empty('#eg-input'); $('#eg-input').html(addition); break;
        case 'substraction': Empty('#eg-input'); $('#eg-input').html(substraction); break;
        case 'multiplication': Empty('#eg-input'); $('#eg-input').html(multiplication); break;
        case 'division': Empty('#eg-input'); $('#eg-input').html(division); break;
        case 'factorial': Empty('#eg-input'); $('#eg-input').html(factorial); break;
        case 'power': Empty('#eg-input'); $('#eg-input').html(power); break;
        case 'logaritma_biner': Empty('#eg-input'); $('#eg-input').html(logaritma_biner); break;
        case 'celcius_fahrenheit': Empty('#eg-input'); $('#eg-input').html(celcius_fahrenheit); break;
        case 'celcius_kelvin': Empty('#eg-input'); $('#eg-input').html(celcius_kelvin); break;
        case 'fahrenheit_celcius': Empty('#eg-input'); $('#eg-input').html(fahrenheit_celcius); break;
        case 'fahrenheit_kelvin': Empty('#eg-input'); $('#eg-input').html(fahrenheit_kelvin); break;
        case 'kelvin_celcius': Empty('#eg-input'); $('#eg-input').html(kelvin_celcius); break;
        case 'kelvin_fahrenheit': Empty('#eg-input'); $('#eg-input').html(kelvin_fahrenheit); break;
        default:
            break;
    }
}

function Empty(selector){
    $(selector).empty();
}