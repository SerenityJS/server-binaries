import { execSync } from "node:child_process";

const arch = process.arch.toLowerCase();
const platform = process.platform.toLowerCase();

execSync(`bun build --compile --target=node --minify --outfile=dist/serenityjs-${platform}-${arch} src/index.ts`)