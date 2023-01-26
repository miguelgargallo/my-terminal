import * as bins from './bin';

export const commandExists = (command: string) => {
  const commands = ['clear', ...Object.keys(bins)];

  return commands.indexOf(command.split(' ')[0]) !== -1;
};
