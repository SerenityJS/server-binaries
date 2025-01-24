import { isMainThread } from "node:worker_threads";

import { Serenity, LevelDBProvider, SuperflatWorker, TerrainWorker } from "@serenityjs/core";
import { Pipeline } from "@serenityjs/plugins";

import { Modules } from "./modules"

// Inject all modules
Bun.plugin({
  name: "SerenityJS Native Module Injection",
  setup(build) {
    // Inject all modules
    for (const inject of Modules) inject(build);
  },
});

// Redefine the path of the workers
SuperflatWorker.path = process.argv[1]
TerrainWorker.path = process.argv[1]

// Check if the current thread is the main thread
if (isMainThread) {
  // Create a new Serenity instance
  const serenity = new Serenity({
    path: "./properties.json",
    serenity: {
      permissions: "./permissions.json",
      resourcePacks: "./resource_packs"
    }
  });

  // Create a new plugin pipeline
  new Pipeline(serenity, { path: "./plugins" });

  // Register the LevelDBProvider
  serenity.registerProvider(LevelDBProvider, { path: "./worlds" });

  // Start the server
  serenity.start();
}
