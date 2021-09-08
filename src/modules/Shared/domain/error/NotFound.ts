export class NotFound extends Error {
    constructor(entity: string, id: string) {
      super(`${entity} <${id}> not found`);
    }
  }
  