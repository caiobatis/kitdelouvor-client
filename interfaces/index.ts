export type User = {
  id: number;
  name: string;
};

export enum PraiseCategoryEnum {
  HIASD = 'Hinário IASD',
  NOVO_HIASD = 'Novo Hinário IASD',
  MINISTERIO_JOVEM = 'Ministério Jovem',
  ADORADORES = 'Adoradores',
  PRISMA = "Prisma"
}

export enum PraiseCDEnum {
  EMPTY = '',
  CD_JOVEM_1992 = 'Nosso Sol é Jesus - 1992',
  CD_JOVEM_1999 = 'Rumo ao Porto Seguro - 1999',
  CD_JOVEM_2002 = 'Você me Pertence - 2002',
  CD_JOVEM_2005 = 'Fiel a Toda Prova - 2005',
  CD_JOVEM_2006 = 'Sou de Jesus - 2006',
  CD_JOVEM_2009 = 'Brilha em Mim - 2009',
  ADORADORES_1 = 'Adoradores 1',
  ADORADORES_2 = 'Adoradores 2',
  ADORADORES_3 = 'Adoradores 3',
  ADORADORES_4 = 'Adoradores 4',
}

export enum PraiseTypeEnum {
  CIFRA = 'Cifra',
  PARTITURA = 'Partitura',
  PLAYBACK = 'Playback',
}

export interface Praise {
  id: number;
  title: string;
  category: PraiseCategoryEnum;
  cd?: PraiseCDEnum;
  externalURL?: string;
  imagePath?: string;
  type?: PraiseTypeEnum;
  year?: number;
  author: string;
}
