import { execSync } from "node:child_process";
import { readFileSync } from "node:fs"

const packages = [
  "@serenityjs/core",
  "@serenityjs/data",
  "@serenityjs/emitter",
  "@serenityjs/logger",
  "@serenityjs/nbt",
  "@serenityjs/plugins",
  "@serenityjs/protocol",
  "@serenityjs/raknet"
].map(pkg => `${pkg}@beta`);

execSync(`bun add ${packages.join(" ")}`)

const { dependencies } = JSON.parse(readFileSync("package.json").toString());

const version = dependencies["@serenityjs/core"].replace("^", "");
const arch = process.arch.toLowerCase();
const platform = process.platform.toLowerCase();

execSync(`bun build --compile --packages bundle --target=bun --outfile=dist/serenityjs-v${version}-${platform}-${arch} src/index.ts`);
