let question = document.getElementsByClassName('questions')
// let questionAnswers = document.getElementById('question-answer')

// console.log(question[0].children[1].classList)



// question[0].addEventListener('click', ()=>{
//     question[0].children[1].classList.toggle('active')
// })


for(let i = 0; i<question.length; i++) {
    question[i].addEventListener('click', ()=>{
       question[i].children[1].classList.toggle('active')
    })
}


