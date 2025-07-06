import { BASE_URL } from "../constants";

export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}

export function createCanonicalMetadata(path: string = "") {
  return {
    alternates: {
      canonical: getCanonicalUrl(path),
    },
  };
}
