import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
  updateProjectConfiguration,
  type Tree,
} from '@nx/devkit';
import * as path from 'node:path';
import type { NextCrudDataAccessGeneratorSchema } from './schema';
import { libraryGenerator as nxNextGeneratorsLibraryGenerator } from '@nx/next';

export async function nextCrudDataAccessGenerator(
  tree: Tree,
  options: NextCrudDataAccessGeneratorSchema
) {

  const scopeFileName = names(options.scope).fileName;
  const appFileName = names(options.app).fileName;
  const typeFileName = names(options.type).fileName;
  const nameFileName = names(options.name).fileName;

  const fileName = `${nameFileName}-${typeFileName}`;
  const projectName = `${scopeFileName}-${appFileName}-${fileName}`;
  const directory = `libs/${scopeFileName}/${appFileName}/${fileName}`;
  const tags = `scope:${scopeFileName},app:${appFileName},type:${typeFileName}`;
  const importPath = `@argon/${scopeFileName}-${fileName}`;



  const nxNextGeneratorsLibraryGeneratorCallback = await nxNextGeneratorsLibraryGenerator(tree, {
    directory,
    name: fileName,
    style: 'none',
    skipTsConfig: false,
    skipFormat: false,
    tags,
    routing: false,
    unitTestRunner: 'vitest',
    linter: 'none',
    component: false,
    publishable: false,
    buildable: false,
    importPath,
    js: false,
    globalCss: false,
    strict: true,
    setParserOptionsProject: true,
    skipPackageJson: true,
    addPlugin: false,
  });

  const project = readProjectConfiguration(tree, fileName);
  project.name = projectName;

  updateProjectConfiguration(tree, fileName, project);

  
  const libNames = {
    tmpl: '',
    ...names(options.name),
  };

  console.log('-- Available variables', libNames);

  generateFiles(tree, path.join(__dirname, 'files'), directory, libNames);
  await formatFiles(tree);

  return () => Promise.all([nxNextGeneratorsLibraryGeneratorCallback]);
}

export default nextCrudDataAccessGenerator;
