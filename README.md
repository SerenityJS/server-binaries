# Prebuilt SerenityJS Binaries  

This repository contains prebuilt executable binaries that will run SerenityJS. We provide prebuilt x64 binaries for Windows, Linux, and macOS. GitHub Actions will automatically compile the binaries every 12 hours. Vist the latest [actions](https://github.com/SerenityJS/server-binaries/actions) for the latest release build.

## Compiling for Your Own Use  
If you want to compile the binaries yourself:  
1. Clone the repository.  
3. Install dependencies `bun install`
2. Run one of the following commands:  
   - For the latest release: `bun run build:latest`  
   - For the beta release: `bun run build:beta`  
