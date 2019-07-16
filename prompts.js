module.exports = [
    {
      type: 'list',
      name: 'import',
      message: 'How do you want to import iView?',
      choices: [
        { name: 'Fully import', value: 'full' },
        { name: 'Import on demand', value: 'partial' }
      ],
      default: 'full',
    },
    {
      when: answers => answers.import === 'full',
      type: 'confirm',
      name: 'customTheme',
      message: 'Do you wish to overwrite iView\'s Less variables?',
      default: false,
    },
  ];