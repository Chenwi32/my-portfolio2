/* function seeMore(){
const moreProjects = document.getElementById('see-moreBtn')
const portfolio = document.getElementById('portfolio-sc')
const morePortfolio = document.getElementById('more-portfolio')

moreProjects.addEventListener('click', () => {
    let value = morePortfolio.classList.contains('more-portfolio')
    if(value){
       morePortfolio.classList.remove('more-portfolio')
       moreProjects.innerText = 'See less'
    }
   
    else if(!(value)){
        morePortfolio.classList.add('more-portfolio')
        moreProjects.innerText = 'See more'
    }
} )
    
}    


seeMore() */


 function seeMore(){
const moreProjects = document.getElementById('see-moreBtn')
const portfolio = document.getElementById('portfolio-sc')
const morePortfolio = document.getElementById('more-portfolio')
const firstPortfolio = document.getElementById('portfolio-first')

portfolio.innerHTML = firstPortfolio.innerHTML;

moreProjects.addEventListener('click', () => {
    
    if(portfolio.innerHTML === firstPortfolio.innerHTML){
        
       portfolio.innerHTML = morePortfolio.innerHTML;
       moreProjects.innerText = '<-- See less';
    }
   
    else{
        portfolio.innerHTML = firstPortfolio.innerHTML;
        moreProjects.innerText = 'See more -->';
    }
} )
    
}    


seeMore()














