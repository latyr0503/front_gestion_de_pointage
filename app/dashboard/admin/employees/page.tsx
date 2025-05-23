import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";
import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    title: "Founder & CEO",
    phone: "+1 555-123-4567",
    email: "john.doe@example.com",
  },
  {
    name: "Jane Doe",
    title: "Engineering Manager",
    phone: "+1 555-234-5678",
    email: "jane.doe@example.com",
  },
  {
    name: "Bob Smith",
    title: "Product Manager",
    phone: "+1 555-345-6789",
    email: "bob.smith@example.com",
  },
  {
    name: "Peter Johnson",
    title: "Frontend Developer",
    phone: "+1 555-456-7890",
    email: "peter.johnson@example.com",
  },
  {
    name: "David Lee",
    title: "Backend Developer",
    phone: "+1 555-567-8901",
    email: "david.lee@example.com",
  },
  {
    name: "Sarah Williams",
    title: "Product Designer",
    phone: "+1 555-678-9012",
    email: "sarah.williams@example.com",
  },
  {
    name: "Michael Brown",
    title: "UX Researcher",
    phone: "+1 555-789-0123",
    email: "michael.brown@example.com",
  },
  {
    name: "Elizabeth Johnson",
    title: "Customer Success",
    phone: "+1 555-890-1234",
    email: "elizabeth.johnson@example.com",
  },
];

export default function employeesPage() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
        Les membres de l&apos;équipe
      </h2> 
      <div className="mt-14 sm:mt-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="shadow-lg p-4 rounded-xl">
            <Avatar className="rounded-full">
              <AvatarFallback className="rounded-full bg-sky-500 text-white">
                {member.name.charAt(0) + member.name.charAt(1)}
              </AvatarFallback>
            </Avatar>
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
            <p className="mt-3 flex flex-col gap-1 text-sm">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-pink-500" />
                {member.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-pink-500" />
                {member.email}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
