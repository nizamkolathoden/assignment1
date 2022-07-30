const coin = (num)=>{
    let twenty;
    let ten;
    let five;
    let one;
    while (num>0) {
        twenty =parseInt(num/20)
        num=num-twenty*20;
        ten =parseInt(num/10)
        num=num-ten*10;
        five =parseInt(num/5)
        num=num-five*5;
        one=num;
        num-=one
    }

    console.log(` NO. of 20's: ${twenty}\n NO. of 10's: ${ten}\n NO. of 5's: ${five}\n NO. of 1's: ${one}`);
}

coin(59)