"use strict";

/**
 * @see https://github.com/yargs/yargs/blob/master/docs/advanced.md#providing-a-command-module
 */
exports.command = "import <dir>";

exports.describe = "Import a package into the monorepo with commit history";

exports.builder = yargs =>
  yargs
    .positional("dir", { describe: "The path to an external git repository that contains an npm package" })
    .options({
      flatten: {
        group: "Command Options:",
        describe: "Import each merge commit as a single change the merge introduced",
      },
      yes: {
        group: "Command Options:",
        describe: "Skip all confirmation prompts",
      },
    });

exports.handler = function handler(argv) {
  return require(".")(argv);
};
