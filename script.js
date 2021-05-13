function compute(){
    var principal = document.getElementById("principal").value
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value
    var amount = principal * years * rate / 100
    var year = new Date().getFullYear()+parseInt(years)

    p = document.getElementById("principal").value;
    
    if (principal < 1) {
        alertOne()
        document.getElementById("principal").focus()
    } else {
        document.getElementById("resultone").innerHTML="If you deposit <span style='background-color:#FFFF00'>"+principal+"</span><br> at an interest rate of <span style='background-color:#FFFF00'>"+rate+"</span>.<br> You will receive an amount of <span style='background-color:#FFFF00'>"+amount+"</span>,<br> in the year <span style='background-color:#FFFF00'>"+year+"</span>"
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value
    document.getElementById("rate_val").innerText=rateval
}

function alertOne() {
    alert ("NUMBER MUST BE GREATER THAN 0")
}