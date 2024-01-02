import React, { useState } from 'react';
import axios from 'axios'; // Axios kütüphanesini import et
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [passwordType, setPasswordType] = useState("password");

    const passwordTypeFunc = () => {
        if (passwordType === "password") {
            setPasswordType("text")
        }else{
            setPasswordType("password")
        }
        
    }


    const handleLogin = async () => {
        try {
            // Axios ile POST isteği gönder
            const response = await axios.post('http://sleek-selection-production.up.railway.app/api/users/login', {
                userName: username,
                userPassword: password,
            }, {
                withCredentials: true, // Tarayıcı çerezlerini paylaşmak için
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
        <div className='register-container'>
           
            <div className="register-box">
                <div className="text-reg">Gerçek gücünü keşfet</div>
                <div className="undertext-reg">Hemen giriş yap ve ücretsiz olarak deneme fırsatı yakala.</div>
                <div className="input-reg">
                    <input className='username-input' placeholder='Kullanıcı adı giriniz' type="text" id='userName' name='userName' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <div className="pass-input">
                        <input className='password' placeholder='Şifre giriniz' type={passwordType} id='userPassword' name='userPassword' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={passwordTypeFunc} className='eye-button'>{passwordType === "password" ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>}</button>
                    </div>

                    <button onClick={handleLogin}>Giriş Yap</button>
                </div>
                <div className="login-route">
                    <div className="log-text">Hesabın yok mu?</div>
                    <a href='/register' className="log-tag">Kayıt Ol</a>
                </div>
            </div>
            <div className="image-reg"></div>
        </div>
        // <div>
        //     <h2>Giriş Yap</h2>
        //     <label>Kullanıcı Adı:</label>
        //     <input type="text" id='userName' name='userName' value={username} onChange={(e) => setUsername(e.target.value)} />
        //     <br />
        //     <label>Şifre:</label>
        //     <input type="password" id='userPassword' name='userPassword' value={password} onChange={(e) => setPassword(e.target.value)} />
        //     <br />
        //     <button onClick={handleLogin}>Giriş Yap</button>
        // </div>
    );
};

export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';

// function Login() {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const [passwordType, setPasswordType] = useState("password");

//   const passwordTypeFunc = () => {
//     if (passwordType == "password") {
//       setPasswordType("text")
//     } else {
//       setPasswordType("password")
//     }

//   }


//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Axios ile POST isteği gönder
//       const response = await axios.post('http://localhost:8082/api/users/login', {
//         userName: username,
//         userPassword: password,
//       }, {
//         withCredentials: true, // Tarayıcı çerezlerini paylaşmak için
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         const userToken = response.data;
//         const decodedToken = jwtDecode(userToken);
//         sessionStorage.setItem('userId', decodedToken.userid);
//         sessionStorage.setItem('userName', decodedToken.username);
//         navigate(`/notelist`);
//       } else {
//         console.error('Giriş başarısız!');
//       }
//     } catch (error) {
//       console.error('Giriş yapılırken bir hata oluştu:', error);
//     }
//   };



//   return (
//     <div className="bg-white rounded-lg py-5">
//       <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
//         <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
//           <div className="flex items-center justify-center w-full lg:p-12">
//             <div className="flex items-center xl:p-10">
//               <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
//                 <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign In</h3>
//                 <p className="mb-4 text-grey-700">Enter your email and password</p>
//                 <a className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
//                   <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
//                   Sign in with Google
//                 </a>
//                 <div className="flex items-center mb-3">
//                   <hr className="h-0 border-b border-solid border-grey-500 grow" />
//                   <p className="mx-4 text-grey-600">or</p>
//                   <hr className="h-0 border-b border-solid border-grey-500 grow" />
//                 </div>
//                 <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
              
//                 <input type="text" id='userName' name='userName' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="mail@loopple.com" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
//                 <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
               
//                 <input type={passwordType} id='userPassword' name='userPassword' value={password} onChange={(e) => setPassword(e.target.value)} className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
//                 <div className="flex flex-row justify-between mb-8">
//                   <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
//                     <input type="checkbox" checked value="" className="sr-only peer" />
//                     <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
//                       <img className="" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png" alt="tick" />
//                     </div>
//                     <span className="ml-3 text-sm font-normal text-grey-900">Keep me logged in</span>
//                   </label>
//                   <a href="javascript:void(0)" className="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</a>
//                 </div>
              
              
              
//                 <button onClick={handleLogin} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-[#4631ff] bg-[#31ff45] focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">Sign In</button>
//                 <p className="text-sm leading-relaxed text-grey-900">Not registered yet? <a href="javascript:void(0)" className="font-bold text-grey-700">Create an Account</a></p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-wrap -mx-3 my-5">
//         <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
//           <p className="text-sm text-slate-500 py-1">
//             Tailwind CSS Component from <a href="https://www.loopple.com/theme/motion-landing-library?ref=tailwindcomponents" className="text-slate-700 hover:text-slate-900" target="_blank" rel="noopener noreferrer">Motion Landing Library</a> by <a href="https://www.loopple.com" className="text-slate-700 hover:text-slate-900" target="_blank" rel="noopener noreferrer">Loopple Builder</a>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
