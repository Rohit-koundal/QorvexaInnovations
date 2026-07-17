import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve("out");
const port = Number.parseInt(process.env.PORT ?? "3000", 10);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".avif": "image/avif",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

function resolveRequestPath(url = "/") {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const relativePath = normalize(pathname).replace(/^([/\\])+/, "");
  let filePath = resolve(join(root, relativePath));

  if (!filePath.startsWith(root)) return null;
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  } else if (!extname(filePath)) {
    filePath = join(filePath, "index.html");
  }

  return filePath;
}

if (!existsSync(root)) {
  throw new Error("The out directory does not exist. Run npm run build first.");
}

createServer((request, response) => {
  let filePath;
  try {
    filePath = resolveRequestPath(request.url);
  } catch {
    filePath = null;
  }

  let status = 200;
  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(root, "404.html");
    status = 404;
  }

  response.writeHead(status, {
    "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
    "Cache-Control": extname(filePath) === ".html" ? "no-cache" : "public, max-age=3600",
    "X-Content-Type-Options": "nosniff",
  });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Qorvexa Innovations site available at http://127.0.0.1:${port}`);
});
