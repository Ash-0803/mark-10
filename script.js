cashGiven = document.querySelector('#cash-given');
billAmt = document.querySelector('#bill-amount');
btn = document.querySelector('#calculate');
cell = document.querySelectorAll('.no-of-notes');

given = cashGiven.value;
amt = billAmt.value;
rtrn = given-amt;

notes = [2000,500,100,20,10,5,1];

function clickHandle(){
  notes.forEach((aNote,index)=>{
    let noOfNotes = Math.floor(rtrn/aNote);
    rtrn%=aNote;
    cell[index].innerText = noOfNotes; 
    console.log(aNote,index,noOfNotes);
  })
} 

btn.addEventListener('click', clickHandle);
