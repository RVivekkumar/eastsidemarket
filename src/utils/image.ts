/**
 * Optimize Cloudinary image URL for web (auto format + quality).
 * Use for better performance and smaller file sizes.
 */
export function getOptimizedImageUrl(url: string, width?: number): string {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  const separator = url.includes("?") ? "&" : "?";
  const params = ["f_auto", "q_auto"];
  if (width) params.push(`w_${width}`);
  return `${url}${separator}${params.join(",")}`;
}
