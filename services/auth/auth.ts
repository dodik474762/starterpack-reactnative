export const AUTH_API = 'https://api.example.com/auth';

const AuthServices = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${AUTH_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Login failed');
    }
  },
};

export default AuthServices;
