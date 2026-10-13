import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Export a browser-sized version of the existing logo; the original stays intact.
export async function renderBrandIcon(size: number) {
  const logo = await readFile(join(process.cwd(), "app", "icon.png"));
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      {/* ImageResponse renders an image directly, without Next's HTML image optimizer. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="棟鑫水電" src={`data:image/png;base64,${logo.toString("base64")}`} width={size} height={size} />
    </div>,
    { width: size, height: size },
  );
}
