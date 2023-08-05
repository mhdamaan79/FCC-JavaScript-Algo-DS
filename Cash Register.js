function checkCashRegister(price, cash, cid) {
    const UNIT_AMOUNT = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1.0,
    "FIVE": 5.0,
    "TEN": 10.0,
    "TWENTY": 20.0,
    "ONE HUNDRED": 100.0,
  };

  let totalCid = 0;

  for( let elem of cid ) {
    totalCid += elem[1]
    // console.log(totalCid)
  }

  // rounded to 2 decimal places
  totalCid = totalCid.toFixed(2)
  // console.log(totalCid)

  let changeToGive = cash - price;

  let changeArray = [];

  // conditions
  if( changeToGive > totalCid ) {
     return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if( changeToGive.toFixed(2) === totalCid ) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();

    for( let elem of cid ) {
      elem[1] = elem[1].toFixed(2);
      // console.log(elem)

      // creating holder 
      let holder = [elem[0], 0]  // her, holder[1] is money

      while( changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0 ) {
        changeToGive -= UNIT_AMOUNT[elem[0]];
        changeToGive = changeToGive.toFixed(2);
        elem[1] -= UNIT_AMOUNT[elem[0]];
        holder[1] += UNIT_AMOUNT[elem[0]];
        // console.log(holder[1])
      }

      if( holder[1] > 0 ) {
        changeArray.push(holder)
      }
    }
  }

  if( changeToGive > 0 ) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
