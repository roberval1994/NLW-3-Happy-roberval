import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import Image from './Image'

@Entity('orphanages') //Atribui essa classe a tabela orphanages
export default class Orphanage {
  //Para tirar o erro tem de habilitar  a propriedade do tsconfig: strictPropertyInitialization e deixar como false
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  abbout: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  
  @OneToMany(() => Image, image =>image.orphanage, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'orphanage_id'})
  images: Image[]

} 
