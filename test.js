const userName=document.getElementById("name");
const gYear=document.getElementById("gyear");
const usn=document.getElementById("usn");
const numberCode=document.getElementById("number_code");
const phonNo=document.getElementById("contact_number");
const branch=document.getElementById("branch");
const form = document.getElementById("form1");


form.addEventListener('click', (e)=>
{
 e.preventDefault();
 checkName();
 checkUsn();
 checkYear();
 checkNumber();
});

function checkAll()
{
    if (checkName() && checkYear() && checkUsn() && checkNumber()  === true )
    //if( checkName() && checkUsn() === true )
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

function checkUsn()
{
    const usnValue = usn.value.trim();
    let validRegex = /^[A-Za-z0-9]+$/;
    
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
        setErrorFor(gYear, "Numbers only please Starting with 2XXX");
        return false;
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

var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
        var list5 = [];

		var n = 1;
		var x = 0;

		function AddRow(){

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = userName.value.toUpperCase() ;
			list2[x] = usn.value.toUpperCase() ;
			list3[x] = branch.value.toUpperCase() ;
			list4[x] = gYear.value.toUpperCase() ;
            list5[x] = phonNo.value.toUpperCase() ;

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
            cel5.innerHTML = list5[x];

			n++;
			x++;
		}
