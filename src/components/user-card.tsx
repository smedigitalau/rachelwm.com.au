"use client";
import { cn } from "@/lib/utils";

export type UserCardProps = {
	className?: string;
};

export function UserCard({ className }: UserCardProps) {
	return <div className={cn("overflow-hidden", className)}>helllooooo</div>;
}
