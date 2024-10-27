import "./__root.css";

import { ActionIcon, Group, Tooltip } from "@mantine/core";
import { IconBrandDiscord, IconBrandInstagram, IconBrandLinktree } from "@tabler/icons-react";
import { createRootRoute, Link, Outlet, ReactNode } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function SocialsIcon({ label, link, icon }: { label: string; link: string; icon: ReactNode }) {
    return (
        <Tooltip label={label} openDelay={200} transitionProps={{ transition: "pop", duration: 300 }}>
            <ActionIcon
                variant="subtle"
                color="var(--mantine-color-green-8)"
                size="3rem"
                className="icon"
                component={Link}
                to={link}
                target="_blank"
            >
                {icon}
            </ActionIcon>
        </Tooltip>
    );
}

function TopBar() {
    return (
        <Group
            style={{
                border: ".5rem solid var(--mantine-color-green-0)",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                display: "flex",
                justifyContent: "space-between",
                margin: ".5rem",
                width: "calc(100vw - 2 * 8px)",
            }}
        >
            <Group>
                <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/guide">Guide</Link>
            </Group>
            <Group
                style={{
                    paddingRight: "1rem",
                }}
            >
                <SocialsIcon label="Instagram" link="https://www.instagram.com/sjp.rit/" icon={<IconBrandInstagram size="3rem" />} />
                <SocialsIcon label="Discord" link="https://discord.gg/hVAYhyu326" icon={<IconBrandDiscord size="3rem" />} />
                <SocialsIcon label="Linktree" link="https://linktr.ee/sjp.rit" icon={<IconBrandLinktree size="3rem" />} />
            </Group>
        </Group>
    );
}

export const Route = createRootRoute({
    component: () => (
        <>
            <TopBar />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});
