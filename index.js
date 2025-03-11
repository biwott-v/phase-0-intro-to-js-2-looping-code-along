// Code your solutions in this file
function writeCards(names, event) {
  let messagearray=[]
  for (let name of names) {
    messagearray.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  return messagearray;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number -= 1;
  }
}
