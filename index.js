<script>
    var numero = document.getElementById('resultado').innerHTML;
    function insert(num){
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
        }

    function limpar(){
        document.getElementById('resultado').innerHTML = " ";
    }
    function bs(){
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length-1);
    }
   
    function calcular(){
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML= eval(resultado);
    }
</script>
