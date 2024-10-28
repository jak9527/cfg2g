import { Box, Group, Image, Title } from "@mantine/core";
import { createFileRoute, ReactNode } from "@tanstack/react-router";

export function ImageFrame({ children }: ReactNode) {
    return (
        <Box w="auto" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", border: "0.25rem solid var(--mantine-color-green-0)" }}>
            {children}
        </Box>
    );
}

export const Route = createFileRoute("/")({
    component: () => {
        return (
            <Box style={{ display: "flex", flexDirection: "column" }}>
                <Group style={{ textAlign: "right", paddingTop: "5rem" }}>
                    <Title
                        order={1}
                        style={{ fontFamily: "Noe Bold", fontSize: "10em", lineHeight: "1em", color: "var(--mantine-color-green-8)" }}
                    >
                        Students for Justice in Palestine
                    </Title>
                </Group>
                <Box w="100%" style={{ display: "flex", justifyContent: "space-around", padding: "5rem 0.5rem" }}>
                    <ImageFrame>
                        <Image src="/landing-page.jpg" h={470} w="auto" style={{}} />
                    </ImageFrame>
                    <ImageFrame>
                        <Image src="/landing-page-2.jpg" h={470} w="auto" style={{}} />
                    </ImageFrame>
                    <ImageFrame>
                        <Image src="/landing-page-3.jpg" h={470} w="auto" style={{}} />
                    </ImageFrame>
                </Box>
            </Box>
        );
    },
});
