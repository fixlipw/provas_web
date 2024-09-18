const express = require('express');
const router = express.Router();

const AlunoService = require('../services/AlunoService');

router.get('/listar', (request, response) => {
    response.json(AlunoService.listar());
})

router.post('/criar', (request, response) => {
    const novoAluno = AlunoService.criar(request.body)
    response.json(novoAluno)
})

router.get("/recuperar/:id", (request, response) => {
    const id = request.params.id;
    const aluno = AlunoService.recuperar(id)
    response.json(aluno);
})

router.put("/atualizar/:id", (request, response) => {
    const alunoAtualizado =
        AlunoService.atualizar(request.params.id, request.body);
    response.json(alunoAtualizado);
})

router.delete("/apagar/:id", (request, response) => {
    const res = AlunoService.apagar(request.params.id);
    response.json({"res": res});
})


//Rota criada para retorno do cálculo da média
router.get("/media", (request, response) => {
    const media = AlunoService.media();
    response.json(media);
})

module.exports = router;