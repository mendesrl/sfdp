function openMenu()
{
    /*window.alert("Exibir Menu?")*/
    document.getElementById("menu").classList.add("menuAberto")

}

function closeMenu()
{
   /* window.alert("Clicou no fechar")*/
    document.getElementById("menu").classList.remove("menuAberto")
}

function closeMessages()
{
   /* window.alert("Clicou no fechar")*/
   document.getElementById("error").classList.remove("show");
   
}