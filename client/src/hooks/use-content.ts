import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertContactMessage, type InsertJobApplication } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// ============================================
// TESTIMONIALS HOOKS
// ============================================

export function useTestimonials() {
  return useQuery({
    queryKey: [api.testimonials.list.path],
    queryFn: async () => {
      const res = await fetch(api.testimonials.list.path);
      if (!res.ok) throw new Error("Failed to fetch testimonials");
      return api.testimonials.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// CONTACT FORM HOOK
// ============================================

export function useContactForm() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit message");
      }
      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });
}

// ============================================
// CAREERS FORM HOOK
// ============================================

export function useCareerApplication() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertJobApplication) => {
      const validated = api.careers.submit.input.parse(data);
      const res = await fetch(api.careers.submit.path, {
        method: api.careers.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.careers.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit application");
      }
      return api.careers.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Application Received!",
        description: "Thank you for your interest in joining our team.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });
}
