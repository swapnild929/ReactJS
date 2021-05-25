import React from 'react'
import earthQuakeData from '../data/data.json'

export default function Profile() {

  const profile = earthQuakeData.profile

  const profileFields = [
    { label: "First Name", value: "firstName" },
    { label: "Last Name", value: "lastName" },
    { label: "Phone", value: "phone" },
    { label: "Email", value: "email" },
    { label: "Bio", value: "bio" }
  ]

  const profileList = []

  profileFields.map(field => {
    profileList.push(
      <div className='row' key={field.value}>
        <div className='detailTab title'>
          {field.label}
        </div>
        <div className='detailTab value'>
          {profile[field.value]}
        </div>
      </div>
    )
  });

  return (
    <article className='container'>
      <div class="profile-header">Profile</div>
      <div className='row'>
        <div className='image-column'>
          <img className="avatar" src={profile.avatarImage} />
        </div>
        <div className='profile-bio'>
          {profileList}
        </div>
      </div>
    </article>
  )
}