import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // axios
    //   .get<User[]>('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => setError(err.message));

    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(res.data);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='container my-5'>
      <h1>Home Page</h1>
      {error && <p className='text-danger'>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
