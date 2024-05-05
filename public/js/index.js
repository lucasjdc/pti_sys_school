const form = document.querySelectorAll(".form")

function resetForm(){
    form.forEach( value =>{
        value.classList.remove("open")
    })
}

function openForm(data){
    resetForm()
    if(data == "aluno"){
        console.log(data);
        form[0].classList.add('open')
    }
    else if(data == "professor"){
        form[1].classList.add('open')
    }
    else if(data == "fornecedor"){
        form[2].classList.add('open')
    }

    console.log(form);
}