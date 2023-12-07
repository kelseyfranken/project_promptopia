import React from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleEdit, handleDelete}) => {

  if (data) return (
    <div className='mt-10 prompt_layout'>
      {data.map((post) => (
        <PromptCard
        key={post._id}
        post={post}
        handleEdit={() => handleEdit && handleEdit(post)}
        handleDelete={() => handleDelete && handleDelete(post)}
        />
      ))}
    </div>
  ) 
  return (
  <div className='mt-10 prompt_layout'>
  {[...Array(3)].map((_, i) => (
    <PromptCard
    key={`prompt-card-loading-${i}`}
    />
  ))}
</div>
  )

}

const Profile = ({name, desc, data, handleDelete, handleEdit}) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'> 
        <span className='blue_gradient'> 
          {name} Profile
        </span>
        <p className='desc text-left'>{desc}</p>
        </h1>
        <PromptCardList data={data} handleDelete={handleDelete} handleEdit={handleEdit}/>

    </section>
  )
}

export default Profile
