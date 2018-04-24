class Login{

    validar()
    {
        //Mensagens de erro
        let errorMessages = "";


        //ler o nome do usuario
        let nome = document.getElementById("nome").value;

        //ler a senha do usuario
        let senha = document.getElementById("senha").value;

        //Validar o nome
        if(nome=="")
        {
            errorMessages +="Preencha o campo : Nome\n";
        }
        
        //validar senha
        if(senha=="")
        {
            errorMessages +="Informe uma senha\n";
        }

        if (errorMessages!="")
        {
            //document.getElementById("textoMe").innerText = errorMessages;
            //document.getElementById("error").classList.add("show");
                window.alert(errorMessages);
            }

    }
}

var login = new Login;

