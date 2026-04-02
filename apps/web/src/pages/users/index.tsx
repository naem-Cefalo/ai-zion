import { useState } from 'react';
import { UsersTable } from './components/UsersTable';

interface User {
  id: number;
  email: string;
}

export function UsersListPage() {
  const [users] = useState<User[]>([
    { id: 1, email: 'user1@example.com' },
    { id: 2, email: 'user2@example.com' },
    { id: 3, email: 'user3@example.com' },
  ]);

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Users</h1>
      <UsersTable users={users} />
    </div>
  );
}
