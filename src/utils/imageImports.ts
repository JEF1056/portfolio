// Dynamically import all about images using Vite's import.meta.glob
const aboutImagesModules = import.meta.glob(
  "../assets/about/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    as: "url",
  },
);

// Convert to array with metadata for easier use
export const aboutImagesList = Object.entries(aboutImagesModules).map(
  ([path, src]) => {
    const filename = path.split("/").pop() || "";
    const name = filename.replace(/\.(png|jpe?g|svg|webp)$/, "");

    return {
      id: name,
      src: src as string,
      alt: `About image ${name}`,
      filename,
    };
  },
);
