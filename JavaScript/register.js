class Registro{

    validar()
    {
        //Mensagens de erro
        let errorMessages = "";


        //ler o nome do usuario
        let nome = document.getElementById("nome").value;

        //ler o username
        let userName = document.getElementById("userName").value;

        //ler a senha do usuario
        let senha = document.getElementById("senha").value;

        //Validar o nome
        if(nome=="")
        {
            errorMessages +="Informe seu nome completo\n";
        }

        //Validar o username
        if(userName=="")
        {
            errorMessages +="Informe um nome de usuário\n";
        }
        
        //validar senha
        if(senha=="")
        {
            errorMessages +="Informe uma senha\n";
        }

        if (errorMessages!="")
        {
            
                window.alert(errorMessages);
            }

    }
}

var registro = new Registro;