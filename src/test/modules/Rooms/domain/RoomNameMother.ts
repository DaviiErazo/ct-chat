import { WordMother } from "../../Shared/domain/WordMother";

export class RoomNameMother {
    static create(value: string): string {
        return value;
    }

    static random(): string {
        return this.create(WordMother.random());
    }
}