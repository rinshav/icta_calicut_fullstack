function read(){
    var Roll=document.getElementById("getRoll").value;
    var age=document.getElementById("getage").value;
    var dist=op.options[op.selectedindex].value;
    console.log(dist);
    if(age>=18)
    {console.log}("Eligible");
    console.log(age);
    console.log(rollnumber);

    console.log("testing success")

}
function add(){
    var num=document.getElementById("num").value;
    var num1=document.getElementById("num2").value;
    var x=parseInt(num);
    var y=parseInt(num1);
    var op=document.getElementById("operation");
    var name=op.options[op.selectedIndex].value;
    if(name=="addition"){
        console.log(x+y);
    }else if(name=="division"){
        console.log(x-y);
    }else{
        console.log(x/y)
    }


}


function largest(){
    var num=document.getElementById("num").value;
    var num1=document.getElementById("num2").value;
    var num3=document.getElementById("num3").value;
    var x=parseInt(num);
    var y=parseInt(num1);
    var z=parseInt(num3);
    if(x>y){
        if(x>z){
            console.log(x);}
            else{console.log(z);
            }
        }
        else{
            if(y>z){
                console.log(y);
            }
        }
    }
    function smallest(){
        var num=document.getElementById("num").value;
    var num1=document.getElementById("num2").value;
    var num3=document.getElementById("num3").value;
    var x=parseInt(num);
    var y=parseInt(num1);
    var z=parseInt(num3);
    if(x<y){
        if(x<z){
            console.log(x);
        var p=x}
        
    
        }
        else{
            if(y<z){
                console.log(y);
                var p=y;
                
            }
            else {console.log(z);
            var p=z;}
        }
        document.getElementById("result").innerHTML="table class='table'><tr><td> result is"+p+"</table></tr></td>";
    }
  

