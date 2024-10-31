export type NextCrudDataAccessGeneratorSchemaType = 'data-access' | 'feature' | 'domain' | 'util' | 'ui';
export type NextCrudDataAccessGeneratorSchemaApp = 'argon' | 'shared';


export interface NextCrudDataAccessGeneratorSchema {
  scope: string;
  type: NextCrudDataAccessGeneratorSchemaType;
  app: NextCrudDataAccessGeneratorSchemaApp;
  name: string;
}
