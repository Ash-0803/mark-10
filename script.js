const cashGiven = document.querySelector('#cash-given');
const billAmt = document.querySelector('#bill-amount');
const btn = document.querySelector('#calculate');
const cell = document.querySelectorAll('.no-of-notes');

const notes = [2000,500,100,20,10,5,1];

function clickHandle(){
  notes.forEach((aNote,index)=>{
    const given = cashGiven.value;
    const amt = billAmt.value;
    let rtrn = given-amt;
    let noOfNotes = Math.floor(rtrn/aNote);
    rtrn%=aNote;
    cell[index].innerText = noOfNotes; 
  })
}

btn.addEventListener('click', clickHandle);
