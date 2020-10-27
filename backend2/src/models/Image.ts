import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';


@Entity('images') //Atribui essa classe a tabela orphanages
export default class Image {
  //Para tirar o erro tem de habilitar  a propriedade do tsconfig: strictPropertyInitialization e deixar como false
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;
  
    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanage;

} 
