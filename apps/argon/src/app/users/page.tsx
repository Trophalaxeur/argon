import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@argon/shared-shadcn-components-ui';

const FAKE_USERS = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@doe.com',
  },
];

export default function Page() {
  return (
    <>
      <h1>Users</h1>
      <Table>
        <TableCaption>List of Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {FAKE_USERS.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
