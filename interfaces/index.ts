export type User = {
  id: number;
  name: string;
};

export enum PraiseCategoryEnum {
  HIASD = 'Hinário IASD',
  NOVO_HIASD = 'Novo Hinário IASD',
  MINISTERIO_JOVEM = 'Ministério Jovem',
  ADORADORES = 'Adoradores',
}

export enum PraiseCDEnum {
  EMPTY = '',
  CD_JOVEM_1992 = 'Nosso Sol é Jesus',
  CD_JOVEM_1999 = 'Rumo ao Porto Seguro',
  CD_JOVEM_2005 = 'Fiel a Toda Prova',
  CD_JOVEM_2006 = 'Sou de Jesus',
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
