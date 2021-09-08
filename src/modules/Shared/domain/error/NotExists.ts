export class NotExists extends Error {
    constructor(entity: string, id: string) {
      super(`${entity} <${id}> not exists`);
    }
  }
  