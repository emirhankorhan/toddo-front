import React, { useContext, useEffect } from 'react'
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
    activedFunc
  } = useContext(AppContext);

  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);

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




  return (
    <div className="body-cont">
      <div class="flex h-screen flex-col justify-between w-1/5 bg-[#1e1f24]">
        <div class="px-4 py-6">
          <div class="flex h-10 w-20 items-center justify-center rounded-lg bg-gray-100 text-xs">
            <div className='h-10 w-8 flex text-lg text-[#6763fe] justify-center items-center'><i class="fa-solid fa-paw"></i></div>
            <div className='h-10 w-8 flex text-sm font-bold text-gray-700 justify-center items-center'>{userPaw == null || NaN ? paww : userPaw}</div>
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
          {taskType === "active" ? <button className='py-2 px-4 bg-[#282736] border border-[#373580] rounded-md text-sm mr-4 text-[#6763fe]'>Etkin</button> : <button onClick={() => effectiveButton("active")} className='py-2 px-4 bg-[#1e1f24] rounded-md text-sm mr-4 border border-[#1e1f24] text-white'>Etkin</button>}
          {taskType === "completed" ? <button className='py-2 px-4 bg-[#282736] border border-[#373580] rounded-md text-sm mr-4 text-[#6763fe]'>Tamamlandı</button> : <button onClick={() => effectiveButton("completed")} className='py-2 px-4 bg-[#1e1f24] rounded-md text-sm mr-4 border border-[#1e1f24] text-white'>Tamamlandı</button>}
          {taskType === "archived" ? <button className='py-2 px-4 bg-[#282736] border border-[#373580] rounded-md text-sm mr-4 text-[#6763fe]'>Arşiv</button> : <button onClick={() => effectiveButton("archived")} className='py-2 px-4 bg-[#1e1f24] rounded-md text-sm mr-4 border border-[#1e1f24] text-white'>Arşiv</button>}
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
    </div>
  )
}

export default NoteList