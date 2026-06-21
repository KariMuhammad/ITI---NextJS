import mongoose from "mongoose";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { seedProducts } from "../src/seeders/products.js";

function loadEnvFile() {
  const envPath = resolve(process.cwd(), ".env");

  if (!existsSync(envPath)) {
    return;
  }

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

async function main() {
  loadEnvFile();

  const force = process.argv.includes("--force");
  const result = await seedProducts({ force });

  if (result.skipped) {
    console.log(
      `Seed skipped: ${result.total} products already in the database. Run "npm run seed -- --force" to reseed.`
    );
  } else {
    console.log(`Seeded ${result.inserted} products successfully.`);
  }
}

main()
  .catch((error) => {
    console.error("Seed failed:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
