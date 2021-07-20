const userName=document.getElementById("name");
const phonNo=document.getElementById("phon");
const form = document.getElementById("form")

form.addEventListener('mouseleave', (e)=>
{
 e.preventDefault();
 checkInputs();
});

function checkInputs()
{
    const userNameValue = userName.value.trim();
    //const phoneNoValue =phoneNo.value.trim();

    let validRegex = /^[a-zA-Z ]+$/;
    if (userNameValue.match(validRegex)) 
    {
        setSucessFor(userName);
    }
    else 
    {
        setErrorFor(userName, "Name must be only Alphabets");
    }

}

function setErrorFor(input, message)
{
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');

    small.innerText = message;

    formGroup.className = 'form-group error';
}

function setSucessFor(input)
{
    const formGroup = input.parentElement;
    formGroup.className = 'form-group sucess';
}