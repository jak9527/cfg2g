import "./App.css";
import { useMemo, useState } from "react";
import { MantineReactTable, useMantineReactTable, type MRT_ColumnDef } from "mantine-react-table";
import { Box, Button } from "@mantine/core";

interface Company {
    name: string;
    notes?: string;
    severity: string;
}

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
    const [companies, setCompanies] = useState<Company[] | undefined>();
    return (
        <Box style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center" }}>
            {companies === undefined ? (
                <>
                    <Button
                        onClick={async () => {
                            const data = await fetch(`${import.meta.env.VITE_BASE_URL}/data`).then(async (v) => v.json());
                            setCompanies(data.map((c: string[]) => ({ name: c[0], notes: c[1], severity: c[2] } as Company)));
                        }}
                    >
                        Fetch
                    </Button>
                </>
            ) : (
                <Table data={companies} />
            )}
        </Box>
    );
}
