let income=0;
let expense=0;
let balance;
function addStorage()
{
    var text=document.getElementById("text").value;
    var amount=document.getElementById("amount").value
    localStorage.setItem(text,amount);
    //console.log(JSON.parse(localStorage.getItem(text,amount)));
    var display = document.createElement('div');
    display.setAttribute("id","list1");
    console.log(display);
    document.getElementById('list').appendChild(display).innerHTML=text+"........."+amount;
   if((Math.sign(amount))==1)
     {
        income=Number(income)+Number(amount);
        document.getElementById('money-plus').textContent="+$"+income;
    }
    else
     {
            expense=Number(expense)+Number(amount);
            document.getElementById('money-minus').textContent="$"+expense;
     }
     
     balance=Number(income)+Number(expense);
     document.getElementById('balance').textContent="$"+balance;
}
