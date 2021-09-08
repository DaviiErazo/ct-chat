import { ParagraphMother } from "../../Shared/domain/ParagraphMother";

export class MessageContentMother {
    static create(value: string): string {
        return value;
    }

    static random(): string {
        return this.create(ParagraphMother.random());
    }
}