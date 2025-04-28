import { Projetos } from '../../models/projetos/projetos.model';

export const MOCK_PROJETOS: Projetos[] = [
  {
    titulo: 'Sistema de Login com JWT',
    descricao: 'Sistema de autenticação completo com Spring Security e JWT.',
    icon: 'pi pi-lock',
    imageUrl: 'assets/images/front.png',
    color: '#007ad9',
    tecnologias: ['Java', 'Spring Boot', 'JWT', 'Angular', 'H2'],
  },
  {
    titulo: 'Weather App',
    descricao: 'Aplicação de previsão do tempo integrada com API externa.',
    icon: 'pi pi-cloud',
    imageUrl: 'assets/images/front.png',
    color: '#007ad9',
    tecnologias: ['TypeScript', 'Angular', 'RxJS', 'OpenWeatherMap'],
  },
  {
    titulo: 'Landing Page TechSphere',
    descricao: 'Site institucional de apresentação de serviços digitais.',
    icon: 'pi pi-globe',
    imageUrl: 'assets/images/front.png',
    color: '#007ad9',
    tecnologias: ['TypeScript', 'Angular'],
  },
];
