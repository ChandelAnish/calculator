document.getElementById("display").innerHTML="";
let display="";
//fn to display
function fun(val)
{
    display+=val;
    document.getElementById("display").innerHTML=display;
}

//result

//fn to check for left operators
function checkOperator(st)
{
    for(let i=0;i<st.length;i++)
    {
        if(st[i]=='+' || st[i]=='-'|| st[i]=='*'|| st[i]=='/')
        {
            return false;
        }
    }
    return true;
}
//fn to check negative number
function checkNegativeNumber(st)
{
    if(st[0]=='-')
    {
        for(let i=1;i<st.length;i++)
        {
            if(st[i]=='+' || st[i]=='-'|| st[i]=='*'|| st[i]=='/')
            {
                return false;
            }
        }
        return true;
    }
    return false;
}
//fn to perform operation between 2 numbers
function calculateTwo(s,operator,j,k)
{
    let first = "";
    let second = "";
    let result = 0;
    while (s[j] == '0' || s[j] == '1' || s[j] == '2' || s[j] == '3' || s[j] == '4' || s[j] == '5' || s[j] == '6' || s[j] == '7' || s[j] == '8' || s[j] == '9') {
        first = s[j] + first;
        j--;
    }
    while (s[k] == '0' || s[k] == '1' || s[k] == '2' || s[k] == '3' || s[k] == '4' || s[k] == '5' || s[k] == '6' || s[k] == '7' || s[k] == '8' || s[k] == '9') {
        second += s[k];
        k++;
    }
        if(operator=='*')
        {
            result = Number.parseInt(first) * Number.parseInt(second);
        }
        else if(operator=='/')
        {
            result = Number.parseInt(first) / Number.parseInt(second);
        }
        else if(operator=='+')
        {
            result = Number.parseInt(first) + Number.parseInt(second);
        }
        else if(operator=='-')
        {
            result = Number.parseInt(first) - Number.parseInt(second);
        }
        s = s.slice(0, j + 1) + result.toString() + s.slice(k);
        return s;
}
let j;
let k;
//fn to implement BODMAS rule
function bodmas(s)
{
        while(!checkOperator(s))
        {
            //for *
            for(let i=0;i<s.length;i++)
            {
                if(s[i]=='*')
                {
                    j=i-1;
                    k=i+1;
                    return '*';
                }
            }
            //for /
            for(let i=0;i<s.length;i++)
            {
                if(s[i]=='/')
                {
                    j=i-1;
                    k=i+1;
                    return '/';
                }
            }
            //for +
            for(let i=0;i<s.length;i++)
            {
                if(s[i]=='+')
                {
                    j=i-1;
                    k=i+1;
                    return '+';
                }
            }
            //for -
            for(let i=0;i<s.length;i++)
            {
                if(s[i]=='-')
                {
                    j=i-1;
                    k=i+1;
                    return '-';
                }
            }
        }
}

//fn to display result
function displayResult()
{
    let s = display;
    while(!checkOperator(s))
    {
            let operator=bodmas(s);
            s=calculateTwo(s,operator,j,k);
            if(checkNegativeNumber(s))
            {
                break;
            }
    }
    document.getElementById("result").innerHTML=s;
}

//fn to clear
function clearAll()
{
    display="";
    document.getElementById("result").innerHTML=display;
    document.getElementById("display").innerHTML=display;
}

//fn to backspace

function backspace()
{
    display=display.substring(0,display.length-1);
    document.getElementById("display").innerHTML=display;
}