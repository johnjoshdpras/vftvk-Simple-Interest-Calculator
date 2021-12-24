function compute()
{   
    
    //the value
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //to validate principal number
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    //find the mathematical value of interest
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseFloat(interest);
    
    //Show the result, toFixed(2) to show only 2 decimals
    document.getElementById("result").innerHTML="If you deposit <mark>"+(principal)+"</mark>,\<br\>at an interest rate of <mark>"+(rate)+"</mark>%\<br\>You will receive an amount of <mark>"+amount.toFixed(2)+"</mark>,\<br\>in the year <mark>"+(year)+"</mark>\<br\>"
}

//to update Rate Value in the slider with percentage
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}