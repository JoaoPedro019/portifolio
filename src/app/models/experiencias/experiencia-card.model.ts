export interface ExperienciaModel {
  titulo: string;
  descricao: string;
  imagemUrlEmp: string;
  tecnologia: Tecnologia[];
}

export interface Tecnologia {
  nome: string;
  logo: string;
}
