let question = document.getElementsByClassName('questions')

for(let i = 0; i<question.length; i++) {
    question[i].addEventListener('click', ()=>{
       question[i].children[1].classList.toggle('active') 
        if(question[i].children[1].classList[1] == 'active') {
            question[i].children[0].children[1].setAttribute('src', 'assets/images/icon-minus.svg')
        } else {
            question[i].children[0].children[1].setAttribute('src', 'assets/images/icon-plus.svg')
        }
    })
}


