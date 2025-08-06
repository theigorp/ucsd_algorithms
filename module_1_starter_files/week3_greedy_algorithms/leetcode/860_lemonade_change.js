/*
  *EASY

  LOGIC:
  Create availableChange object with all bill types. For each bill received, push it to availableChange and check if you have enough combinations to return change. Return false if not.

  OPTIMIZATION:
  The runtime is O(n).
*/
function lemonadeChange(bills) {
    const availableDenominations = {
        FIVE_BILL: 0,
        TEN_BILL: 0,
        TWENTY_BILL: 0,
    };
    //* O(n)
    for (const bill of bills) {
        if (bill === 5) {
            availableDenominations.FIVE_BILL += 1;
        } else if (bill === 10) {
            availableDenominations.TEN_BILL += 1;
            if (availableDenominations.FIVE_BILL > 0) {
                availableDenominations.FIVE_BILL -= 1;
            } else {
                return false;
            }
        } else {
            if (availableDenominations.FIVE_BILL > 0 && availableDenominations.TEN_BILL > 0) {
                availableDenominations.FIVE_BILL -= 1;
                availableDenominations.TEN_BILL -= 1;
            } else if (availableDenominations.FIVE_BILL >= 3) {
                availableDenominations.FIVE_BILL -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};