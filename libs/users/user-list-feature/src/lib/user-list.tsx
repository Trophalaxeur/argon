import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@argon/ui-shadcn-components-ui';
import { fetchUsers } from '@argon/users-user-data-access';

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

export async function UserList() {
  const users = await fetchUsers();
  return (
    <Table>
      <TableCaption>List of Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.firstName}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default UserList;
