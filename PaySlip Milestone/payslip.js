function totalSalary(){


    var salary=document.getElementById("total_value").value;

    var regularearn=document.getElementById("regular_earn").value=salary*(50/100);
    var overtime=document.getElementById("overtime_earn").value=salary*(10/100);
    var incectiveearn=document.getElementById("incective_earn").value=salary*(5/100);
    var bonusearn=document.getElementById("bonus_earn").value=salary*(5/100);
    var maintananceearn=document.getElementById("maintanance_earn").value=salary*(10/100);
    var houserentearn=document.getElementById("houserent_earn").value=salary*(10/100);
    var educationearn=document.getElementById("education_earn").value=salary*(0/100);
    var carearn=document.getElementById("car_earn").value=salary*(0/100);
    var otherearn=document.getElementById("other_earn").value=salary*(0/100);
    var fuelearn=document.getElementById("fuel_earn").value=salary*(0/100);

    // const playslipJSON=()=>{

    // localStorage.setItem("Total Salary",salary);
    // localStorage.setItem("Regular Salary", regularearn);
    // localStorage.setItem("Overtime",overtime);
    // localStorage.setItem("Incective",incectiveearn);
    // localStorage.setItem("Bonus",bonusearn);
    // localStorage.setItem("Maintanance",maintananceearn);
    // localStorage.setItem("Houserent",houserentearn);
    // localStorage.setItem("Education",educationearn);
    // localStorage.setItem("Car",carearn);
    // localStorage.setItem("Other",otherearn);
    // localStorage.setItem("Fuel",fuelearn);

    // }

    // localStorage.setItem("playslipJSON",JSON.stringify(playslipJSON));





    // var totaldeduction=document.getElementById("total_deduction").value=(providentfund+fedaralWithholding+FedaralMED+FedaralOSADI+statewithholding+incometax+Professionalloan+providentfund+Professionaltax+Advancesalary+otherdeduction);

    // var total=parseInt(totaldeduction);
    // var net=parseInt(netsalary);


    var providentfund=document.getElementById("provident_fund").value=salary*(4/100);
    var fedaralWithholding=document.getElementById("fedaral_Withholding").value=salary*(1/100);
    var FedaralMED=document.getElementById("Fedara_lMED").value=salary*(0/100);
    var FedaralOSADI=document.getElementById("Fedaral_OSADI").value=salary*(0/100);
    var statewithholding=document.getElementById("state_withholding").value=salary*(0/100);
    var incometax=document.getElementById("income_tax").value=salary*(0/100);
    var Professionaltax=document.getElementById("Professional_tax").value=salary*(0/100);
    var Professionalloan=document.getElementById("Professional_loan").value=salary*(0/100);
    var Advancesalary=document.getElementById("Advance_salary").value=salary*(0/100);
    var otherdeduction=document.getElementById("other_deduction").value=salary*(0/100);
    var sum=parseFloat(salary*(4/100)+salary*(1/100)+salary*(0/100))
    document.getElementById("total_deduction").value=sum;

    document.getElementById("net_salary").value=salary-sum;
    
    // var regular=parseInt(regularearn);
    // var overtime=parseInt(overtime);
    // var incective=parseInt(incectiveearn);
    // var bonus=parseInt(bonusearn);
    // var maintanance=parseInt(maintananceearn);
    // var houserent=parseInt(houserentearn);
    // var education=parseInt(educationearn);
    // var car=parseInt(carearn);
    // var other=parseInt(otherearn);
    // var fuel=parseInt(fuelearn);
}

function printJSON(){

const playslipJSON={
    EmployeeUser:document.getElementById("employeevalue").value,
    EmployeeAddress:document.getElementById("employeeaddress").value,
    EmployeeID:document.getElementById("employeeid").value,
    EmlloyeeContact:document.getElementById("emlloyeecontact").value,
    EmployeeName:document.getElementById("employeename1").value,
    SalaryDate:document.getElementById("salarydate").value,
    SSN:document.getElementById("ssn").value,
    ModeofPayment:document.getElementById("modeofpayment").value,

    TotalValue:document.getElementById("total_value").value,
    RegularSalary:document.getElementById("regular_earn").value,
    OverTime:document.getElementById("overtime_earn").value,
    IncectivePay:document.getElementById("incective_earn").value,
    Bonus:document.getElementById("bonus_earn").value,
    MaintainAllowance:document.getElementById("maintanance_earn").value,
    Houserent:document.getElementById("houserent_earn").value,
    EducationPay:document.getElementById("education_earn").value,
    CarAllowance:document.getElementById("car_earn").value,
    Other:document.getElementById("other_earn").value,
    Fuel:document.getElementById("fuel_earn").value,

    Providentfund:document.getElementById("provident_fund").value,
    FedaralWithholding:document.getElementById("fedaral_Withholding").value,
    FedaralMED:document.getElementById("Fedara_lMED").value,
    FedaralOSADI:document.getElementById("Fedaral_OSADI").value,
    Statewithholding:document.getElementById("state_withholding").value,
    Incometax:document.getElementById("income_tax").value,
    Professionaltax:document.getElementById("Professional_tax").value,
    Professionalloan:document.getElementById("Professional_loan").value,
    Advancesalary:document.getElementById("Advance_salary").value,
    Otherdeduction:document.getElementById("other_deduction").value,

    TotalDeduction:document.getElementById("total_deduction").value,
    NetSalary:document.getElementById("net_salary").value,


    Checknumber:document.getElementById("checknumber").value,
    Nameofbank1:document.getElementById("nameofbank").value,
    Checkdate:document.getElementById("checkdate").value,

    Nameofbank:document.getElementById("nameofBank").value,
    Accounttitle:document.getElementById("Accounttitle").value,
    Account:document.getElementById("Account").value,
    Transferdata:document.getElementById("Transfer").value
    
}

localStorage.setItem("playslipJSON",JSON.stringify(playslipJSON));
window.location.href="printplayslip.html";

}
