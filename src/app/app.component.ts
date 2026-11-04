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
    {
      number: '01',
      title: 'Plataforma corporativa',
      category: 'Sistemas empresariais',
      description: 'Atuação em uma aplicação corporativa com gestão de usuários, permissões, autenticação e regras de negócio. Trabalho envolvendo melhorias de interface, integração com APIs e evolução de funcionalidades.',
      technologies: ['Angular', 'TypeScript', 'NestJS', 'PrimeNG', 'Jest'],
      status: 'Experiência profissional',
      featured: true
    },
    {
      number: '02',
      title: 'Autenticação e controle de acesso',
      category: 'Back-end · Segurança',
      description: 'Implementação e manutenção de fluxos de autenticação local e SSO, validação de sessão via JWT, controle de permissões e aplicação de regras de acesso conforme o estado da organização e do usuário.',
      technologies: ['NestJS', 'JWT', 'SSO', 'TypeScript', 'APIs REST'],
      status: 'Experiência profissional'
    },
    {
      number: '03',
      title: 'Dragon Clash',
      category: 'Game development',
      description: 'Conceito de jogo mobile 3D com dragões elementais, arena de combate, voo livre e evolução de habilidades. Projeto em fase inicial de desenvolvimento e experimentação.',
      technologies: ['Godot', 'GDScript', 'Game Design', '3D'],
      status: 'Em desenvolvimento'
    }
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
