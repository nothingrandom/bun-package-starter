#!/usr/bin/env node
import meow from 'meow';
import { sum } from './index';
import '../src/cli';

const cli = meow(`
  Usage
    $ bun-package-starter <input>
`, {
  importMeta: import.meta,
  inferType: true,
});

const input = cli.input as unknown as number[];
if (input.length !== 2) {
  console.error('Please provide an input');
  cli.showHelp(2);
}
console.log(sum(input[0], input[1]));
