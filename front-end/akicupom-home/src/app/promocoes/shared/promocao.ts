import { Categoria } from '../../menu-categoria/shared/Categoria';
export class Promocao {
  id: number;
  nome: string;
  descricao: string;
  valor_promocao: number;
  dataValidade: string;
  capa: string;
  categoria: Categoria = new Categoria;
  fornecedor: number;
  status: boolean;
  
  // categoria: number;
  // fornecedor: number;
}
