import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createInquiry,
  getCourses,
  getCourseByIdOrSlug,
  getPrograms,
  getProjectByIdOrSlug,
  getProjects,
  getPublicSettings,
  getTestimonials,
  type InquiryInput,
} from "@/lib/api";

/**
 * React Query hooks for CMS-managed content.
 *
 * Freshness strategy: the QueryClient is created per app start with
 * staleTime: 0, so every page mount refetches from the Backend -> MongoDB.
 * No permanent caching, no polling, no WebSockets needed on the public site.
 */

export function useCourses() {
  return useQuery({ queryKey: ["public", "courses"], queryFn: getCourses });
}

export function useCourse(idOrSlug: string | undefined) {
  return useQuery({
    queryKey: ["public", "courses", idOrSlug],
    queryFn: () => getCourseByIdOrSlug(idOrSlug as string),
    enabled: Boolean(idOrSlug),
    retry: false,
  });
}

export function usePrograms() {
  return useQuery({ queryKey: ["public", "programs"], queryFn: getPrograms });
}

export function useProjects() {
  return useQuery({ queryKey: ["public", "projects"], queryFn: getProjects });
}

export function useProject(idOrSlug: string | undefined) {
  return useQuery({
    queryKey: ["public", "projects", idOrSlug],
    queryFn: () => getProjectByIdOrSlug(idOrSlug as string),
    enabled: Boolean(idOrSlug),
    retry: false,
  });
}

export function useTestimonials() {
  return useQuery({ queryKey: ["public", "testimonials"], queryFn: getTestimonials });
}

export function usePublicSettings() {
  return useQuery({
    queryKey: ["public", "settings"],
    queryFn: getPublicSettings,
    staleTime: 60_000,
  });
}

/** Submits contact / demo / newsletter forms to the Backend (-> MongoDB -> Admin Inquiries). */
export function useCreateInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: InquiryInput) => createInquiry(input),
    onSuccess: () => {
      // The admin panel may list inquiries - keep any cached copy fresh.
      void queryClient.invalidateQueries({ queryKey: ["public"] });
    },
  });
}
