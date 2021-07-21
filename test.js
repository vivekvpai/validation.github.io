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

function checkName()
{
    const userNameValue = userName.value.trim();
    
    //const phoneNoValue =phoneNo.value.trim();

    let validRegex = /^[A-Za-z ]+$/;
    if (userNameValue.match(validRegex)) 
    {
        setSucessFor(userName, "Perfect");
    }
    else 
    {
        setErrorFor(userName, 'Alphebts only please');
    }

}

function checkYear()
{
    const gYearValue = gYear.value.trim();
    let validRegex = /^[0-9 ]+$/;
    if (gYearValue.match(validRegex)) 
    {
        setSucessFor(gYear, "Perfect");
    }
    else 
    {
        setErrorFor(gYear, "Grraduation Year must be only Numbers");
    }
}

function checkUsn()
{
    
    
    if (usn.value.trim() !== '') 
    {
        setSucessFor(usn, "Perfect");
    }
    else 
    {
        setEmptyFor(usn, "Oprtional");
    }
}

function checkNumber()
{
    const phonNoValue = phonNo.value.trim();
    let validRegex = /^[0-9 ]+$/;
    let pattern = /^\d{10}$/
    
    if (phonNoValue.match(validRegex) && phonNoValue.match(pattern)) 
    {
        setSucessFor(phonNo, "Perfect");
    }
    else 
    {
        setErrorFor(phonNo, "Must be Number Only");
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