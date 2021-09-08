import { IDMother } from "../../Shared/domain/IDMother";

export class MessageIdMother {
    static create(value: string): string {
        return value;
    }

    static random(): string {
        return this.create(IDMother.random());
    }
}