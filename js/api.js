"use strict"

const url = 'https://testeleonid.herokuapp.com/alunos'

//pega as informações da api 
const readAluno = async (id = '') =>{
    const response = await fetch (`${url}/${id}`)
    return await response.json()
}