import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDeleteAt1630533446256 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `rooms` ADD `deletedAt` datetime(6) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `rooms` DROP COLUMN `deletedAt`");
    }

}
