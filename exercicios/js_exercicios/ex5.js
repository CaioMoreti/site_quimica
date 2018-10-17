var a,b,c,d,e,f;

function get() {
        a = document.getElementById("field1").value;
        b = document.getElementById("field3").value;
        c = document.getElementById("field5").value;
        d = document.getElementById("field7").value;
        e = document.getElementById("field9").value;
        f = document.getElementById("field11").value;

        var conta1 = a * 941;
        var conta2 = b *  (-941);
        var conta3 = c * 391;
        var conta4 = d *  (-391);
        var conta5 = e * 436;
        var conta6 = f *  (-436);

        total1 = conta1 + conta3 + conta5;
        total2 = conta2 + conta4 + conta6;

        totalEntalpia = total1 + total2;

        document.getElementById("field2").value = conta1;
        document.getElementById("field4").value = conta2;
        document.getElementById("field6").value = conta3;
        document.getElementById("field8").value = conta4;
        document.getElementById("field10").value = conta5;
        document.getElementById("field12").value = conta6;
        document.getElementById("field21").value = total1;
        document.getElementById("field22").value = total2;
        document.getElementById("field23").value = totalEntalpia;
}

function reacao(){

        if(a==1 && b==0 && c==0 && d==6 && e==3 && f==0){
                botao1.classList.toggle("btn-danger", false); 
                document.getElementById("botao1").classList.add("btn-success"); 
                document.getElementById("botao1").innerHTML = "Correto";
                alert("PARABÉNS! \nVocê acertou!\nA janela será fechada");
                setTimeout('window.close()',5000);
        }else{
                botao1.classList.toggle("btn-succes", false);
                document.getElementById("botao1").classList.add("btn-danger");
                document.getElementById("botao1").innerHTML = "Errado";
                alert("Verifique o número e tente novamente!");
        }
}