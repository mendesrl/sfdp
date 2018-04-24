class Cadastro
{                                                            
    validar()
    {
        //--------------Leitura dos dados-----------------//
        ///////////////////////////////////////////////////

        //Mensagens de erro
        let errorMessages = "";

        //Leitura do Nome
        let nome = document.getElementById("nome").value;
        //Leitura do email
        let email = document.getElementById("email").value;
        //Leitura do campo sexo
        let sexo = document.querySelector("[name=sexo]:checked");
        //Leitura do curso
        let curso = document.querySelector("[name=curso]:checked");
        //Leitura do Estado
        let estados = document.getElementById("estados").value;
        //Leitura de arquivo foto
        let foto = document.getElementById("foto").files[0];

        //Validacao do Nome
        if(nome==""){
            errorMessages +="Preencha o campo : Nome\n";}
        //Validacao do email
        if(email==""||email.indexOf("@")==-1||email.indexOf(".")==-1)
        {
            errorMessages +="Por favor, indique um e-mail válido.\n";}
        //Validacao dos sexo
        if(sexo==null){
            errorMessages +="Por favor, informe seu sexo\n";}
        //Validacao dos cursos
        if(curso==null){
            errorMessages +="Por favor, informe pelo menos um curso\n";
        }
        //Validacao dos Estados
        if(estados==""){
            errorMessages +="Por favor, informe um estado\n";}
        //Validacao da foto
        if(foto==undefined){
            errorMessages +="Selecione uma foto\n";}
        else if (foto.type!="image/jpeg" && foto.type!="image/png"){
            errorMessages +="Foto no formato invalido\n";}
        else if (foto.size>1048576){
            errorMessages +="A foto deve ter no máximo 1mb\n";}
        if (errorMessages!="")
        {
            document.getElementById("textoMe").innerText = errorMessages;
            document.getElementById("error").classList.add("show");
                //window.alert(errorMessages);
            }
            



    }
}

var cadastro = new Cadastro();