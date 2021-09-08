import {MigrationInterface, QueryRunner} from "typeorm";

export class TypeId1630122011451 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `rooms` MODIFY `id` VARCHAR(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
