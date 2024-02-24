import React, { useState } from 'react';
import axios from 'axios'; // Axios kütüphanesini import et
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
      e.preventDefault();
        try {
            // Axios ile POST isteği gönder
            const response = await axios.post('https://sleek-selection-production.up.railway.app/api/users/login', {
                userName: username,
                userPassword: password,
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const userToken = response.data;
                const decodedToken = jwtDecode(userToken);
                sessionStorage.setItem('userId', decodedToken.userid);
                sessionStorage.setItem('userName', decodedToken.username);
                sessionStorage.setItem('userPaw', decodedToken.userpaw);
                navigate(`/notelist`);
            } else {
                console.error('Giriş başarısız!');
            }
        } catch (error) {
            console.error('Giriş yapılırken bir hata oluştu:', error);
        }
    };

    return (
      <div className='w-full h-screen bg-[#15161a] flex items-center justify-center'>
        <div className='w-1/3 h-2/3 bg-[#1e1f24] rounded-xl flex flex-col justify-center items-center'>
          <div className='w-5/6 h-10 text-sm font-medium text-gray-100 flex items-center'>Kullanıcı Adı</div>
          <input autoComplete='off' placeholder='Kullanıcı adı giriniz' type="text" id='userName' name='userName'
          value={username} onChange={(e) => setUsername(e.target.value)} 
          className="w-5/6 h-10 pl-4 bg-[#2d2e35] border border-[#46484d] rounded text-sm outline-0 text-white"/>
           <div className='w-5/6 h-10 text-sm font-medium text-gray-100 flex items-center'>Şifre</div>
           <input autoComplete='off' placeholder='Şifre giriniz' type='text' id='userPassword' 
           name='userPassword' value={password} onChange={(e) => setPassword(e.target.value)}  
           className="w-5/6 h-10 pl-4 bg-[#2d2e35] border border-[#46484d] rounded text-sm outline-0 text-white mb-4" />
           <div className='w-5/6 h-20 flex items-center justify-center'>
           <button onClick={handleLogin} className="w-full px-6 py-5 text-sm font-bold leading-none text-white transition 
           duration-300 md:w-96 rounded bg-[#4631ff] focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">Giriş Yap</button>
           </div>
           <div className='w-5/6 h-4 flex items-center justify-center text-white text-xs font-semibold'>Henüz bir hesabın yok mu?</div>

           <div className='w-5/6 h-20 flex items-center justify-center'>
           <a href='/register' className="w-full px-6 py-5 flex items-center justify-center text-sm font-bold leading-none text-white transition 
           duration-300 md:w-96 rounded bg-[#4631ff] focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">Kayıt Ol</a>
           </div>

        </div>
      </div>
    );
};

export default Login;