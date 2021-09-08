export class AlreadyExists extends Error {
  constructor(entity: string, id: string) {
    super(`${entity} <${id}> already exists`);
  }
}
