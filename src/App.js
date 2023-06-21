import logo from './logo.svg';
import './App.css';
import { CreateNote, NavBar, NoteUICollection, UpdateNote } from './ui-components'
import { useState } from 'react'

function App () {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()
  return (
    <>
      <NavBar
        marginBottom='20px' width='100%'
        overrides={{
          Button31632483: { onClick: () => setShowCreateModal(true) }
        }}
      />
      <div className='container'>
        <NoteUICollection overrideItems={({ item, idx }) => {
  return {
    overrides: {
      Vector31472464: {
        as: 'button',
        onClick: () => {
          setShowUpdateModal(true)
          setUpdateNote(item)
        }
      }
    }
  }
}}
/> 
      </div>
      <div className='modal' style={{ display: showCreateModal === false && 'none' }}>
        <CreateNote overrides={{
            MyIcon: {
              as: 'button',
              onClick: () => setShowCreateModal(false)
            }
        }}
        />
      </div>
      <div className='modal' style={{ display: showUpdateModal === false && 'none' }}>
  <UpdateNote
    note={updateNote} overrides={{
      MyIcon: {
        as: 'button',
        onClick: () => setShowUpdateModal(false)
      }
    }}
  />
</div>
    </>
  )
}

export default App;
