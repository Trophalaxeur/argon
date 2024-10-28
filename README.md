This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## NOTES

### Prisma client generation
The command `generate-client` in package.json call the command `argon:generate-client` defined in the project.json.
When running with `nx run`, `.env` file are automatically loaded by NX
(https://nx.dev/recipes/tips-n-tricks/define-environment-variables).
This allow use to define a specific `.env` file for each backend project.

### Prisma schema generation
The command `generate-schema` in package.json call the command `argon:generate-schema` defined in the project.json.
When running with `nx run`, `.env` file are automatically loaded by NX
(https://nx.dev/recipes/tips-n-tricks/define-environment-variables).
This allow use to define a specific `.env` file for each backend project.

### Prisma migration

In order to run 'prisma migration dev', we need to connect to the DB as root (on the local database)
Otherwise, we got this error :
```
Error: P3014
Prisma Migrate could not create the shadow database. Please make sure the database user has permission to create databases. Read more about the shadow database (and workarounds) at https://pris.ly/d/migrate-shadow
Original error: Error code: P1010
User `db_user` was denied access on the database `dbArgon`
```


### Troubleshooting
Add Shadcn/ui component into NX library :
https://github.com/shadcn-ui/ui/issues/778