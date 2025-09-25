export {};
interface curso {
    id: number;
    nome: string;
}

interface aluno {
    nome: string;
    cursoId: number;
    notas: number[];
    mensagem: string;
}

const cursos: curso[] = [
    { id: 1, nome: "JavaScript" },
    { id: 2, nome: "TypeScript" },
    { id: 3, nome: "Programação" },
];

const alunos: aluno[] = [
    { nome: "Letícia", cursoId: 1, notas: [7, 5, 6], mensagem: "" },
    { nome: "Juliana", cursoId: 2, notas: [9, 5, 10], mensagem: "" },
    { nome: "Thais", cursoId: 3, notas: [5, 4, 4], mensagem: "" },
];

function mediaEstudante(notas: number[]): number {
    return (notas[0] + notas[1] + notas[2]) / 3;
}

const estiloAprendizado = function(aluno: aluno): string {
    const media = mediaEstudante(aluno.notas);
    if (media >= 7) {
        return "Exploradora Confiante";
    } else if (media >= 5) {
        return "Brilha como Aprendiz";
    } else {
        return "Desbravando a Programação";
    }
};

const estiloAprendizadoArrow = (aluno: aluno): string => {
    const media = mediaEstudante(aluno.notas);
    if (media >= 7) {
        return "Exploradora Confiante";
    } else if (media >= 5) {
        return "Brilha como Aprendiz";
    } else {
        return "Desbravando a Programação";
    }
};

function nomeCurso(cursoId: number): string {
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
};

for (const aluno of alunos) {
    const media = mediaEstudante(aluno.notas);
    const curso = nomeCurso(aluno.cursoId);
    aluno.mensagem = estiloAprendizado(aluno);

console.log("Nome", aluno.nome);
console.log("Curso:", curso);
console.log("Média:", media.toFixed(2));
console.log("Mensagem:", aluno.mensagem);
console.log("----------------------------");
};