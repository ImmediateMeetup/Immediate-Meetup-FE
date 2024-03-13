import React, {useState, useEffect} from 'react'
import {searchMember} from '../../apis'

export default function InviteModal({onClose}) {
  const [searchMemberInput, setSearchMemberInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchBool, setSearchBool] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchMemberInput !== '') {
          const response = await searchMember({keyword: searchMemberInput})
          setSearchResults(response.members)
        } else {
          setSearchResults([])
        }
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    }

    fetchData()
  }, [searchMemberInput])

  const handleSearchInputChange = (e) => {
    setSearchMemberInput(e.target.value)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-30">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">구성원 초대하기</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchMemberInput}
          onChange={handleSearchInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
        />
        <button
          onClick={() => {
            setSearchMemberInput(searchMemberInput)
            setSearchBool(true)
          }}
          className="bg-rose-400 hover:bg-rose-600 text-white font-bold px-4 py-2 rounded-md"
        >
          Search
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 py-2 rounded-md ml-2"
        >
          Close
        </button>
        {searchBool && (
          <div>
            <h3>검색 결과:</h3>
            <ul>
              {searchResults.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
