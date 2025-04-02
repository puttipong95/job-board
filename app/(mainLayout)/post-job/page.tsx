import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ArcjetLogo from "@/public/arcjet.jpg";
import InngestLogo from "@/public/inngest-locale.png";
import Image from "next/image";
import CreateJobForm from "@/components/form/CreateJobForm";

export const PostJobPage = () => {
  const companies = [
    { id: 0, name: "ArcJet", logo: ArcjetLogo },
    { id: 1, name: "Inngest", logo: InngestLogo },
    { id: 2, name: "ArcJet", logo: ArcjetLogo },
    { id: 3, name: "Inngest", logo: InngestLogo },
    { id: 4, name: "ArcJet", logo: ArcjetLogo },
    { id: 5, name: "Inngest", logo: InngestLogo },
  ];

  const testimonials = [
    {
      quote:
        "We found our ideal candidate within 48 hours of posting. The quality of applicants was exceptional!",
      author: "Sarah Chen",
      company: "TechCorp",
    },
    {
      quote:
        "This platform saved us weeks of recruitment time. Highly recommended!",
      author: "John Doe",
      company: "InnovateX",
    },
    {
      quote:
        "The best hiring experience we've ever had. Streamlined and effective!",
      author: "Emily Davis",
      company: "NextGen Solutions",
    },
    {
      quote:
        "Excellent service with top-tier candidates. Will definitely use again!",
      author: "Michael Brown",
      company: "FutureWorks",
    },
    {
      quote:
        "The process was seamless, and we hired a great developer in just a few days.",
      author: "Sophia Wilson",
      company: "CodeCrafters",
    },
    {
      quote:
        "A game-changer for our hiring process. The talent pool is outstanding.",
      author: "Daniel Lee",
      company: "AI Ventures",
    },
  ];

  const stats = [
    { id: 0, value: "10k+", label: "Monthly active job seekers" },
    { id: 1, value: "48h", label: "Average time to hire" },
    { id: 2, value: "95%", label: "Employer satisfaction rate" },
    { id: 3, value: "500+", label: "Companies hiring remotely" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
      <CreateJobForm />

      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Trusted by Industry Leaders
            </CardTitle>
            <CardDescription>
              Join thousands of companies hiring top talent
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Company logos */}
            <div className="grid grid-cols-3 gap-4">
              {companies.map((company) => (
                <div key={company.id}>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="rounded-lg opacity-75 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {testimonials.map((testimonial, i) => (
                <blockquote key={i} className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-2 text-sm font-medium">
                    - {testimonial.author}, {testimonial.company}
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* We will render stats here */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.id} className="rounded-lg bg-muted p-4">
                  <h4 className="text-2xl font-bold">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostJobPage;
