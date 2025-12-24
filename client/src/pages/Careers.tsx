import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertJobApplicationSchema, type InsertJobApplication } from "@shared/schema";
import { useCareerApplication } from "@/hooks/use-content";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Briefcase } from "lucide-react";
import caregiverImage from '@assets/stock_images/caregiver_helping_sm_e40195a6.jpg';

export default function Careers() {
  const { mutate: submitApplication, isPending } = useCareerApplication();
  
  const form = useForm<InsertJobApplication>({
    resolver: zodResolver(insertJobApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: ""
    }
  });

  const onSubmit = (data: InsertJobApplication) => {
    submitApplication(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <PageHeader 
        title="Join Our Team" 
        subtitle="Make a real difference in people's lives every single day."
        image={caregiverImage}
      />

      <section className="py-24 bg-white">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Current Opportunities</h2>
            <p className="text-muted-foreground">
              We are always looking for compassionate, dedicated individuals to join our support team.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground border-b pb-2">Personal Details</h3>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Smith" className="rounded-xl py-6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@example.com" className="rounded-xl py-6" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 987-6543" className="rounded-xl py-6" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-foreground border-b pb-2">Position Details</h3>
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position Applied For</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl py-6">
                              <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Support Worker">Support Worker</SelectItem>
                            <SelectItem value="Senior Support Worker">Senior Support Worker</SelectItem>
                            <SelectItem value="Care Coordinator">Care Coordinator</SelectItem>
                            <SelectItem value="Registered Manager">Registered Manager</SelectItem>
                            <SelectItem value="Nurse">Registered Nurse</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why do you want to join us?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your experience and why you'd be a great fit..." 
                            className="rounded-xl min-h-[200px] resize-none p-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full rounded-xl py-6 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all mt-4"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
