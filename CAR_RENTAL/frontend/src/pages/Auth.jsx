// import React, { useState } from 'react';

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const toggleMode = () => {
//     setIsLogin(!isLogin);
//     setForm({ name: '', email: '', password: '' });
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       alert(`✅ Logged in with Email: ${form.email}`);
//     } else {
//       alert(`✅ Registered as ${form.name}`);
//     }
//   };

  

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-lg p-8 rounded w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {isLogin ? 'Login' : 'Register'}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full border p-2 rounded"
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
//           >
//             {isLogin ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           {isLogin ? 'New user?' : 'Already have an account?'}{' '}
//           <button onClick={toggleMode} className="text-blue-500 underline">
//             {isLogin ? 'Sign Up here' : 'Login here'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Auth;



import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setForm({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      localStorage.setItem('isLoggedIn', 'true');
      alert(`Logged in as ${form.email}`);
    } else {
      alert(`Registered as ${form.name}`);
    }
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="w-full border p-2 rounded" />
          )}
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full border p-2 rounded" />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? 'New user?' : 'Already have an account?'}
          <button onClick={toggleMode} className="text-blue-500 underline ml-1">{isLogin ? 'Sign Up here' : 'Login here'}</button>
        </p>
      </div>
    </div>
  );
};

export default Auth;