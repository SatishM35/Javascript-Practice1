//Recursive Function 5*4*3*2*1
function factorial_recursive(n)
{
    if(n==0 || n==1) return 1;
    else return n*factorial_recursive(n-1);
}
console.log("Recursive Factorial Function");
console.log(factorial_recursive(5));
console.log(" ----@----");

//Iterative Function
function factorial_iterative(n)
{
    let result = 1;
    for(i=1;i<=n;i++)
    {
        result*=i;
    }
    return result;
}  
console.log("Iterative Factorial Function");
console.log(factorial_iterative(6));
console.log(" ----@----");

//Memoization Function
/*let memo={0:1, 1:1};
function factorial_memoization()
{
    if(n in memo) return memo[n];
    memo[n]=n*factorial_memoization(n-1);
    return memo[n];
}
console.log("Recursive Factorial Function");
console.log(factorial_memoization(7));
console.log(" ----@----");
*/