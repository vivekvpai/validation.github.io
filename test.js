//alert("connected")

const userName=document.getElementById("name");
const gYear=document.getElementById("gyear");
const usn=document.getElementById("usn");
const numberCode=document.getElementById("number_code");
const phonNo=document.getElementById("contact_number");
const form = document.getElementById("form");


form.addEventListener('mouseout', (e)=>
{
 e.preventDefault();
 checkName();
 checkYear();
 checkUsn();
 checkNumber();
});

function checkAll()
{
    if (checkName() && checkYear() && checkUsn() && checkNumber() === true )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function checkName()
{
    const userNameValue = userName.value.trim();
    let validRegex = /^[A-Za-z ]+$/;
    if (userNameValue.match(validRegex)) 
    {
        setSucessFor(userName, "Perfect");
        return true;
    }
    else 
    {
        setErrorFor(userName, 'Alphabets only please');
        return false;
    }
}

function checkYear()
{
    const gYearValue = gYear.value.trim();
    let validRegex = /^2[0-9 ]+$/;
    if (gYearValue.match(validRegex) && gYearValue.length === 4) 
    {
        setSucessFor(gYear, "Perfect");
        return true;
    }
    else 
    {
        setErrorFor(gYear, "Numbers only please");
        return false;
    }
}

function checkUsn()
{
    const usnValue = usn.value.trim();
    let validRegex = /^[A-Za-z0-9 ]+$/;
    
    if (usnValue.match(validRegex) && usnValue !== '' && usnValue.length === 10)   
    {
        setSucessFor(usn, "Perfect");
        return true;
    }
    else 
    {
        if (usnValue == "")
        {
            setEmptyFor(usn, "Oprtional");
            return true;
        }
        else
        {
            setErrorFor(usn, "Invalid");
            return false;
        }
        
    }
}

function checkNumber()
{
    const phonNoValue = phonNo.value.trim();
    let validRegex = /^[0-9 ]+$/;    
    if (phonNoValue.match(validRegex) && phonNoValue.length === 10) 
    {
        setSucessFor(phonNo, "Perfect");
        return true;
    }
    else 
    {
        if(phonNoValue.length !== 10)
        {
            setErrorFor(phonNo, "Enter 10 digits");
            return false;
        }
        else
        {
            setErrorFor(phonNo, "Must be Number Only");
            return false;
        }
    }
}

function setErrorFor(input, message)
{
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    formGroup.className = 'form-group error';
}

function setSucessFor(input, message)
{
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    formGroup.className = 'form-group sucess';
}

function setEmptyFor(input, message)
{
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    formGroup.className = 'form-group empty';
}