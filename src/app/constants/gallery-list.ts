import { CarouselItem } from '../components/carousel/carousel.component';
const IMIRIM_PROJECT_NAME = 'Casa de Imirim Cachoeirinha';
const PIMENTAS_PROJECT_NAME = 'Casa do Pimentas';

export interface GalleryItem {
  id: string;
  name: string;
  mainPhoto: string;
  generalDescription: string;
  photos: CarouselItem[];
}

export const GALLERY_LIST: GalleryItem[] = [
  {
    id: 'imirim',
    name: IMIRIM_PROJECT_NAME,
    mainPhoto: 'imirim-5.jpg',
    generalDescription:
      'Verificar medidas da construção pra regularização do imóvel junto a prefeitura, Receita Federal e cartório.',
    photos: [
      {
        image: 'imirim-5.jpg',
        description: IMIRIM_PROJECT_NAME,
      },
      {
        image: 'imirim-2.jpg',
        description: IMIRIM_PROJECT_NAME,
      },
      {
        image: 'imirim-3.jpg',
        description: IMIRIM_PROJECT_NAME,
      },
      {
        image: 'imirim-4.jpg',
        description: IMIRIM_PROJECT_NAME,
      },
      {
        image: 'imirim-1.jpg',
        description: IMIRIM_PROJECT_NAME,
      },
    ],
  },
  {
    id: 'pimentas',
    name: PIMENTAS_PROJECT_NAME,
    mainPhoto: 'pimentas-3.jpg',
    generalDescription:
      'Regularização de imóvel, verificar medidas do terreno e construção para regularizar o imóvel junto a prefeitura.',
    photos: [
      {
        image: 'pimentas-3.jpg',
        description: PIMENTAS_PROJECT_NAME,
      },
      {
        image: 'pimentas-1.jpg',
        description: PIMENTAS_PROJECT_NAME,
      },
      {
        image: 'pimentas-2.jpg',
        description: PIMENTAS_PROJECT_NAME,
      },
    ],
  },
];
