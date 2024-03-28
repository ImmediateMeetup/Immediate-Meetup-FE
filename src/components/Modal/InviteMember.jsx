import React, {useState, useEffect} from 'react'
import BasicInput from '../input'
import {searchMember, inviteMember} from '../../apis'

export default function InviteMember({closeModal, meetingId}) {
  const [cookie] = useCookies(['AUTH-KEY'])

  const [searchMemberWord, setSearchMemberWord] = useState('')
  const [searchResult, setSearchResult] = useState({members: []})
  const [contactUser, setContactUser] = useState(null)

  useEffect(() => {
    console.log(searchResult)
  }, [searchResult])

  const backgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleSearch = async () => {
    if (searchMemberWord === '') return

    try {
      const response = await searchMember({keyword: searchMemberWord})
      setSearchResult(response)
    } catch (error) {
      alert(error)
    }
  }

  const handleInvite = async (email) => {
    await inviteMember({meetingId, email, cookie})
    closeModal()
  }

  const handleUserClick = (member) => {
    setContactUser(member)
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75"
      onClick={backgroundClick}
    >
      <div className="flex flex-col-reverse">
        <div className="p-5 flex flex-col bg-white rounded-lg mb-24 ml-3 mr-3 mt-3">
          <div className="flex items-center -mb-4">
            <BasicInput
              placeholder={'사용자를 검색해주세요'}
              type="code"
              valtype="code"
              onChange={(e) => setSearchMemberWord(e.target.value)}
            />
            <div className="flex justify-between ">
              <button
                type="submit"
                className="ml-5 w-[130px] h-[50px] text-white text-m bg-rose-200 rounded-lg p-2 hover:bg-rose-300"
                onClick={handleSearch}
              >
                검색
              </button>
            </div>
          </div>
          <div className="flex items-center flex-col">
            {searchResult.members.length > 0 ? (
              <div>
                {searchResult.members.map((member) => (
                  <div key={member.id} onClick={() => handleUserClick(member)}>
                    {member.name} - {member.email}
                  </div>
                ))}
              </div>
            ) : (
              <div>일치하는 멤버가 없습니다.</div>
            )}
            <button
              type="submit"
              className="w-[150px] mt-10 text-white text-m bg-blue-400 rounded-lg p-2 hover:bg-blue-300"
              onClick={handleInvite(contactUser.email)}
            >
              닫기
            </button>
            <button
              type="submit"
              className="w-[150px] mt-10 text-white text-m bg-rose-400 rounded-lg p-2 hover:bg-rose-300"
              onClick={closeModal}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
