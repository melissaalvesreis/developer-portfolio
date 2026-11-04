import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  featured?: boolean;
  image: string;
  link?: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly currentYear = new Date().getFullYear();
  menuOpen = false;

  readonly skills = [
    { name: 'Angular', level: 'Avançado', group: 'Front-end' },
    { name: 'TypeScript', level: 'Avançado', group: 'Front-end' },
    { name: 'JavaScript', level: 'Avançado', group: 'Front-end' },
    { name: 'HTML5 & CSS3', level: 'Avançado', group: 'Front-end' },
    { name: 'PrimeNG', level: 'Experiência prática', group: 'Front-end' },
    { name: 'Node.js', level: 'Experiência prática', group: 'Back-end' },
    { name: 'NestJS', level: 'Experiência prática', group: 'Back-end' },
    { name: 'APIs REST', level: 'Experiência prática', group: 'Back-end' },
    { name: 'Jest', level: 'Experiência prática', group: 'Qualidade' },
    { name: 'JWT & SSO', level: 'Experiência prática', group: 'Segurança' },
    { name: 'Git & GitHub', level: 'Experiência prática', group: 'Ferramentas' },
    { name: 'SQL', level: 'Conhecimento', group: 'Dados' }
  ];

  readonly projects: Project[] = [
    { number: '01', title: 'Magda Féo Cerimoniais', category: 'Sistema web', description: 'Plataforma de gestão de eventos, convidados, RSVP, equipe, fornecedores e organização do cerimonial.', technologies: ['Sistemas web', 'Gestão', 'RSVP'], status: 'Projeto selecionado', featured: true, image: 'projects/magda.jpg' },
    { number: '02', title: 'Stêverso', category: 'Website e e-commerce', description: 'Plataforma digital para autora com apresentação de livros, universos, loja e área administrativa.', technologies: ['Website', 'E-commerce', 'Administração'], status: 'Projeto selecionado', image: 'projects/steverso.jpg' },
    { number: '03', title: 'UniVamp', category: 'PWA e experiência interativa', description: 'Experiência de seleção com 16 perguntas, resultados por família e suporte a uso offline.', technologies: ['PWA', 'Quiz', 'Offline'], status: 'Projeto selecionado', image: 'projects/univamp.jpg' },
    { number: '04', title: 'Dragon Clash', category: 'Jogo 3D interativo', description: 'Projeto de jogo com dragões e arena de combate. Explore a versão publicada.', technologies: ['Game Design', '3D', 'Web'], status: 'Versão demonstrativa', image: 'projects/dragon-clash.jpg', link: 'https://dragon-clash-beta.pages.dev/' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }
}
