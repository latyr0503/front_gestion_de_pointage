"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Ellipsis,
  SquarePen,
  Trash,
} from "lucide-react";

const filteredData = [
  {
    id: 1,
    name: "Latyr Sene",
    email: "latyr@gmail.com",
    phone: "77 612 34 44",
    date: "12/06/2024",
    timeStart: "08:30",
    status: "present",
  },
  {
    id: 2,
    name: "Awa Ndiaye",
    email: "awa.ndiaye@gmail.com",
    phone: "77 123 45 67",
    date: "12/06/2024",
    timeStart: "08:45",
    status: "retard",
  },
  {
    id: 3,
    name: "Moussa Diop",
    email: "moussa.diop@gmail.com",
    phone: "76 987 65 43",
    date: "12/06/2024",
    timeStart: "08:30",
    status: "present",
  },
  {
    id: 4,
    name: "Fatou Sarr",
    email: "fatou.sarr@gmail.com",
    phone: "78 654 32 10",
    date: "12/06/2024",
    timeStart: "09:00",
    status: "absent",
  },
  {
    id: 5,
    name: "Cheikh Ba",
    email: "cheikh.ba@gmail.com",
    phone: "77 321 09 87",
    date: "12/06/2024",
    timeStart: "08:35",
    status: "present",
  },
];

const TABLE_HEADERS = [
  "Nom complet",
  "Numero",
  "Date",
  "Heure d'arriver",
  "status",
  "action",
] as const;

function PersonnelRow({ personne }: { personne: (typeof filteredData)[0] }) {
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "present":
        return "bg-green-500 text-white";
      case "absent":
        return "bg-red-500 text-white";
      case "retard":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <TableRow
      className="border-b hover:bg-gray-50 transition-colors"
      role="row"
      aria-label={`Informations de ${personne.name}`}
    >
      <TableCell className="flex items-center gap-3">
        <Avatar className="h-10 w-10 bg-[#F1E7DD]">
          <AvatarImage
            src="/placeholder.svg"
            alt={`Avatar de ${personne.name}`}
            loading="lazy"
          />
          <AvatarFallback aria-label={`Initiales de ${personne.name}`}>
            {getInitials(personne.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{personne.name}</div>
          <div className="text-sm text-gray-500">{personne.email}</div>
        </div>
      </TableCell>
      <TableCell>{personne.phone}</TableCell>
      <TableCell>{personne.date}</TableCell>
      <TableCell>{personne.timeStart}</TableCell>
      <TableCell>
        <Badge className={`capitalize ${getStatusColor(personne.status)}`}>
          {personne.status}
        </Badge>{" "}
      </TableCell>
      <TableCell className="text-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownMenuItem className="cursor-pointer">
              <SquarePen className="mr-1" /> Modifier
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Trash className="mr-1" /> Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
export default function TablePointage() {
  return (
    <Table className="">
      <TableHeader className="bg-pink-500">
        <TableRow>
          {TABLE_HEADERS.map((header, index) => (
            <TableHead
              key={header}
              className={`font-medium uppercase text-white ${
                index === 0 ? "w-[250px]" : ""
              }`}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={TABLE_HEADERS.length}
              className="text-center py-8"
            >
              <p className="text-gray-500">Aucun résultat trouvé</p>
            </TableCell>
          </TableRow>
        ) : (
          filteredData.map((personne) => (
            <PersonnelRow key={personne.id} personne={personne} />
          ))
        )}
      </TableBody>
    </Table>
  );
}
