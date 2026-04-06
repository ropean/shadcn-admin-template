# shadcn-admin-template

A modern admin dashboard template built on top of [shadcn-admin](https://github.com/satnaing/shadcn-admin) by [@satnaing](https://github.com/satnaing).

🌐 **Live Preview**: [shadcn-admin-template.ropean.org](https://shadcn-admin-template.ropean.org/)

## Stack

- **React 19** + **Vite 8**
- **TanStack Router** — type-safe file-based routing
- **TanStack Query** — data fetching & caching
- **shadcn/ui** + **Tailwind CSS v4**
- **Zustand** — global state
- **React Hook Form** + **Zod** — forms & validation
- **TanStack Table** — data tables
- **Clerk** — optional auth integration

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | Description          | Status |
| ----------------- | -------------------- | ------ |
| `pnpm dev`        | Start dev server     | ✅     |
| `pnpm build`      | Production build     | ✅     |
| `pnpm type:check` | TypeScript check     | ✅     |
| `pnpm lint`       | Lint with oxlint     | ✅     |
| `pnpm format`     | Format with Prettier | ✅     |

## Project Structure

```
├── src/               # Page components (main app)
├── features/          # Page components (reference design, do not modify)
├── components/        # Shared UI components
├── routes/            # File-based route definitions
│   ├── _authenticated/  # Protected pages
│   ├── (auth)/          # Auth pages
│   ├── (errors)/        # Error pages
│   ├── clerk/           # Clerk integration
│   └── features/        # Reference routes (mirrors /features/*)
├── context/           # React context providers
├── hooks/             # Custom hooks
├── stores/            # Zustand stores
└── lib/               # Utilities
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
# Optional: enable TanStack devtools in development
VITE_QUERY_DEVTOOLS=false
VITE_ROUTER_DEVTOOLS=false

# Optional: Clerk authentication
VITE_CLERK_PUBLISHABLE_KEY=your_key_here
```

## Features

- **Light/dark mode** — theme switching built in
- **Fully responsive** — mobile to desktop
- **RTL support** — direction provider included
- **Sidebar layout** — collapsible, with variant support (inset / sidebar / floating)
- **Global search** — command palette
- **Clerk integration** — drop-in auth at `/clerk/*`, fully optional
- **Dual route sets** — live app at `/` and original design reference at `/features/`
- **Type-safe navigation** — all routes and search params fully typed

## Credits

Based on [shadcn-admin](https://github.com/satnaing/shadcn-admin) by [Sat Naing](https://github.com/satnaing), licensed under MIT.

## License

MIT — see [LICENSE](./LICENSE) for details.
