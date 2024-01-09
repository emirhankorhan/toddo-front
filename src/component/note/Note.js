import React, { useState, useEffect } from 'react'
import "./note.css"


function Note({ note, deleteFunc, completedFunc, activedFunc, archivedFunc, taskType, userId }) {

  let formattedDate;
  const today = new Date().toISOString().slice(0, 10);
  const [deleteConfDiv, setDeleteConfDiv] = useState(false)

  const [optionsMenu, setOptionsMenu] = useState(false);
  const optionsMenuFunc = () => {
    setOptionsMenu((prevOptions) => !prevOptions);
  };


  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (optionsMenu && !e.target.closest("#dropdownMenu") && !e.target.closest(`#dropdownButton${note.noteId}`)) {
        setOptionsMenu(false);
      }
    };

    window.addEventListener("click", closeOnOutsideClick);

    return () => {
      window.removeEventListener("click", closeOnOutsideClick);
    };
  }, [optionsMenu, note.noteId]);

  if (note?.date) {
    const date = new Date(note.date);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    formattedDate = new Intl.DateTimeFormat('tr-TR', options).format(date);
  }

  const deleteConfirm = () => {
    setDeleteConfDiv(true)
    setOptionsMenu(false)
  }
  const deleteCancel = () => setDeleteConfDiv(false);

  return (
    <div className='w-3/4 bg-[#1e1f24] hover:bg-[#24252b] duration-300 h-auto flex rounded-md mb-2'>
      <div className='w-[8%] h-auto flex items-center justify-center'>
        {note.isCompleted === "active" || note.isCompleted === "partner" ? (<button className='w-4 h-4 border border-gray-300 rounded-full'
          onClick={() => completedFunc(note.noteId, note.isCompleted)}

        >

        </button>) : (note.isCompleted === "completed" ? <button className='w-4 h-4 text-xs flex items-center justify-center text-green-600'>
          <i class="fa-solid fa-check"></i>
        </button> : <button className='w-4 h-4 text-xs flex items-center justify-center text-[#6763fe]'>
          <i class="fa-solid fa-unlock"></i>
        </button>)}
      </div>
      <div className='w-[85%] h-auto my-4'>
        <div className="w-full flex items-center break-all justify-start h-auto text-sm text-white">
          {note?.text}
        </div>

        {note?.date == null || note?.date === "" ? "" : (note.date === today && note.isCompleted === "active" ? <div className="w-full h-6 flex items-end justify-start text-xs font-regular text-red-600">
          <i className="fa-regular fa-calendar-days text-red-600"></i> &nbsp; {formattedDate}
        </div> : <div className="w-full h-6 flex items-end justify-start text-xs font-regular text-gray-300">
          <i className="fa-regular fa-calendar-days text-[#6763fe]"></i> &nbsp; {formattedDate}
        </div>)}
      </div>
      <div className="w-[7%] h-auto flex items-center justify-center">
        <div className="relative">
          <div className="inline-flex items-center overflow-hidden rounded-full">


            <button id={`dropdownButton${note?.noteId}`} onClick={optionsMenuFunc} className="h-full p-2 flex items-center text-xs justify-center text-gray-400 hover:text-gray-300">
              <i class="fa-solid fa-caret-down"></i>
            </button>
          </div>

          {optionsMenu ? <div
            id='dropdownMenu'
            className="absolute end-0 z-10 mt-2 w-48 rounded-md border border-gray-700 bg-[#1e1f24] shadow-lg"
            role="menu"
          >
            <div className="p-2 border-b border-gray-700">
              {note.isCompleted === "active" || note.isCompleted === "partner" ? <button
                onClick={() => {
                  completedFunc(note.noteId);
                  setOptionsMenu(false)
                }}
                className="w-full h-9 flex items-center rounded-lg pl-4 text-sm text-gray-200 hover:bg-[#15161a]">
                Görevi Tamamla
              </button> : <button
                disabled
                className="w-full h-9 flex items-center rounded-lg pl-4 text-sm text-gray-500 hover:bg-[#15161a]">
                Görevi Tamamla
              </button>}



              {note.isCompleted === "active" || note.isCompleted === "partner" ? <button
                className="w-full h-9 flex items-center rounded-lg pl-4 text-sm text-gray-200 hover:bg-[#15161a]">
                Görevi Düzenle
              </button> : <button
                disabled
                className="w-full h-9 flex items-center rounded-lg pl-4 text-sm text-gray-500 hover:bg-[#15161a]">
                Görevi Düzenle
              </button>}

              {note.isCompleted === "active" || note.isCompleted === "partner" ? <button
                onClick={() => {
                  archivedFunc(note.noteId);
                  setOptionsMenu(false)
                }}
                className="w-full h-9 flex items-center rounded-lg pl-4 text-sm text-gray-200 hover:bg-[#15161a]">
                Arşive Ekle
              </button> : (note.isCompleted === "archived" ? <button
                onClick={() => {
                  activedFunc(note.noteId);
                  setOptionsMenu(false)
                }}
                className="w-full h-9 flex items-center rounded-lg pl-4 text-sm text-gray-200 hover:bg-[#15161a]">
                Arşivden Çıkar
              </button> : <button
                disabled
                className="w-full h-9 flex items-center rounded-lg pl-4 text-sm text-gray-500 hover:bg-[#15161a]">
                Arşive Ekle
              </button>)}
            </div>

            <div className="p-2">

              <button
                onClick={deleteConfirm}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-[#312222]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Görevi Sil
              </button>
            </div>
          </div> : null}
          {
            deleteConfDiv ? <div className='w-full h-full bg-black/60 fixed top-0 left-0 flex justify-center items-center'>
              <div className="w-96 h-40 bg-white rounded-md">
                <div className='w-96 h-16 flex justify-center items-end font-bold text-sm'>Bu notu silmek istediğine emin misin?</div>
                <div className='w-96 h-24 flex items-center justify-evenly'>
                  <button className='w-28 rounded-md text-sm font-bold text-white h-10 bg-[#6763fe]'
                    onClick={() => {
                      deleteFunc(note.noteId);
                      setOptionsMenu(false)
                    }}>Evet</button>
                  <button onClick={deleteCancel} className='w-28 rounded-md text-sm font-bold text-white h-10 bg-black'>Hayır</button>
                </div>
              </div>
            </div> : ""
          }
        </div>
      </div>
    </div>
  )
}

export default Note