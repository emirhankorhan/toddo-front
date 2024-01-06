import React, { useContext, useEffect, useState } from 'react'
import Note from "../note/Note"
import AppContext from '../context/AppContext';
import "./notelist.css"
import { useNavigate } from 'react-router-dom';

function NoteList() {

  const {
    notes,
    note,
    clickChange,
    clickFunc,
    deleteFunc,
    clearFunc,
    userPaw,
    taskType,
    effectiveButton,
    userId,
    userName,
    setUserName,
    setUserId,
    completedFunc,
    archivedFunc,
    activedFunc,
    partnerTask,
    setNote
  } = useContext(AppContext);

  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const [partnerTaskDiv, setPartnerTaskDiv] = useState(false);
  const [partnerClick, setPartnerClick] = useState(false);

  

  const exitFunc = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userPaw');
    navigate('/');
  }

  const paww = sessionStorage.getItem('userPaw')
  const storedUserId = parseInt(sessionStorage.getItem('userId'), 10);
  const storedUserName = sessionStorage.getItem('userName');

  useEffect(() => {

    setUserId(storedUserId);
  }, [storedUserId, setUserId]);

  useEffect(() => {

    setUserName(storedUserName);
  }, [storedUserName, setUserName]);

  const exitPartnerTask = () => setPartnerTaskDiv(false)
  const enterPartnerTask = () => setPartnerTaskDiv(true)
  const partnersClick = (partnerText) => {
    setPartnerClick(true)
    setNote({
      noteId: 0,
      userId: userId,
      text: partnerText,
      date: "",
      isCompleted: "partner"
    });
  }

  const partnersConf = () => {
    // Gelen değerleri note state'ine işle
   };




  return (
    <div className="body-cont relative">
      <div class="flex h-screen flex-col justify-between w-1/5 bg-[#1e1f24]">
        <div class="px-4 py-6">
          <div className='flex h-10 w-full'>
          <div class="flex h-10 w-20 items-center justify-center rounded-lg bg-gray-100 text-xs">
            <div className='h-10 w-8 flex text-lg text-[#6763fe] justify-center items-center'><i class="fa-solid fa-paw"></i></div>
            <div className='h-10 w-8 flex text-sm font-bold text-gray-700 justify-center items-center'>{userPaw == null || NaN ? paww : userPaw}</div>
          </div>

          <div onClick={enterPartnerTask} class="flex h-10 w-36 items-center justify-center rounded-lg ml-4 bg-gray-100 text-xs">
            <div className='h-10 w-8 flex text-lg text-gray-700 justify-end items-center'><i class="fa-solid fa-handshake-simple"></i></div>
            <div className='h-10 w-28 flex select-none cursor-pointer text-sm font-bold text-gray-700 justify-center items-center'>Ortak Görevler</div>
          </div>
          </div>
          

          

          <ul class="mt-6 space-y-1">
            <li>
              <a href="/notelist" class="block rounded-lg bg-[#15161a] px-4 py-2 text-sm font-medium text-white">
                Görevler
              </a>
            </li>

            <li>
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-400 hover:bg-[#15161a] hover:text-white"
                >
                  <span class="text-sm font-medium"> Ders Notları </span>

                  <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul class="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="/a"
                      class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-[#15161a] hover:text-white"
                    >
                      Notlar
                    </a>
                  </li>

                  <li>
                    <a
                      href="/gg"
                      class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-[#15161a] hover:text-white"
                    >
                      Takvim
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a
                href="/awda"
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-[#15161a] hover:text-white"
              >
                Bildirim Gönder
              </a>
            </li>

            <li>
              <a
                href="/awda"
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-[#15161a] hover:text-white"
              >
                Yardım
              </a>
            </li>

            <li>
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-400 hover:bg-[#15161a] hover:text-white"
                >
                  <span class="text-sm font-medium"> Hesap </span>

                  <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul class="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="/setting"
                      class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-[#15161a] hover:text-white"
                    >
                      Ayarlar
                    </a>
                  </li>

                  <li>
                    <a
                      href="/ia"
                      class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-[#15161a] hover:text-white"
                    >
                      Geri Bildirim
                    </a>
                  </li>

                  <li>
                    <form action="/logout">
                      <button
                        type="submit"
                        onClick={exitFunc}
                        class="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-400 [text-align:_inherit] hover:bg-[#15161a] hover:text-white"
                      >
                        Çıkış
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div class="sticky inset-x-0 bottom-0">
          <div class="flex items-center gap-2 bg-[#1e1f24] p-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p class="text-xs">
                <strong class="block font-medium text-white">{userName}</strong>

                <span className='text-white'>Kişisel PawPaw Hesabı</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#15161a] w-4/5 h-full flex items-center justify-start flex-col'>


        {/*  üstteki tab bölümü */}
        <div className='w-3/4 h-28 flex items-center justify-start'>
          {taskType === "active" ? <button className='py-2 px-4 bg-[#282736] border border-[#373580] rounded-md text-sm mr-4 text-[#6763fe]'>Etkin</button> : <button onClick={() => effectiveButton(["active", "partner"])} className='py-2 px-4 bg-[#1e1f24] rounded-md text-sm mr-4 border border-[#1e1f24] text-white'>Etkin</button>}
          {taskType === "completed" ? <button className='py-2 px-4 bg-[#282736] border border-[#373580] rounded-md text-sm mr-4 text-[#6763fe]'>Tamamlandı</button> : <button onClick={() => effectiveButton(["completed"])} className='py-2 px-4 bg-[#1e1f24] rounded-md text-sm mr-4 border border-[#1e1f24] text-white'>Tamamlandı</button>}
          {taskType === "archived" ? <button className='py-2 px-4 bg-[#282736] border border-[#373580] rounded-md text-sm mr-4 text-[#6763fe]'>Arşiv</button> : <button onClick={() => effectiveButton(["archived"])} className='py-2 px-4 bg-[#1e1f24] rounded-md text-sm mr-4 border border-[#1e1f24] text-white'>Arşiv</button>}
        </div>


        {/* görevleri yazdığımız yer */}

        <div className='form-contain'>
          <div>


            <div
              className="overflow-hidden rounded-md border border-gray-700"
            >
              {taskType === "active" ? <textarea
                className="w-full resize-none border-none px-4 pt-4 align-top outline-none bg-[#1e1f24] text-white text-sm"
                rows="2"
                placeholder="Görev eklemek için dokun..."
                type="text"
                id='text'
                name='text'
                value={note?.text}
                onChange={clickChange} /> : <textarea
                className="w-full resize-none border-none px-4 pt-4 align-top outline-none bg-[#1e1f24] text-white text-sm"
                rows="2"
                disabled
                placeholder="Bu bölüme manuel olarak görev eklenemez!"
                type="text"
                id='text'
                name='text'
                value={note?.text}
                onChange={clickChange} />}

              <div className="flex items-center justify-end gap-2 p-3 bg-[#1e1f24]">
                <input
                  className='rounded w-32 h-8 text-xs border-none outline-none px-4 font-medium text-white bg-gray-700'
                  type="date"
                  id='date'
                  name='date'
                  value={note?.date}
                  onChange={clickChange}

                />
                <button
                  type="button"
                  onClick={clearFunc}
                  className="rounded w-24 h-8 text-xs border-none outline-none font-medium text-white bg-gray-700">
                  Temizle
                </button>

                <button
                  type="button"
                  onClick={clickFunc}
                  className="rounded bg-[#6763fe] w-20 h-8 text-xs font-medium text-white hover:bg-[#424bf7]">
                  Ekle
                </button>
              </div>
            </div>
          </div>
          {/* <input
                        className='text-input'
                        type="text"
                        id='text'
                        name='text'
                        placeholder='Metin giriniz!'
                        value={note?.text}
                        onChange={clickChange}
                    />

                    <input
                    className='date-input'
                    type="date"
                    id='date'
                    name='date'
                    value={note?.date}
                    onChange={clickChange}

                />

                    <button className='text-[#da5050] bg-orange-400' onClick={clickFunc}>Ekle</button> */}

        </div>

        <div className='h-full w-full flex items-center overflow-y-scroll justify-start flex-col '>
          {notes
            .filter((note) => note.date === today)
            .map((nt, index) =>
              <Note
                notes={notes}
                note={nt}
                key={index}
                deleteFunc={deleteFunc}
                completedFunc={completedFunc}
                taskType={taskType}
                archivedFunc={archivedFunc}
                activedFunc={activedFunc}
              />)}

          {notes
            .filter((note) => note.date !== today)
            .map((nt, index) =>
              <Note
                notes={notes}
                note={nt}
                key={index}
                deleteFunc={deleteFunc}
                completedFunc={completedFunc}
                taskType={taskType}
                archivedFunc={archivedFunc}
                activedFunc={activedFunc}
                userId={userId}
              />)}
        </div>
      </div>
      {partnerTaskDiv ? <div className='w-full h-full bg-black/70 flex items-center justify-center fixed top-0 left-0'>
        <div className='w-1/2 h-1/2 bg-white rounded-lg'>
          <div className='w-full h-12 flex items-center justify-end'>
            <button onClick={exitPartnerTask} className="w-8 h-8 mr-4 ease-in duration-100 hover:text-white cursor-pointer flex items-center justify-center hover:bg-red-600 rounded-full text-black"><i class="fa-solid fa-xmark"></i></button>
          </div>
          {partnerTask.map((task, index) => <div key={index} className='w-full h-12 flex border-b border-gray-200'>
          <div className="h-12 w-1/6 flex">
          <div className='h-12 w-12 flex text-lg text-[#6763fe] justify-end items-center'><i class="fa-solid fa-paw"></i></div>
            <div className='h-12 w-8 flex text-sm font-bold text-gray-700 justify-center items-center'>{task.howPaw}</div>
          </div>
            <div className="w-4/6 h-12 flex items-center text-sm">{task.partnerText}</div>
            <div className="w-1/6 h-12 flex items-center justify-center">
              <button onClick={() => partnersClick(task.partnerText)} className='w-24 h-8 bg-[#424bf7] text-white text-sm rounded-md'>Kabul Et</button>
              {partnerClick ? <button onClick={partnersConf} className='bg-black text-white'>Onay</button> : ""}
            </div>
          </div>)}
        </div>
      </div> : ""}
    </div>
  )
}

export default NoteList