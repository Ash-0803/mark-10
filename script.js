cashGiven = document.querySelector('#cash-given');
billAmt = document.querySelector('#bill-amount');
btn = document.querySelector('#calculate');
cell = document.querySelectorAll('.no-of-notes');

given = cashGiven.value;
amt = billAmt.value;
rtrn = amt-given;

notes = [2000,500,100,20,10,5,1];

function clickHandle(){
  notes.forEach((item,index)=>{
    noOfNotes = Math.trunc(rtrn/item)
    cell[index].innerText = noOfNotes;
    rtrn%=item;
  })
}

btn.addEventListener('click', clickHandle);
