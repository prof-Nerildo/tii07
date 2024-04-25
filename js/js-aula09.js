/* Jquery + AJAX + JS + JSON */
 // $('#btnEnviar').click(function(){});
$('#btnEnviar').click((e) => {
    e.preventDefault();
    //Criar objeto com os dados do Formulário
    let dataForm = {
        setName: $('#nome').val(),
        setEmail: $('#email').val(),
        setPhone: $('#telefone').val(),
        setWhats: $('#whatsapp').val()
    }
    // Validar os campos do Formulário
    if(dataForm.setName.length < 2){
        $('.msg-error').text("Nome invalido!").show();
        return false;
    }else if(dataForm.setEmail.length < 7){
        $('.msg-error').text("Email invalido!").show();
        return false;
    }else if(dataForm.setPhone.length < 11){
        $('.msg-error').text("Telefone invalido!").show();
        return false;
    }else if(dataForm.setWhats.length < 11){
        $('.msg-error').text("WhatsApp invalido!").show();
        return false;
    }
    $('.msg-error').hide();
    // Construção do AJAX
    let urlAction = "envia.html";
    $.ajax({
        url: urlAction,
        type: 'POST',
        data: dataForm,
        dataType: 'json',
        async: true
    })
    console.log(dataForm)
});