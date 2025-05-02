import { ExperienciaModel } from '../../models/experiencias/experiencia-card.model';
export const MOCK_EXPERIENCE: ExperienciaModel[] = [
  {
    titulo: 'Estagiário Desenvolvimento Fullstack',
    empresa: 'CIEE',
    descricao: `
<p><strong>Principais responsabilidades e entregas:</strong></p>
<ul>
  <li>Desenvolvimento de funcionalidades completas no frontend e backend, incluindo telas responsivas e APIs REST.</li>
  <li>Criação de endpoints integrados a APIs externas, como agendamento de reuniões no Microsoft Teams e criação de eventos no Google Agenda.</li>
  <li>Implementação de mecanismos de cache e autenticação utilizando Redis, com controle de tokens e validação de registros.</li>
  <li>Ajustes em Auth Guards para controle de acesso baseado em tokens, garantindo segurança na navegação da aplicação.</li>
  <li>Criação e execução de migrations, além da montagem de queries SQL otimizadas para o banco Oracle.</li>
  <li>Colaboração direta com outros desenvolvedores em atividades integradas, alternando responsabilidades entre frontend e backend.</li>
  <li>Validação e testes de APIs com o Postman, assegurando a qualidade das integrações.</li>
  <li>Interface com a equipe de design para implementação fiel dos protótipos criados no Figma.</li>
</ul>

<p><strong>Tecnologias:</strong></p>
`,
    data: '2024 - Até o momento',
    tecnologia: [
      {
        nome: 'Angular',
      },
      {
        nome: 'Angular Material',
      },
      {
        nome: 'TypeScript',
      },
      {
        nome: 'Java',
      },
      {
        nome: 'Spring Boot',
      },
      {
        nome: 'Postman',
      },
      {
        nome: 'SQL/Oracle',
      },
    ],
  },
  {
    titulo: 'Jovem Aprendiz RH',
    empresa: 'KAVAK',
    descricao: `
    <p><strong>Principais responsabilidades e entregas:</strong></p>
    <ul>
  <li>Atuei no suporte aos processos de admissão e benefícios, assegurando agilidade e precisão nas rotinas administrativas.</li>
  <li>Participei ativamente da implementação de um sistema de admissão online, contribuindo com sugestões de melhoria e acompanhando etapas do projeto.</li>
  <li>Realizei envio de contratos e abertura de chamados para correção de dados, garantindo conformidade e integridade das informações.</li>
  <li>Gerenciei cobranças documentais e controle de planilhas, otimizando a organização e facilitando a rastreabilidade dos processos.</li>
</ul>
<p><strong>Ferramentas:</strong></p>
`,
    data: '2021 - 2023',
    tecnologia: [
      {
        nome: 'Excel',
      },
      {
        nome: 'Word',
      },
      {
        nome: 'Power Point',
      },
    ],
  },
];
