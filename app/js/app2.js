const questions = document.querySelectorAll('.question-container');
const arrows = document.querySelectorAll('.arrow');
const articles = document.querySelectorAll('.q-a-container');

articles.forEach(function(article) {
   const btn = article.querySelector('.question-container');
   
      btn.addEventListener('click', function (e) {
         const element = e.currentTarget.nextElementSibling;

         questions.forEach(function (question) {
            if (btn !== question ) {
               question.nextElementSibling.classList.remove('answer-opened');
               question.children[0].classList.remove('opened');
               question.children[1].classList.remove('arrow-up');

            }
         })
         element.classList.toggle('answer-opened');
         e.currentTarget.children[0].classList.toggle('opened');
         e.currentTarget.children[1].classList.toggle('arrow__up');



      });
        
        
  

});