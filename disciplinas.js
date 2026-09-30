const DISCIPLINAS = [
 {
  "id": "MatDisc",
  "sigla": "SI220",
  "nome": "Matemática Discreta",
  "semestre": 1,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "Prog1",
  "sigla": "SI100",
  "nome": "Algoritmos e Programação de Computadores I",
  "semestre": 1,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "LabFerrProg",
  "sigla": "SI103",
  "nome": "Lab. de Ferramentas de Programação",
  "semestre": 1,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "Arquit",
  "sigla": "TT106",
  "nome": "Organização e Arquitetura de Computadores",
  "semestre": 1,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "AtividAlgorit",
  "sigla": "SI104",
  "nome": "Atividades Práticas em Algoritmos",
  "semestre": 1,
  "creditos": 2,
  "carga": 30,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "Estatis",
  "sigla": "ST211",
  "nome": "Estatística",
  "semestre": 2,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "Analise1",
  "sigla": "SI305",
  "nome": "Análise de Sistemas de Informação I",
  "semestre": 2,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "Prog1"
  ]
 },
 {
  "id": "EngSoft1",
  "sigla": "SI206",
  "nome": "Engenharia de Software I",
  "semestre": 2,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "Prog1"
  ]
 },
 {
  "id": "CienTecSoci",
  "sigla": "SI205",
  "nome": "Ciência, Tecnologia e Sociedade",
  "semestre": 2,
  "creditos": 2,
  "carga": 30,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "Prog2",
  "sigla": "SI204",
  "nome": "Algoritmos e Programação de Computadores II",
  "semestre": 2,
  "creditos": 2,
  "carga": 30,
  "professores": [],
  "prereqs": [
   "Prog1"
  ]
 },
 {
  "id": "MatCienDad",
  "sigla": "SI306",
  "nome": "Matemática para Ciência de Dados",
  "semestre": 3,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "POO1",
  "sigla": "SI300",
  "nome": "Programação Orientada a Objetos I",
  "semestre": 3,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "Prog1"
  ]
 },
 {
  "id": "EngSoft2",
  "sigla": "SI304",
  "nome": "Engenharia de Software II",
  "semestre": 3,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "EngSoft1"
  ]
 },
 {
  "id": "BD1",
  "sigla": "ST567",
  "nome": "Banco de Dados I",
  "semestre": 3,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "Prog1"
  ]
 },
 {
  "id": "IntroIHC",
  "sigla": "SI404",
  "nome": "Introdução a Interfaces Humano-Computador",
  "semestre": 3,
  "creditos": 2,
  "carga": 30,
  "professores": [],
  "prereqs": [
   "EngSoft1"
  ]
 },
 {
  "id": "ED1",
  "sigla": "SI201",
  "nome": "Estrutura de Dados I",
  "semestre": 4,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "Prog1"
  ]
 },
 {
  "id": "POO2",
  "sigla": "SI400",
  "nome": "Programação Orientada a Objetos II",
  "semestre": 4,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "POO1"
  ]
 },
 {
  "id": "SO",
  "sigla": "TT304",
  "nome": "Sistemas Operacionais",
  "semestre": 4,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "Arquit"
  ]
 },
 {
  "id": "BD2",
  "sigla": "ST767",
  "nome": "Banco de Dados II",
  "semestre": 4,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "BD1"
  ]
 },
 {
  "id": "AtivIHC",
  "sigla": "SI406",
  "nome": "Atividades Práticas em Interação Humano-Computador",
  "semestre": 4,
  "creditos": 2,
  "carga": 30,
  "professores": [],
  "prereqs": [
   "IntroIHC"
  ]
 },
 {
  "id": "Web",
  "sigla": "SI401",
  "nome": "Programação para a Web",
  "semestre": 4,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "POO1"
  ]
 },
 {
  "id": "Redes",
  "sigla": "ST568",
  "nome": "Redes de Comunicação I",
  "semestre": 5,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "Arquit"
  ]
 },
 {
  "id": "Analise2",
  "sigla": "SI405",
  "nome": "Análise de Sistemas de Informação II",
  "semestre": 5,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "Analise1"
  ]
 },
 {
  "id": "GestProj",
  "sigla": "TT060",
  "nome": "Gestão de Projetos",
  "semestre": 5,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "EngSoft1"
  ]
 },
 {
  "id": "IA",
  "sigla": "SI702",
  "nome": "Inteligência Artificial",
  "semestre": 5,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "ED1",
   "MatCienDad",
   "Prog2"
  ]
 },
 {
  "id": "ED2",
  "sigla": "SI010",
  "nome": "Estrutura de Dados II",
  "semestre": 5,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "ED1"
  ]
 },
 {
  "id": "ProjInt",
  "sigla": "SI503",
  "nome": "Projeto Integrador",
  "semestre": 5,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "POO1",
   "BD2",
   "EngSoft2",
   "IntroIHC",
   "Analise1",
   "ED1"
  ]
 },
 {
  "id": "DispMov",
  "sigla": "SI700",
  "nome": "Programação para Dispositivos Móveis",
  "semestre": 6,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "POO2",
   "ED1"
  ]
 },
 {
  "id": "AprendMaqui",
  "sigla": "SI602",
  "nome": "Introdução ao Aprendizado de Máquina",
  "semestre": 6,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "MatCienDad",
   "Prog2"
  ]
 },
 {
  "id": "Empreend",
  "sigla": "SI800",
  "nome": "Empreendedorismo e Inovação",
  "semestre": 6,
  "creditos": 2,
  "carga": 30,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "ProParaDi",
  "sigla": "SI603",
  "nome": "Processamento Paralelo e Distribuído",
  "semestre": 6,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": [
   "ED1",
   "Redes",
   "SO",
   "Arquit"
  ]
 },
 {
  "id": "AtvCoEx",
  "sigla": "SI919",
  "nome": "Atividades Complementares de Extensão",
  "semestre": 6,
  "creditos": 4,
  "carga": 60,
  "professores": [],
  "prereqs": []
 },
 {
  "id": "AtvCo",
  "sigla": "SI920",
  "nome": "Atividades Complementares",
  "semestre": 6,
  "creditos": 12,
  "carga": 180,
  "professores": [],
  "prereqs": []
 }
];
