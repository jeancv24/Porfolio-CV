function moveToSection(clickedButton){
    switch (clickedButton) {
        case 1:
            window.scroll({//mueve el scroll
                top: 0,
                behavior: 'smooth'
            });
        break;

        case 2:
            let knowledge = document.getElementById("knowledge");
            let knowledgePosition = knowledge.getBoundingClientRect();
            console.log(knowledgePosition.y);
            window.scroll({//mueve el scroll
                top: knowledgePosition.y,
                behavior: 'smooth'
            });
        break;

        case 3:
            let portfolio = document.getElementById("portfolio");
            let portfolioPosition = portfolio.getBoundingClientRect();
            console.log(portfolioPosition.y);
            window.scroll({//mueve el scroll
                top: portfolioPosition.y,
                behavior: 'smooth'
            });
        break;

        case 4:
            //let knowledge = document.getElementById("knowledge");
            //let knowledgePosition = knowledge.getBoundingClientRect();
            window.scroll({//mueve el scroll
                top: 0,
                behavior: 'smooth'
            });
        break;
    
        default:
            break;
    }
}