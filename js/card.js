'use strict'

class card extends HTMLElement{
    constructor(){
        super();
        this.build()
    }
    build(){
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.styles())
        shadow.appendChild(this.createCard())
    }
    styles(){
        const style = document.createElement('style')
        style.textContent = `
            
            .card{
                width: 250px;
                height: 250px;
            
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                background-color: ${this.bgcolor};
                
            }
            .card-text{
                width: 50%;
                padding: 4px;
                text-align: center;
                text-transform: uppercase;
                border-radius: 12px;
                box-shadow: 0 0 2px #000;
                background-color: ${this.text};
            }
            
            .card-image{
                width:70%;
                height: 250%;
            
                background-image: url(./img/4.png);
                border-radius: 50%;
                background-size: cover;
                box-shadow: inset 0 0 20px;
            }

            
                  
        `
        return style
        
    }
    createCard(){
        //  <div class="card">
        //     <div class="card-text">Nathalia R.</div>
        //     <div class="card-image"></div>
        //     <div class="card-text">DS2T</div>  
        // </div>
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
           <div class="card-text">Aluno</div>
           <div class="card-image"></div>
           <div class="card-text"></div>  
           
        `
        return card
    }
    bgcolor(){
       const color = this.getAttribute('data-bgcolor') ?? "#483D8B"

       return color
    }

    nomeAluno(){
        const aluno  = this.getAttribute('data-text') ?? "TESTE"

        return aluno
    }

    turma(){
        const turmas= this.getAttribute('data-turma') ?? "testando"

        return turmas
    }

    image(){
        const imagem = this.getAttribute()
        return imagem
    }
}

customElements.define('card-aluno', card)
