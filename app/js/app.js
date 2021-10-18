const questions = document.querySelectorAll('.question-container');
const arrows = document.querySelectorAll('.arrow');


questions.forEach(function(question){
    question.addEventListener('click', function (e) {
       const element = e.currentTarget.nextElementSibling;
       console.log(element);
        setTimeout(function () {
           element.classList.toggle('answer-opened'); 
        },100);

       


       console.log(e.currentTarget.children[1]);

         e.currentTarget.children[0].classList.toggle('opened');
         e.currentTarget.children[1].classList.toggle('arrow__up');
        
        
       
    });
})

