"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cursos = [
    { id: 1, nome: "JavaScript" },
    { id: 2, nome: "TypeScript" },
    { id: 3, nome: "Programação" },
];
var alunos = [
    { nome: "Letícia", cursoId: 1, notas: [7, 5, 6], mensagem: "" },
    { nome: "Juliana", cursoId: 2, notas: [9, 5, 10], mensagem: "" },
    { nome: "Thais", cursoId: 3, notas: [5, 4, 4], mensagem: "" },
];
function mediaEstudante(notas) {
    return (notas[0] + notas[1] + notas[2]) / 3;
}
var estiloAprendizado = function (aluno) {
    var media = mediaEstudante(aluno.notas);
    if (media >= 7) {
        return "Exploradora Confiante";
    }
    else if (media >= 5) {
        return "Brilha como Aprendiz";
    }
    else {
        return "Desbravando a Programação";
    }
};
var estiloAprendizadoArrow = function (aluno) {
    var media = mediaEstudante(aluno.notas);
    if (media >= 7) {
        return "Exploradora Confiante";
    }
    else if (media >= 5) {
        return "Brilha como Aprendiz";
    }
    else {
        return "Desbravando a Programação";
    }
};
function nomeCurso(cursoId) {
    switch (cursoId) {
        case 1:
            return "JavaScript";
        case 2:
            return "TypeScript";
        case 3:
            return "Programação";
        default:
            return "Curso Desconhecido";
    }
}
;
for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
    var aluno = alunos_1[_i];
    var media = mediaEstudante(aluno.notas);
    var curso = nomeCurso(aluno.cursoId);
    aluno.mensagem = estiloAprendizado(aluno);
    console.log("Nome", aluno.nome);
    console.log("Curso:", curso);
    console.log("Média:", media.toFixed(2));
    console.log("Mensagem:", aluno.mensagem);
    console.log("----------------------------");
}
;
