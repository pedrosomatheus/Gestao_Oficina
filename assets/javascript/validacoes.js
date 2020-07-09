// $(function(){
//     //pegando a variavel login, e submetendo o formulario por ela
//     $('#login').submit(function(){
//         var obj = this;
//         var form = $(obj);
//         var dados = new FormData(obj);
//         $.ajax({
//             url: form.attr('action'),
//             type: form.attr('method'),
//             data: dados,
//             processData: false,
//             cache: false,
//             contentType: false,
//             success: function(data){
//                 if(data == "ErroEmail"){
//                     var titulo = document.getElementById("usuario");
//                     titulo.className = "form-control col-8 is-invalid";
//                     var exibirErro = document.getElementById("userErro");
//                     exibirErro.className = "invalid-feedback d-block col-8";
//                     titulo.focus();
//                     //armazenando o valor do id na variavel titulo
//                 }
//                 else{
//                     var titulo = document.getElementById("usuario");
//                     titulo.className = "form-control col-8";
//                     var exibirErro = document.getElementById("userErro");
//                     exibirErro.className = "invalid-feedback d-none col-8";
//                     //voltando ele como ele era antigamente, se passar do if
//                 }
//                 if(data == "ErroSenha"){
//                     var titulo = document.getElementById("senha");
//                     titulo.className = "form-control col-8 is-invalid";
//                     var exibirErro = document.getElementById("passErro");
//                     exibirErro.className = "invalid-feedback d-block col-8";
//                     titulo.focus();
//                 }
//                 else{
//                     var titulo = document.getElementById("senha");
//                     titulo.className = "form-control col-8";
//                     var exibirErro = document.getElementById("passErro");
//                     exibirErro.className = "invalid-feedback d-none col-8";                    
//                 }
//                 if(data == "FalhaLogin"){
//                     //se o usuario digitar email, e senha errados
//                     var titulo = document.getElementById("loginErro");
//                     titulo.className = "alert alert-danger d-block col-5 mx-auto text-center";
//                 }
//                 else{
//                     var titulo = document.getElementById("loginErro");
//                     titulo.className = "invalid-feedback d-none col-5";
//                 }
//                 if(data == "SucessoCliente"){
//                     //se der certo, ele entra no sucesso, vai para a
//                     window.location.replace("view/home/");
//                 }
//                 if(data == "SucessoAdministrador"){
//                     //se der certo, ele entra no sucesso, vai para a
//                     window.location.replace("view/administracao/");
//                 }                

//             },//sucess
//         });//ajax
//         return false;//faz o ajax recarregar
//     });//function de dentro
// });//funciotion de fora

$(function(){
    //pegando a variavel login, e submetendo o formulario por ela
    $('#login').submit(function(){
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function(data){
                if(data == "ErroLogin"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo login obrigatório'
                    })
                }

                if(data == "ErroSenha"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo senha obrigatório'
                    })
                }
                
                if(data == "Sucesso"){
                    Swal.fire({
                        title: 'Login efetuado com sucesso!',
                        text: 'Você realizou login!',
                        icon: 'success',
                        confirmButtonText: 'Prosseguir'
                    });
                }

            },//sucess
        });//ajax
        return false;//faz o ajax recarregar
    });//function de dentro
});//funciotion de fora

$(function(){
    //pegando a variavel login, e submetendo o formulario por ela
    $('#cadastro').submit(function(){
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function(data){
                if(data == "ErroNome"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo nome obrigatório'
                    })
                }

                if(data == "ErroEmail"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo e-mail obrigatório'
                    })
                }

                if(data == "ErroCPF"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo CPF obrigatório'
                    })
                }

                if(data == "ErroDigitoCPF"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo CPF deve conter 11 digitos'
                    })
                }

                if(data == "ErroUserName"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo nome de usuário obrigatório'
                    })
                }

                if(data == "ErroSenha"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo senha obrigatório'
                    })
                }

                if(data == "ErroSenhaVazia"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo confirmar senha obrigatório'
                    })
                }

                if(data == "ErroConfirmSenha"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Senhas não conferem'
                    })
                }

                if(data == "EmailExiste"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Este e-mail já existe!'
                    })
                }

                if(data == "CpfExiste"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Este CPF já existe!'
                    })
                }

                if(data == "userNameExiste"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Este nome de usuário já existe!'
                    })
                }
                
                if(data == "Sucesso"){
                    Swal.fire({
                        title: 'Cadastro realizado com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if(result.value){
                            window.location.replace("telaLogin");
                        }
                    })
                }

            },//sucess
        });//ajax
        return false;//faz o ajax recarregar
    });//function de dentro
});//function de fora

$(function(){
    //pegando a variavel login, e submetendo o formulario por ela
    $('#login').submit(function(){
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function(data){
                
                if(data == "ErroLoginVazio"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Informe login!'
                    })
                }

                if(data == "ErroSenhaVazia"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Informe senha!'
                    })
                }
                
                if(data == "SucessoAdm"){
                    Swal.fire({
                        title: 'Login realizado com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if(result.value){
                            window.location.replace("telaAdm");
                        }
                    })
                }

                if(data == "SucessoCliente"){
                    Swal.fire({
                        title: 'Login realizado com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if(result.value){
                            window.location.replace("telaCliente");
                        }
                    })
                }

                if(data == "ErroLogin"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Login inválido!'
                    })
                }

                if(data == "ErroSenha"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Senha inválida!'
                    })
                }

            },//sucess
        });//ajax
        return false;//faz o ajax recarregar
    });//function de dentro
});//function de fora

$(function(){
    //pegando a variavel login, e submetendo o formulario por ela
    $('#cadFunc').submit(function(){
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function(data){
                if(data == "ErroNome"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo nome obrigatório'
                    })
                }

                if(data == "ErroEmail"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo e-mail obrigatório'
                    })
                }

                if(data == "ErroCPF"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo CPF obrigatório'
                    })
                }

                if(data == "ErroDigitoCPF"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo CPF deve conter 11 digitos'
                    })
                }

                if(data == "ErroUserName"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo nome de usuário obrigatório!'
                    })
                }

                if(data == "ErroTipoUsuario"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo tipo de usuário obrigatório!'
                    })
                }

                if(data == "ErroSenha"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo senha obrigatório'
                    })
                }

                if(data == "ErroSenhaVazia"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Campo confirmar senha obrigatório'
                    })
                }

                if(data == "ErroConfirmSenha"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Senhas não conferem'
                    })
                }

                if(data == "EmailExiste"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Este e-mail já existe!'
                    })
                }

                if(data == "CpfExiste"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Este CPF já existe!'
                    })
                }

                if(data == "userNameExiste"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'error',
                        title: 'Este nome de usuário já existe!'
                    })
                }
                
                if(data == "Sucesso"){
                    Swal.fire({
                        title: 'Cadastro realizado com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if(result.value){
                            window.location.replace("telaLogin");
                        }
                    })
                }

            },//sucess
        });//ajax
        return false;//faz o ajax recarregar
    });//function de dentro
});//function de fora
