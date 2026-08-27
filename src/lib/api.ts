/**
 * Tevexxo public API client.
 *
 * The Landing Website is a pure consumer of the Backend's PUBLIC read-only
 * endpoints (`/api/public/*`). MongoDB stays the single source of truth:
 * Admin Panel -> Backend API -> MongoDB -> these GET calls.
 *
 * Never put admin tokens or secrets here - this module must stay safe
 * for browser bundles.
 */

export const API_URL: string =
  (import.meta.env["VITE_API_URL"] as string | undefined)?.replace(/\/$/, "") ||
  "https://tevexxo-backend-1.onrender.com";

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function publicFetch<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}/api/public${path}`, init);
  } catch {
    throw new ApiError(0, "Cannot reach the Tevexxo server.");
  }

  let json: unknown = null;
  try {
    json = await res.json();
  } catch {
    /* non-JSON response */
  }

  if (!res.ok) {
    const message =
      (json as { message?: string } | null)?.message || `Request failed (${res.status})`;
    throw new ApiError(res.status, message);
  }

  return json as T;
}

// ---------------------------------------------------------------------------
// Raw API response shapes (mirror the Mongoose models exposed by the backend)
// ---------------------------------------------------------------------------

type ApiEnvelope<T> = { success: boolean; count?: number; data: T };

/** Fields shared by every entity built on buildEntitySchema() */
export type ApiEntity = {
  id: string;
  name: string;
  email?: string;
  category?: string;
  status?: string;
  detail?: string;
  amount?: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ApiCourse = ApiEntity & { image?: string; price?: number; studentsCount?: number };
export type ApiProgram = ApiEntity & { enrolled?: number };
export type ApiProject = ApiEntity & { submissions?: number };
export type ApiTestimonial = ApiEntity & { rating?: number; message?: string };
export type ApiPublicSettings = {
  siteName: string;
  siteEmail: string;
  siteDescription: string;
  currency: string;
};

// ---------------------------------------------------------------------------
// Fetchers (read-only)
// ---------------------------------------------------------------------------

async function listEntities<T>(path: string): Promise<T[]> {
  const json = await publicFetch<ApiEnvelope<T[]>>(path);
  return Array.isArray(json.data) ? json.data : [];
}

export function getCourses(): Promise<ApiCourse[]> {
  return listEntities<ApiCourse>("/courses");
}

export function getCourseByIdOrSlug(idOrSlug: string): Promise<ApiCourse> {
  return publicFetch<ApiEnvelope<ApiCourse>>(`/courses/${encodeURIComponent(idOrSlug)}`).then(
    (j) => j.data,
  );
}

export function getPrograms(): Promise<ApiProgram[]> {
  return listEntities<ApiProgram>("/programs");
}

export function getProjects(): Promise<ApiProject[]> {
  return listEntities<ApiProject>("/projects");
}

export function getProjectByIdOrSlug(idOrSlug: string): Promise<ApiProject> {
  return publicFetch<ApiEnvelope<ApiProject>>(`/projects/${encodeURIComponent(idOrSlug)}`).then(
    (j) => j.data,
  );
}

export function getTestimonials(): Promise<ApiTestimonial[]> {
  return listEntities<ApiTestimonial>("/testimonials");
}

export function getPublicSettings(): Promise<ApiPublicSettings> {
  return publicFetch<ApiEnvelope<ApiPublicSettings>>("/settings").then((j) => j.data);
}

// ---------------------------------------------------------------------------
// Public form submissions (the ONLY write the landing site may perform)
// ---------------------------------------------------------------------------

export type InquiryInput = {
  name: string;
  email: string;
  phone?: string;
  category: string;
  message: string;
};

export async function createInquiry(input: InquiryInput): Promise<{ id: string }> {
  const json = await publicFetch<ApiEnvelope<{ id: string }>>("/inquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return json.data;
}

// ---------------------------------------------------------------------------
// Presentation mapping: raw Mongo documents -> UI-ready view models
// ---------------------------------------------------------------------------

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
