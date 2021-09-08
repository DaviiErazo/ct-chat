import {MigrationInterface, QueryRunner} from "typeorm";

export class FK1630525988626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `messages` ADD CONSTRAINT `FK_035a0825545d08b34ad2b766d3a` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `messages` DROP FOREIGN KEY `FK_035a0825545d08b34ad2b766d3a`");
    }

}
