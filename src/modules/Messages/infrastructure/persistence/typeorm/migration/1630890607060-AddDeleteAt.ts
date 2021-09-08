import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDeleteAt1630890607060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `messages` ADD `deletedAt` datetime(6) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `messages` DROP COLUMN `deletedAt`");
    }

}
