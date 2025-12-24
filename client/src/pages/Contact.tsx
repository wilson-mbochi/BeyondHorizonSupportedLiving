import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactMessage } from "@shared/schema";
import { useContactForm } from "@/hooks/use-content";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import exteriorImage from '@assets/stock_images/modern_accessible_ho_9b16413c.jpg';

export default function Contact() {
  const { mutate: submitContact, isPending } = useContactForm();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitContact(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <PageHeader 
        title="Get in Touch" 
        subtitle="We're here to answer your questions and help you find the right support."
        image={exteriorImage}
      />

      <section className="py-24 bg-white relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground text-lg">
                  Reach out to us directly or fill out the form, and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Community Lane, Suite 400<br />Springfield, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@beyondhorizon.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="rounded-xl py-6 bg-slate-50 border-slate-200" {...field} />
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
                            <Input placeholder="john@example.com" className="rounded-xl py-6 bg-slate-50 border-slate-200" {...field} />
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
                            <Input placeholder="(555) 123-4567" className="rounded-xl py-6 bg-slate-50 border-slate-200" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="rounded-xl min-h-[150px] bg-slate-50 border-slate-200 resize-none p-4" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full rounded-xl py-6 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Interactive Map Integration</p>
            <p className="text-slate-400 text-sm">Coordinates: 37.7749° N, 122.4194° W</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
