let b=10
function myfunction()
{
    let a=document.getElementById('in1').value
    let b=a*(a-1)/2
    document.getElementById("out1").innerHTML =  `Sum of Numbeers is: ${b}`
}