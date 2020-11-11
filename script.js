var income=0;
var expense=0;
var balance;
function addTransaction()
{
    var text=document.getElementById("text").value;
    var amount=document.getElementById("amount").value
    localStorage.setItem(text,amount);
    console.log(JSON.parse(localStorage.getItem(text,amount)));
    var transaction = document.createElement('div');
    transaction.setAttribute("id","list1");
    console.log( transaction );
    document.getElementById('list').appendChild(transaction).innerHTML=text+""+amount;
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
