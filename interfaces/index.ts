export type User = {
  id: number
  name: string
}

export enum PraiseCategoryEnum {
  HIASD = "Hinário IASD",
  NOVO_HIASD = "Novo Hinário IASD",
  MINISTERIO_JOVEM = "Ministério Jovem",
  ADORADORES = "Adoradores",
}

export enum PraiseCDEnum {
  CD_JOVEM_1992 = "CD Jovem 1992 - Nosso Sol é Jesus",
  CD_JOVEM_2005 = "CD Jovem 2005 - Fiel a Toda Prova",
}

export interface Praise {
  id: number
  title: string
  category: PraiseCategoryEnum
  cd: PraiseCDEnum;
  externalURL: string
  imagePath: string
}