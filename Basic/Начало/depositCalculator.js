function depositCalculator(input) {
    let deposit = Number(input[0]);
    let lenghtOfDeposit = Number(input[1]);
    let annualInterest = Number(input[2]);

    let EarnForOneYear = deposit * (annualInterest / 100)
    let EarnForOneMonth = EarnForOneYear / 12
    let EarnForDeposit = EarnForOneMonth * lenghtOfDeposit
    let EndValue = deposit + EarnForDeposit

    console.log(EndValue)
}

depositCalculator(
     ["200 ",
    "3 ",
    "5.7 "
    ]
)