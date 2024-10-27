import { createFileRoute } from "@tanstack/react-router";
import { CareerFairTable } from "src/components/CareerFairTable";

export const Route = createFileRoute("/guide")({
    component: CareerFairTable,
});
