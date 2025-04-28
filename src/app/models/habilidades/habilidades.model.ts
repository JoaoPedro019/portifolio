export interface Habilidades {
  name: string;
  logo: string;
}

export interface CategoriaHabilidades {
  categoria: string;
  habilidades: Habilidades[];
}
