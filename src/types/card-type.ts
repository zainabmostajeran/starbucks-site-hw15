export interface ICardDto {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  onLower: (_: number) => void;
  onAdd: (_: number) => void;
}
