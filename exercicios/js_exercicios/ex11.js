var a,b,c,d,e,f,g,h,i,j,k,l;

function get() {
        a = document.getElementById("field1").value;
        b = document.getElementById("field3").value;
        c = document.getElementById("field5").value;
        d = document.getElementById("field7").value;
        e = document.getElementById("field9").value;
        f = document.getElementById("field11").value;
        g = document.getElementById("field13").value;
        h = document.getElementById("field15").value;
        i = document.getElementById("field17").value;
        j = document.getElementById("field19").value;
        k = document.getElementById("field24").value;
        l = document.getElementById("field26").value;

        var conta1 = a * 413;
        var conta2 = b *  (-413);
        var conta3 = c * 348;
        var conta4 = d *  (-348);
        var conta5 = e * 259;
        var conta6 = f *  (-259);
        var conta7 = g * 276;
        var conta8 = h *  (-276);
        var conta9 = i * 366;
        var conta10 = j *  (-366);
        var conta11 = k * 339;
        var conta12 = l *  (-339);

        total1 = conta1 + conta3 + conta5 + conta7 + conta9 + conta11;
        total2 = conta2 + conta4 + conta6 + conta8 + conta10 + conta12;

        totalEntalpia = total1 + total2;

        document.getElementById("field2").value = conta1;
        document.getElementById("field4").value = conta2;
        document.getElementById("field6").value = conta3;
        document.getElementById("field8").value = conta4;
        document.getElementById("field10").value = conta5;
        document.getElementById("field12").value = conta6;
        document.getElementById("field14").value = conta7;
        document.getElementById("field16").value = conta8;
        document.getElementById("field18").value = conta9;
        document.getElementById("field20").value = conta10;
        document.getElementById("field25").value = conta11;
        document.getElementById("field27").value = conta12;
        document.getElementById("field21").value = total1;
        document.getElementById("field22").value = total2;
        document.getElementById("field23").value = totalEntalpia;
}

function reacao(){

        if(a==0 && b==0 && c==0 && d==0 && e==2 && f==0 && g==0 && h==2 && i==2 && j==0 && k==0 && l==2 ||
                a==4 && b==4 && c==1 && d==1 && e==2 && f==0 && g==0 && h==2 && i==2 && j==0 && k==2 && l==4){
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