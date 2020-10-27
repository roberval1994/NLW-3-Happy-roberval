import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602719149738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "images",
                columns: [
                    { 
                        name: "id",
                        type: "integer",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                      },
                      {
                        name: "path",
                        type: "varchar",
                      },
                      {
                        name: "orphanage_id",
                        type: "integer",
                      },
                      
                ],
                foreignKeys: [{
                    name: "ImageOrphanage",
                    columnNames: ['orphanage_id'],
                    referencedTableName: "orphanages",
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE', //Ação feita após alteração do ID no outro BD
                    onDelete: 'CASCADE', //Cascade faz com que essa tabela acompanhe os efeitos na tabela original
                }],
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images");
    }

}
