const cashGiven = document.querySelector('#cash-given');
const billAmt = document.querySelector('#bill-amount');
const btn = document.querySelector('#calculate');
const cell = document.querySelectorAll('.no-of-notes');
const message = document.querySelector('#message');

const notes = [2000,500,100,20,10,5,1];

btn.addEventListener('click', ()=>{
  const given = cashGiven.value;
  const amt = billAmt.value;
  hideMessage();
  if(amt>0){
    if(given >= amt){
      let rtrn = given-amt;
      clickHandle(rtrn)
    } 
    else{
      showMessage("Would you mind joining us washing plates?")
    }
  } 
  else{
    showMessage("Invalid Bill Amount");
  }
});
function clickHandle(rtrn){
  notes.forEach((aNote,index)=>{
    let noOfNotes = Math.floor(rtrn/aNote);
    rtrn%=aNote;
    cell[index].innerText = noOfNotes; 
  })
}
function showMessage(mssg){
  message.innerText = mssg
  message.style.visibility = "visible";
}
function hideMessage(){
  message.style.visibility = "hidden";
}