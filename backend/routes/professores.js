const express = require('express');
const router = express.Router();

const ProfessorService = require("../services/ProfessorService");

router.get("/listar", (request, response) => {
    response.json(ProfessorService.listar())
})

router.post("/criar", (request, response) => {
    const novoProfessor = ProfessorService.criar(request.body)
    response.json(novoProfessor)
})

router.get("/recuperar/:id", (request, response) => {
    const id = request.params.id;
    const professor = ProfessorService.recuperar(id)
    response.json(professor)
})

router.put("/atualizar/:id", (request, response) => {
    const professorAtualizado =
        ProfessorService.atualizar(request.params.id, request.body);
    response.json(professorAtualizado);
})

router.delete("/apagar/:id", (request, response) => {
    const res = ProfessorService.apagar(request.params.id);
    response.json({"res": res})
})

module.exports = router;