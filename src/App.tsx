import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { MantineReactTable, useMantineReactTable, type MRT_ColumnDef } from "mantine-react-table";
import { Box, Loader } from "@mantine/core";

type Company = {
    name: string;
    notes?: string;
    severity: string;
};

type Cell = {
    values: { effectiveFormat: unknown; effectiveValue: unknown; formattedValue: string; userEnteredValue: unknown }[];
};

const Table = ({ data }: { data: Company[] }) => {
    const columns = useMemo<MRT_ColumnDef<Company>[]>(
        () => [
            {
                accessorKey: "name",
                header: "Name",
            },
            {
                accessorFn: (c) => c.notes,
                header: "Notes",
            },
            {
                accessorFn: (c) => c.severity,
                header: "Severity",
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data,
        initialState: {
            isFullScreen: true,
        },
    });

    return (
        <>
            <MantineReactTable table={table} />
        </>
    );
};

export default function App() {
    const [companies, setCompanies] = useState<Company[] | undefined>(undefined);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/data`)
            .then(async (res) => {
                const { data } = await res.json();
                setCompanies(
                    data?.data?.sheets[0]?.data[0]?.rowData?.map(
                        (raw: Cell) =>
                            ({
                                name: raw.values[0].formattedValue,
                                notes: raw.values[1].formattedValue,
                                severity: raw.values[2].formattedValue,
                            } as Company),
                    ),
                );
            })
            .catch((e) => console.warn("Error retrieving data:", e));
    }, []);

    return (
        <Box style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
            {companies === undefined ? (
                <>
                    <Loader h="100%" w="100%" />
                </>
            ) : (
                <Table data={companies} />
            )}
        </Box>
    );
}
