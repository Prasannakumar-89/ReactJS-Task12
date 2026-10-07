import useFetchData from "../hooks/useApiData";


function FetchUsers() {
  const {
    data: users,
    loading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");


  if (loading) {
    return <p className="status-message">Loading users...</p>;
  }


  if (error) {
    return <p className="error-message">{error}</p>;
  }



  return (
    <div className="fetch-users-page">
      <h1>Users List</h1>

    <div className="fetch-users-grid">
        {users.map((user) => (
          <div className="fetch-user-card" key={user.id}>
            <h2>{user.name}</h2>

        <p>
              <strong>ID:</strong> {user.id}
            </p>

        <p>
              <strong>Username:</strong> {user.username}
            </p>

        <p>
              <strong>Email:</strong> {user.email}
            </p>

        <p>
              <strong>Phone:</strong> {user.phone}
            </p>

         <p>
              <strong>Website:</strong> {user.website}
            </p>

        <p>
              <strong>City:</strong> {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchUsers;