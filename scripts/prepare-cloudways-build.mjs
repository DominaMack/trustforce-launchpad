import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const prerenderDir = ".vercel/output/static";
const clientDir = "dist/client";
const outputDir = "dist/cloudways";
const bookingUrl = "https://links.thedominaagency.com/widget/booking/gSTyWDlqacwddKgnyzcg";

for (const directory of [prerenderDir, clientDir]) {
  if (!existsSync(directory)) {
    throw new Error(`Missing Cloudways build input: ${directory}`);
  }
}

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

cpSync(prerenderDir, outputDir, { recursive: true });
cpSync(clientDir, outputDir, { recursive: true });
cpSync("cloudways/.htaccess", join(outputDir, ".htaccess"));
cpSync("cloudways/index.php", join(outputDir, "index.php"));

const requiredFiles = [
  "index.html",
  "index.php",
  "privacy-policy/index.html",
  "terms-of-use/index.html",
  "accessibility/index.html",
  "disclaimer/index.html",
  "sitemap.xml",
];

for (const file of requiredFiles) {
  if (!existsSync(join(outputDir, file))) {
    throw new Error(`Missing required Cloudways file: ${file}`);
  }
}

for (const htmlFile of findHtmlFiles(outputDir)) {
  const html = readFileSync(htmlFile, "utf8");
  const assetPaths = html.matchAll(/(?:href|src)="(\/assets\/[^"]+)"/g);

  for (const match of assetPaths) {
    const assetPath = match[1].slice(1);
    if (!existsSync(join(outputDir, assetPath))) {
      throw new Error(`Missing asset ${match[1]} referenced by ${htmlFile}`);
    }
  }

  if (htmlFile === join(outputDir, "index.html")) {
    writeFileSync(htmlFile, updateBookingCtas(html));
  }
}

console.log(`Cloudways static site prepared in ${outputDir}`);

function updateBookingCtas(html) {
  const bookingHref = `href="${bookingUrl}" target="_blank" rel="noopener noreferrer"`;

  return html
    .replace(/href="#contact"(?= class="[^"]*bg-primary[^"]*">Schedule<\/a>)/, bookingHref)
    .replace(/href="#contact"(?= class="[^"]*bg-gold[^"]*">Schedule a Consultation)/, bookingHref)
    .replace(/href="#services"(?= class="[^"]*border-white\/40[^"]*">)/, bookingHref);
}

function findHtmlFiles(directory) {
  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...findHtmlFiles(path));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(path);
    }
  }

  return files;
}
