"use client";
import React from "react";
import { getUser } from "@/lib/auth";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import avatar from "@/public/media/time.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import TablePointage from "@/components/table-pointage";

export default function AdminPage() {
  const user = getUser();

  return (
    <div>
      <div className="flex items-center justify-between gap-4 md:gap-6">
        <div className="w-2/3 ">
          <div className="flex items-center justify-between bg-pink-500 h-[175px] rounded-xl space-x-5 p-5 my-[100px]">
            <div className="space-y-4 text-white">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Bonjour {user?.firstName} {user?.lastName} 👋
              </h1>
              <p className="text-base">
                Ajouter les entrées et sorties de votre personnel et gérer les
                utilisateurs
              </p>
            </div>
            <Image width={400} height={400} src={avatar.src} alt="avatar" />
          </div>
        </div>
        <div className="w-1/3 h-[500px] bg-sky-500 rounded-xl p-5 text-white">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Pointage</h2>
          <form className="space-y-5 mt-4">
            <Input
              label="Numero de telephone"
              placeholder="Numéro de téléphone"
              className="w-full text-gray-800"
              type="tel"
            />
            <Input
              type="date"
              label="Date du jour"
              className="w-full text-gray-800"
            />
            <div className="flex items-center justify-between gap-4">
              <Input
                type="time"
                label="Heure d'arriver"
                className="w-full text-gray-800"
              />
              {/* <Input type="time" className="w-full text-gray-800" /> */}
            </div>
            <div>
              <Label className="mb-3">Statut</Label>
              <Select>
                <SelectTrigger className="text-gray-800">
                  <SelectValue placeholder="Présent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="present">Présent</SelectItem>
                    <SelectItem value="absent">Absent</SelectItem>
                    <SelectItem value="retard">Retard</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button>Enregistrer</Button>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <ChartAreaInteractive />
        <TablePointage />
      </div>
    </div>
  );
}
