import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { nextCrudDataAccessGenerator } from './generator';
import { NextCrudDataAccessGeneratorSchema } from './schema';

describe('next-crud-data-access generator', () => {
  let tree: Tree;
  const options: NextCrudDataAccessGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await nextCrudDataAccessGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
