export interface ExperienciaModel {
  titulo: string;
  descricao: string;
  tecnologia: Tecnologia[];
  data: string;
  empresa: string;
}

export interface Tecnologia {
  nome: string;
}
